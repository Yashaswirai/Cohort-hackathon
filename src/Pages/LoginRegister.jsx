import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { gsap } from "gsap";
import { BackgroundGradientAnimation } from "../Constants/Background-gradient-animation";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const toggleRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const password = watch("password");

  useEffect(() => {
    // Initial page load animations
    const tl = gsap.timeline();

    tl.fromTo(
      containerRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
    )
      .fromTo(
        titleRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        formRef.current.children,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        toggleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
        "-=0.2"
      );
  }, []);

  const handleToggle = () => {
    const tl = gsap.timeline();

    tl.to(formRef.current, {
      x: -20,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    })
      .call(() => {
        setIsLogin(!isLogin);
        reset();
      })
      .to(formRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
  };

  const onSubmit = (data) => {
    console.log("Form data:", data);
    // Handle form submission here
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <BackgroundGradientAnimation className={"relative w-full h-full flex items-center justify-center"}>
        <div
          ref={containerRef}
          className="bg-gray-900 p-8 rounded-lg shadow-2xl w-1/3 border border-gray-700 relative z-10"
        >
          <h2
            ref={titleRef}
            className="text-3xl font-bold text-white text-center mb-8"
          >
            {isLogin ? "Login" : "Register"}
          </h2>

          <form
            ref={formRef}
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            {!isLogin && (
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("fullName", {
                    required: "Full name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                  className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white focus:outline-none transition-colors ${
                    errors.fullName
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-600 focus:border-gray-400"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
            )}

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white focus:outline-none transition-colors ${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-600 focus:border-gray-400"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className={`w-full px-4 py-3 pr-12 bg-gray-800 border rounded-lg text-white focus:outline-none transition-colors ${
                    errors.password
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-600 focus:border-gray-400"
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {!isLogin && (
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === password || "Passwords don't match",
                    })}
                    className={`w-full px-4 py-3 pr-12 bg-gray-800 border rounded-lg text-white focus:outline-none transition-colors ${
                      errors.confirmPassword
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-600 focus:border-gray-400"
                    }`}
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-white hover:bg-gray-200 text-black font-medium py-3 px-4 rounded-lg transition-colors"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>

          <div ref={toggleRef} className="text-center mt-6">
            <p className="text-gray-400">
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                onClick={handleToggle}
                className="text-white hover:text-gray-300 font-medium transition-colors"
              >
                {isLogin ? "Register" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default LoginRegister;
