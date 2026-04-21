"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Consent = {
  necessary: boolean;
  statistical: boolean;
  marketing: boolean;
};

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<Consent>({
    necessary: true,
    statistical: false,
    marketing: false
  });

  useEffect(() => {
    const saved = localStorage.getItem("cookie-consent");
    if (!saved) {
      setShowBanner(true);
    } else {
      try {
        setConsent(JSON.parse(saved));
      } catch {
        setShowBanner(true);
      }
    }

    const handleOpenSettings = () => {
      setShowSettings(true);
      setShowBanner(false);
    };

    window.addEventListener("open-cookie-settings", handleOpenSettings);
    return () => window.removeEventListener("open-cookie-settings", handleOpenSettings);
  }, []);

  const saveConsent = (newConsent: Consent) => {
    setConsent(newConsent);
    localStorage.setItem("cookie-consent", JSON.stringify(newConsent));
    setShowBanner(false);
    setShowSettings(false);
    // Here you would trigger actual script loading based on consent
  };

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      statistical: true,
      marketing: true
    });
  };

  const handleSaveSettings = () => {
    saveConsent(consent);
  };

  if (!showBanner && !showSettings) return null;

  return (
    <>
      {showBanner && (
        <div className="fixed inset-x-4 bottom-4 z-[200] md:inset-x-auto md:right-8 md:max-w-md">
          <div className="relative border-2 border-zinc-950 bg-white p-6 shadow-[8px_8px_0_#18181b]">
            <h2 className="text-xl font-black tracking-normal text-zinc-950">Používame cookies</h2>
            <p className="mt-3 text-sm font-medium leading-6 text-zinc-600">
              Naša stránka používa cookies na zabezpečenie základnej funkčnosti a na analýzu návštevnosti.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={handleAcceptAll}
                className="btn-orange text-sm"
              >
                Prijať všetko
              </button>
              <button
                onClick={() => {
                  setShowSettings(true);
                  setShowBanner(false);
                }}
                className="text-sm font-bold text-zinc-950 underline underline-offset-4 hover:text-orange-700"
              >
                Nastavenia
              </button>
            </div>
          </div>
        </div>
      )}

      {showSettings && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-zinc-950/40 backdrop-blur-sm" 
            onClick={() => setShowSettings(false)}
          />
          <div className="relative w-full max-w-lg border-2 border-zinc-950 bg-white p-8 shadow-[12px_12px_0_#18181b]">
            <h2 className="text-3xl font-black tracking-normal text-zinc-950">Nastavenia súkromia</h2>
            <p className="mt-4 text-sm font-medium leading-6 text-zinc-600">
              Upravte si nastavenia cookies podľa svojich preferencií. Nevyhnutné cookies nemožno vypnúť, nakoľko sú potrebné pre fungovanie webu.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-zinc-950">Nevyhnutné cookies</h3>
                  <p className="text-xs text-zinc-500">Potrebné pre správny chod stránky.</p>
                </div>
                <div className="relative inline-flex h-6 w-11 shrink-0 cursor-not-allowed items-center rounded-full bg-zinc-200">
                  <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-zinc-950">Štatistické cookies</h3>
                  <p className="text-xs text-zinc-500">Pomáhajú nám pochopiť, ako návštevníci interagujú s webom.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setConsent(c => ({ ...c, statistical: !c.statistical }))}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out ${consent.statistical ? 'bg-orange-600' : 'bg-zinc-200'}`}
                >
                  <span className={`${consent.statistical ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out`} />
                </button>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-zinc-950">Marketingové cookies</h3>
                  <p className="text-xs text-zinc-500">Slúžia na zobrazovanie relevantnej reklamy.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setConsent(c => ({ ...c, marketing: !c.marketing }))}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out ${consent.marketing ? 'bg-orange-600' : 'bg-zinc-200'}`}
                >
                  <span className={`${consent.marketing ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out`} />
                </button>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={handleSaveSettings}
                className="btn-orange"
              >
                Uložiť nastavenia
              </button>
              <button
                onClick={handleAcceptAll}
                className="text-sm font-bold text-zinc-950 underline underline-offset-4 hover:text-orange-700"
              >
                Prijať všetko
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
