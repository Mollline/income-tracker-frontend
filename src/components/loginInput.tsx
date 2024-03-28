import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

interface LoginInputProps {}

export const LoginInput: React.FC<LoginInputProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const loginUser = async (email: string, password: string) => {
    try {
      setIsLoading(true);

      // Basic client-side validation
      if (!email.trim()) {
        setError("Email is required");
        return;
      }

      if (!password) {
        setError("Password is required");
        return;
      }

      await axios.post("http://localhost:9999/login", {
        password,
        email,
      });

      // Assuming login was successful
      alert("User found");
      router.push("/");
      localStorage.setItem("email", String(true));
      localStorage.setItem("_id",String(true))
    } catch (err) {
      // Handle error appropriately
      alert("User not found");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        width: "50vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "384px",
          gap: "40px",
          height: "426.31px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ width: "384px", height: "176px" }}>
          <input
            style={{
              width: "384px",
              height: "48px",
              padding: "16px",
              marginBottom: "16px",
              borderRadius: "8px",
              border: "1px solid #D1D5DB",
              backgroundColor: "#F3F4F6",
            }}
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(""); // Clear previous error when user changes input
            }}
          />
          <input
            style={{
              width: "384px",
              height: "48px",
              padding: "16px",
              marginBottom: "16px",
              borderRadius: "8px",
              border: "1px solid #D1D5DB",
              backgroundColor: "#F3F4F6",
            }}
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(""); // Clear previous error when user changes input
            }}
          />
          
          <div
            style={{
              width: "384px",
              height: "48px",
              padding: "0px 16px 0px 16px",
              borderRadius: "20px",
              gap: "4px",
              backgroundColor: "#0166FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => loginUser(email, password)}
          >
            <div
              style={{
                fontFamily: "Roboto",
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "28px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "white",
              }}
            >
              {isLoading ? "Logging in..." : "Log in"}
            </div>
          </div>
            {error && (
            <div style={{ color: "red", marginBottom: "16px" }}>{error}</div>
          )}
        </div>
      </div>
    </div>
  );
};
