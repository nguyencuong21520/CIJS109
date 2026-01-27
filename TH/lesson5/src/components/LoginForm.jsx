import { useState } from "react";
import { InputLabel } from "./InputLabel.jsx";

const initialLoginState = {
  email: "",
  password: "",
};

export const LoginForm = (props) => {
  const { onSubmit, loading, message, onSwitchToSignup } = props;
  const [form, setForm] = useState(initialLoginState);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-lg font-semibold text-slate-900 mb-2">Login</h2>

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
        <InputLabel label="Password" required />
        <input
          type="password"
          className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 placeholder:text-slate-400"
          placeholder="••••••••"
          value={form.password}
          onChange={(e) => handleChange("password", e.target.value)}
          required
        />
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
        {loading ? "Logging in..." : "Login"}
      </button>

      <p className="mt-3 text-center text-xs text-slate-500">
        New here?{" "}
        <button
          type="button"
          className="text-sky-700 font-medium hover:underline"
          onClick={onSwitchToSignup}
        >
          Sign up
        </button>
      </p>
    </form>
  );
};

