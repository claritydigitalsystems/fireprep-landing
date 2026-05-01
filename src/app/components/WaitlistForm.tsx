"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistForm({ id = "waitlist-form" }: { id?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim()) {
      setErrorMessage("Add your email to join the waitlist.");
      setStatus("error");
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage("That doesn't look like a valid email — try again.");
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data: { success: boolean; error?: string } = await res.json();

      if (data.success) {
        setStatus("success");
      } else {
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div id={id}>
        <p className="font-medium text-text-primary">You&apos;re on the list.</p>
        <p className="mt-1 text-sm text-text-secondary">
          We&apos;ll be in touch when early access is ready.
        </p>
      </div>
    );
  }

  return (
    <div id={id}>
      <form onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") {
                setStatus("idle");
                setErrorMessage("");
              }
            }}
            placeholder="you@email.com"
            disabled={status === "loading"}
            className="flex-1 rounded-lg border border-border bg-surface-raised px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="cursor-pointer whitespace-nowrap rounded-lg bg-orange px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-orange-hover disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Joining..." : "Join the Waitlist"}
          </button>
        </div>
        {status === "error" && errorMessage && (
          <p className="mt-2 text-sm text-red-400">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}
