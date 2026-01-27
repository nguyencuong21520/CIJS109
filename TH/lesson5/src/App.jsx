import { useState } from "react";
import { SignupForm } from "./components/SignupForm.jsx";
import { LoginForm } from "./components/LoginForm.jsx";

const API_URL =
  "https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=67fe6ce4c590d6933cc126d9";

const App = () => {
  const [mode, setMode] = useState("signup"); // "signup" | "login"
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null); // { type: "success" | "error", text: string }

  const handleSignup = async (formValues) => {
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formValues.fullName,
          email: formValues.email,
          phone: formValues.phone,
          password: formValues.password,
          location: formValues.location,
        }),
      });

      if (!response.ok) {
        throw new Error("Registration failed. Please try again.");
      }

      // Mockup server usually wraps data under data.data
      await response.json();

      setMessage({
        type: "success",
        text: "Sign up successfully. You can login now.",
      });
    } catch (error) {
      setMessage({
        type: "error",
        text: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (formValues) => {
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch(API_URL, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Login request failed. Please try again.");
      }

      const data = await response.json();
      const users = data?.data?.data || [];

      const matchedUser = users.find(
        (user) =>
          user.email === formValues.email &&
          // In a real app the password should be hashed and checked on the server
          user.password === formValues.password
      );

      if (!matchedUser) {
        setMessage({
          type: "error",
          text: "Invalid email or password.",
        });
      } else {
        setMessage({
          type: "success",
          text: `Welcome back, ${matchedUser.name}!`,
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const isSignup = mode === "signup";

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md px-6 py-10 bg-white shadow-md rounded-xl">
        <h1 className="text-2xl font-semibold text-slate-900 mb-6">
          Let&apos;s get you started
        </h1>

        {isSignup ? (
          <SignupForm
            loading={loading}
            message={message}
            onSubmit={handleSignup}
            onSwitchToLogin={() => {
              setMode("login");
              setMessage(null);
            }}
          />
        ) : (
          <LoginForm
            loading={loading}
            message={message}
            onSubmit={handleLogin}
            onSwitchToSignup={() => {
              setMode("signup");
              setMessage(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default App;

