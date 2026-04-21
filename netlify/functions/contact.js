const SMTP2GO_ENDPOINT = "https://api.smtp2go.com/v3/email/send";

const jsonHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};

exports.handler = async function contact(event) {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: jsonHeaders,
      body: ""
    };
  }

  if (event.httpMethod !== "POST") {
    return response(405, { ok: false, message: "Method not allowed." });
  }

  const apiKey = process.env.SMTP2GO_API_KEY;
  const sender = process.env.SMTP2GO_SENDER;
  const recipient = process.env.CONTACT_FORM_RECIPIENT;

  if (!apiKey || !sender || !recipient) {
    return response(500, {
      ok: false,
      message: "Contact form is not configured."
    });
  }

  let payload;

  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return response(400, {
      ok: false,
      message: "Invalid request payload."
    });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const phone = clean(payload.phone);
  const message = clean(payload.message);
  const source = clean(payload.source);
  const honeypot = clean(payload.company);

  if (honeypot) {
    return response(200, {
      ok: true,
      message: "Thank you for your message."
    });
  }

  const validationError = validate({ name, email, message });

  if (validationError) {
    return response(400, {
      ok: false,
      message: validationError
    });
  }

  const subject = `Nový dopyt z webu - ${name}`;
  const textBody = [
    "Nový dopyt z webu pozicovnalesenia.sk",
    "",
    `Meno: ${name}`,
    `Email: ${email}`,
    `Telefón: ${phone || "-"}`,
    `Zdroj: ${source || "-"}`,
    "",
    "Správa:",
    message
  ].join("\n");

  const htmlBody = `
    <h2>Nový dopyt z webu pozicovnalesenia.sk</h2>
    <p><strong>Meno:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Telefón:</strong> ${escapeHtml(phone || "-")}</p>
    <p><strong>Zdroj:</strong> ${escapeHtml(source || "-")}</p>
    <hr>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  try {
    const smtpResponse = await fetch(SMTP2GO_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        api_key: apiKey,
        to: [recipient],
        sender,
        subject,
        text_body: textBody,
        html_body: htmlBody,
        custom_headers: [
          {
            header: "Reply-To",
            value: `${name} <${email}>`
          }
        ]
      })
    });

    const smtpData = await smtpResponse.json().catch(() => ({}));
    const failed = Number(smtpData?.data?.failed || 0);

    if (!smtpResponse.ok || failed > 0) {
      return response(502, {
        ok: false,
        message: "Email service rejected the message."
      });
    }

    return response(200, {
      ok: true,
      message: "Správa bola odoslaná. Čoskoro sa Vám ozveme."
    });
  } catch {
    return response(502, {
      ok: false,
      message: "Email service is currently unavailable."
    });
  }
};

function response(statusCode, body) {
  return {
    statusCode,
    headers: jsonHeaders,
    body: JSON.stringify(body)
  };
}

function clean(value) {
  return String(value || "")
    .replace(/\0/g, "")
    .trim();
}

function validate({ name, email, message }) {
  if (!name) {
    return "Prosím, vyplňte meno.";
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Prosím, zadajte platný email.";
  }

  if (!message) {
    return "Prosím, vyplňte správu.";
  }

  if (message.length > 4000) {
    return "Správa je príliš dlhá.";
  }

  return "";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
