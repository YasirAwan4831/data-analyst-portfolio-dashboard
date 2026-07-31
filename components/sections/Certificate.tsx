"use client";
import { useState } from "react";
import { Lock, Eye, EyeOff, X, Shield, Award, FileText } from "lucide-react";
import { CERTIFICATE_PASSWORD } from "@/config/data";

type DocType = "certificate" | "offer";

function PasswordModal({
  type,
  onClose,
  onSuccess,
}: {
  type: DocType;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [password, setPassword]   = useState("");
  const [showPwd,   setShowPwd]   = useState(false);
  const [error,     setError]     = useState("");
  const [shaking,   setShaking]   = useState(false);

  const handleSubmit = () => {
    if (password === CERTIFICATE_PASSWORD) {
      setError("");
      onSuccess();
    } else {
      setError("Incorrect password. Please try again.");
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
    }
  };

  const label = type === "certificate" ? "Internship Certificate" : "Offer Letter";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className={`relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 ${shaking ? "animate-[shake_0.4s_ease]" : ""}`}>
        <button onClick={onClose} className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors">
          <X size={20} />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield size={28} className="text-primary-600" />
          </div>
          <h3 className="font-display font-bold text-xl text-gray-900 mb-1">Protected Document</h3>
          <p className="text-gray-500 text-sm">Enter password to view the <span className="font-semibold text-primary-600">{label}</span></p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <input
              type={showPwd ? "text" : "password"}
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="Enter password..."
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 pr-12 text-sm font-medium focus:border-primary-500 focus:outline-none transition-colors"
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShowPwd(!showPwd)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {error && (
            <p className="text-red-500 text-xs font-medium flex items-center gap-1.5">
              <span>⚠️</span> {error}
            </p>
          )}

          <button
            onClick={handleSubmit}
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-xl transition-colors text-sm"
          >
            Unlock Document
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          🔒 Password protected for privacy
        </p>
      </div>
    </div>
  );
}

function DocViewer({ type, onClose }: { type: DocType; onClose: () => void }) {
  const label = type === "certificate" ? "Internship Certificate" : "Offer Letter";
  const filename = type === "certificate" ? "/certificate.pdf" : "/offer-letter.pdf";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-bold text-gray-1100 text-lg">{label}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 p-1">
            <X size={20} />
          </button>
        </div>

        {/* Placeholder — replace with actual image/PDF */}
        <div className="bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 h-80 flex flex-col items-center justify-center text-center p-8">
          <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-4">
            {type === "certificate" ? <Award size={28} className="text-primary-600" /> : <FileText size={28} className="text-primary-600" />}
          </div>
          <p className="font-semibold text-gray-700 mb-2">{label}</p>
          <p className="text-gray-400 text-sm mb-4">
            Add your file to <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">public{filename}</code>
          </p>
          <a
            href={filename}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            Open / Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}

function DocCard({ type, title, description, icon: Icon }: {
  type: DocType; title: string; description: string; icon: typeof Award;
}) {
  const [showModal,   setShowModal]   = useState(false);
  const [showViewer,  setShowViewer]  = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col items-center text-center card-hover">
        <div className="w-20 h-20 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center mb-5 shadow-sm">
          <Icon size={32} className="text-primary-600" />
        </div>
        <h3 className="font-display font-bold text-gray-900 text-lg mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">{description}</p>

        <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
          <Lock size={12} className="text-primary-500" />
          <span>Password Protected</span>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-200 text-sm"
        >
          🔓 View {title}
        </button>
      </div>

      {showModal && (
        <PasswordModal
          type={type}
          onClose={() => setShowModal(false)}
          onSuccess={() => { setShowModal(false); setShowViewer(true); }}
        />
      )}
      {showViewer && (
        <DocViewer type={type} onClose={() => setShowViewer(false)} />
      )}
    </>
  );
}

export default function Certificate() {
  return (
    <section id="certificate" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-primary-600 tracking-widest uppercase mb-3 block">
            Logic Stack • Official Documents
          </span>
          <h2 className="text-4xl font-display font-extrabold text-gray-900 mb-4">
            Internship Certificate
          </h2>
          <div className="section-divider mx-auto mb-5" />
          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            Official documentation from Logic Stack certifying the successful completion of the
            1-month Data Analyst Internship. Protected for privacy — enter the password to view.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <DocCard
            type="certificate"
            title="Internship Certificate"
            description="Official certificate from Logic Stack confirming successful completion of the 4-week Data Analyst Internship program."
            icon={Award}
          />
          <DocCard
            type="offer"
            title="Offer Letter"
            description="Official internship offer letter from Logic Stack detailing the role, duration, and program details."
            icon={FileText}
          />
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          🔒 Documents are password-protected. Available to recruiters and mentors upon request.
        </p>
      </div>
    </section>
  );
}
