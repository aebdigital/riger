"use client";

import { FormEvent, useState } from "react";

type FormState = {
  type: "idle" | "loading" | "success" | "error";
  message: string;
};

export function InquiryForm() {
  const [state, setState] = useState<FormState>({
    type: "idle",
    message: ""
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();
    const company = String(data.get("company") || "").trim();

    if (!name || !email || !message) {
      setState({
        type: "error",
        message: "Prosím, vyplňte meno, email a správu."
      });
      return;
    }

    setState({
      type: "loading",
      message: "Odosielam správu..."
    });

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          company,
          source: window.location.href
        })
      });

      const result = (await response.json().catch(() => null)) as { ok?: boolean; message?: string } | null;

      if (!response.ok || !result?.ok) {
        throw new Error(result?.message || "Správu sa nepodarilo odoslať.");
      }

      setState({
        type: "success",
        message: result.message || "Správa bola odoslaná. Čoskoro sa Vám ozveme."
      });
      form.reset();
    } catch (error) {
      setState({
        type: "error",
        message: error instanceof Error ? error.message : "Správu sa nepodarilo odoslať."
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
      <label className="hidden" aria-hidden="true">
        Firma
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-bold text-zinc-900">Vaše meno</span>
        <input className="form-field" name="name" type="text" autoComplete="name" required />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-bold text-zinc-900">Váš email</span>
        <input className="form-field" name="email" type="email" autoComplete="email" required />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-bold text-zinc-900">Telefónne číslo</span>
        <input className="form-field" name="phone" type="tel" autoComplete="tel" required />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-bold text-zinc-900">Vaša správa</span>
        <textarea className="form-field min-h-36 resize-y" name="message" required />
      </label>
      <button
        type="submit"
        disabled={state.type === "loading"}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-orange-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {state.type === "loading" ? <span className="button-spinner" aria-hidden="true" /> : null}
        {state.type === "loading" ? "Odosielam" : "Objednať"}
      </button>
      {state.message ? (
        <p className={`form-message ${state.type === "success" ? "form-message--success" : ""} ${state.type === "error" ? "form-message--error" : ""}`} aria-live="polite">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
