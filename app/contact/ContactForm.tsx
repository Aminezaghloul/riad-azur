"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok) throw new Error(result?.error || "Unable to send message.");
      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setSubject("General Inquiry");
      setMessage("");
    } catch (error) {
      console.error("Contact form submission failed", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-sand-200 border border-sand-300 p-8 sm:p-12 text-center space-y-4 shadow-card">
        <CheckCircle2 className="w-16 h-16 text-palm-800 mx-auto" />
        <h3 className="font-serif text-3xl text-obsidian-900">Thank you.</h3>
        <p className="text-taupe-600 text-xs sm:text-sm font-sans max-w-md mx-auto leading-relaxed">
          Your message has been sent successfully. We will reply as soon as possible.
        </p>
        <div className="pt-4">
          <Button variant="outline" onClick={() => setStatus("idle")}>Send Another Message</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-sand-200 border border-sand-300 p-8 sm:p-10 shadow-card space-y-6">
      <div>
        <h2 className="font-serif text-3xl text-obsidian-900">Send a Message</h2>
        <p className="text-taupe-600 text-xs font-sans mt-1">
          Send a direct inquiry to the Riad Azur concept team.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-obsidian-900 font-medium uppercase tracking-wider mb-1">
              Your Full Name *
            </label>
            <input
              type="text"
              required
              maxLength={120}
              placeholder="e.g. Marc Vance"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-sand-100 border border-sand-400 text-obsidian-900 px-4 py-3 focus:outline-none focus:border-obsidian-900"
            />
          </div>

          <div>
            <label className="block text-obsidian-900 font-medium uppercase tracking-wider mb-1">
              Email Address *
            </label>
            <input
              type="email"
              required
              maxLength={254}
              placeholder="marc@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-sand-100 border border-sand-400 text-obsidian-900 px-4 py-3 focus:outline-none focus:border-obsidian-900"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-obsidian-900 font-medium uppercase tracking-wider mb-1">
              Phone / WhatsApp Number
            </label>
            <input
              type="tel"
              maxLength={40}
              placeholder="+33 6 12 34 56 78"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-sand-100 border border-sand-400 text-obsidian-900 px-4 py-3 focus:outline-none focus:border-obsidian-900"
            />
          </div>

          <div>
            <label className="block text-obsidian-900 font-medium uppercase tracking-wider mb-1">
              Inquiry Topic
            </label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-sand-100 border border-sand-400 text-obsidian-900 px-4 py-3 focus:outline-none focus:border-obsidian-900"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Room & Stay Inquiry">Room & Stay Inquiry</option>
              <option value="Wellness & Spa Request">Wellness & Spa Request</option>
              <option value="Event or Group Inquiry">Event or Group Inquiry</option>
              <option value="Transfer & Arrival">Transfer & Arrival</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-obsidian-900 font-medium uppercase tracking-wider mb-1">
            Your Message *
          </label>
          <textarea
            rows={5}
            required
            maxLength={5000}
            placeholder="How can we help?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-sand-100 border border-sand-400 text-obsidian-900 px-4 py-3 focus:outline-none focus:border-obsidian-900"
          />
        </div>

        {status === "error" && (
          <p className="text-rose-600 text-xs font-sans">
            Your message could not be sent. Please check the details and try again.
          </p>
        )}

        <div className="pt-2">
          <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto" disabled={status === "sending"}>
            <Send className="w-4 h-4 mr-2 inline" /> {status === "sending" ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  );
}
