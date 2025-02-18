import React from "react";
import { useForm } from "react-hook-form";
import { InputText, Button, Checkbox } from "~/common/primereactImports.js";
import "~/assets/public/pages/login.css";
import GOOGLE_ICON from "~/assets/images/google-pngrepo-com.png";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Email:", data.email);
    console.log("Password:", data.password);
  };

  return (
    <div className="login">
      <div className="overlay">
        <div className="border-round-lg surface-overlay shadow-2 text-white w-full"
          style={{ maxWidth: "400px", backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <h1 className="text-4xl font-bold mb-3">Sign In</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column gap-3">
            <div className="mt-3">
              <span className="p-float-label w-full">
                <InputText id="email" type="email"
                  className={"w-full"} style={{ backgroundColor: " rgba(0, 0, 0, 0.5)" }}
                  {...register("email", { required: "Please enter a valid email or phone number." })}
                />
                <label htmlFor="email" style={{ color: errors.email ? "#e50914" : "inherit" }}>Email or mobile number</label>
              </span>
              {errors.email && <small style={{ color: "#e50914" }}>{errors.email.message}</small>}
            </div>

            <div className="mt-3">
              <span className="p-float-label w-full">
                <InputText id="password" type="password"
                  className={"w-full"} style={{ backgroundColor: " rgba(0, 0, 0, 0.5)" }}
                  {...register("password", { required: "Your password must contain between 4 and 60 characters." })} />
                <label htmlFor="password" style={{ color: errors.password ? "#e50914" : "inherit" }}>Password</label>
              </span>
              {errors.password && <small style={{ color: "#e50914" }}>{errors.password.message}</small>}
            </div>

            <Button type="submit" label="Sign In" className="w-full mt-3" style={{ backgroundColor: "#e50914", border: "none" }} />

            <div className="text-center text-white mt-2">OR</div>

            <Button
              type="button"
              className="w-full"
              style={{
                backgroundColor: "#333333",
                border: "none",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "8px"
              }}
            >
              <img alt="logo" src={GOOGLE_ICON} className="h-2rem" />
              <span>Sign-In With Google</span>
            </Button>



            <div className="flex justify-content-between align-items-center text-sm mt-2 text-white">
              <div className="flex align-items-center">
                <Checkbox inputId="remember" />
                <label htmlFor="remember" className="ml-2">Remember me</label>
              </div>
              <a href="#" className="text-primary">Forgot password?</a>
            </div>

            <p className="text-center mt-3 text-sm text-white">
              New to Viflix? <a href="#" onClick={() => navigate("/")} className="text-primary">Sign up now.</a>
            </p>

            <p className="text-center text-xs text-white opacity-70">
              This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" className="text-primary">Learn more.</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
