import { useState } from "react";
import { InputLabel } from "./InputLabel.jsx";

const initialSignupState = {
  fullName: "",
  email: "",
  phone: "",
  password: "",
  location: "",
};

export const SignupForm = (props) => {
  const { onSubmit, loading, message, onSwitchToLogin } = props;
  const [form, setForm] = useState(initialSignupState);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <InputLabel label="Full name" required />
        <input
          type="text"
          className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 placeholder:text-slate-400"
          placeholder="Ade Tiger"
          value={form.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          required
        />
      </div>

      <div className="space-y-1">
        <InputLabel label="Email address" required />
        <input
          type="email"
          className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 placeholder:text-slate-400"
          placeholder="yourname@email.com"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          required
        />
      </div>

      <div className="space-y-1">
        <InputLabel label="Phone number" required />
        <div className="mt-1 flex rounded-md border border-slate-200 text-sm overflow-hidden">
          <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 border-r border-slate-200">
            <span className="text-lg">🇳🇬</span>
            <span className="text-slate-700 text-xs font-medium">+234</span>
          </div>
          <input
            type="tel"
            className="flex-1 px-3 py-2 outline-none placeholder:text-slate-400"
            placeholder="800 2738 9700"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-1">
        <InputLabel label="Create password" required />
        <div className="mt-1 flex items-center rounded-md border border-slate-200 px-3 py-2 text-sm focus-within:ring-2 focus-within:ring-sky-500 focus-within:border-sky-500">
          <input
            type={showPassword ? "text" : "password"}
            className="flex-1 outline-none placeholder:text-slate-400"
            placeholder="••••••••"
            value={form.password}
            onChange={(e) => handleChange("password", e.target.value)}
            minLength={8}
            required
          />
          <button
            type="button"
            className="ml-2 text-xs text-slate-500 hover:text-slate-700"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <p className="text-[11px] text-slate-400">
          Password must contain a minimum of 8 characters and at least one
          symbol (e.g. @, $, !).
        </p>
      </div>

      <div className="space-y-1">
        <InputLabel label="Location" customClassName="flex gap-1" />
        <select
          className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          value={form.location}
          onChange={(e) => handleChange("location", e.target.value)}
        >
          <option value="">Select Location</option>
          <option value="Lagos">Lagos</option>
          <option value="Abuja">Abuja</option>
          <option value="Port Harcourt">Port Harcourt</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {message && (
        <div
          className={`text-xs mt-2 ${
            message.type === "success" ? "text-emerald-600" : "text-red-500"
          }`}
        >
          {message.text}
        </div>
      )}

      <button
        type="submit"
        className="mt-4 w-full rounded-md bg-sky-900 text-white py-2.5 text-sm font-medium hover:bg-sky-800 disabled:opacity-60 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? "Signing you up..." : "Sign Up"}
      </button>

      <p className="mt-3 text-center text-xs text-slate-500">
        Already a user?{" "}
        <button
          type="button"
          className="text-sky-700 font-medium hover:underline"
          onClick={onSwitchToLogin}
        >
          Login
        </button>
      </p>
    </form>
  );
};

