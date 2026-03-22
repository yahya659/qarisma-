"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signupSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    try {
      setIsLoading(true);

      // 🔥 Replace with real API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Signup Data:", data);

      // ✅ تحويل بعد النجاح
      router.push("/login");

    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-start p-6 bg-[#f2e9e9]">
      <div className="w-full max-w-[400px] flex flex-col items-center">

        {/* Logo */}
        <div className="mb-2">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img
              src="images/logo.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-[38px] font-bold text-[#2A2A2A] mb-4 tracking-tight">
          sign up
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-2">

          {/* Username */}
          <div className="space-y-1">
            <label className="text-[11px] text-gray-400 font-bold ml-4">
              Username
            </label>
            <input
              {...register("username")}
              placeholder="johnsmith"
              className="w-full bg-[#fcfcfc] py-[14px] px-4 rounded-2xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            {errors.username && (
              <p className="text-red-500 text-xs ml-4">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="text-[11px] text-gray-400 font-bold ml-4">
              Email Address
            </label>
            <input
              {...register("email")}
              placeholder="johnsmith@example.com"
              className="w-full bg-[#fcfcfc] py-[14px] px-4 rounded-2xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            {errors.email && (
              <p className="text-red-500 text-xs ml-4">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="text-[11px] text-gray-400 font-bold ml-4">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="w-full bg-[#fcfcfc] py-[14px] px-4 rounded-2xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            {errors.password && (
              <p className="text-red-500 text-xs ml-4">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="space-y-1">
            <label className="text-[11px] text-gray-400 font-bold ml-4">
              Confirm Password
            </label>
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirm Password"
              className="w-full bg-[#fcfcfc] py-[14px] px-4 rounded-2xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs ml-4">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#5853D6] text-white font-bold rounded-[2rem] mt-4 shadow-lg shadow-indigo-200 active:scale-[0.98] transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
            style={{
              height: "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isLoading ? "Creating Account..." : "Continue"}
          </button>

        </form>

        {/* Divider */}
        <div
          className="flex items-center justify-center my-[23px] w-full"
          style={{ maxWidth: "399px", height: "26px" }}
        >
          <div className="flex-1 h-[1px] bg-gray-200"></div>
          <span className="px-4 text-400 text-sm">Or</span>
          <div className="flex-1 h-[1px] bg-gray-200"></div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <button
            type="button"
            className="flex items-center justify-center gap-2 border border-[#F178B6] bg-white py-3 text-sm font-medium text-gray-700 shadow-sm"
          >
            Continue with Google
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2 border border-[#F178B6] bg-white py-3 text-sm font-medium text-gray-700 shadow-sm"
          >
            Continue with Facebook
          </button>
        </div>

        <p className="text-center text-[10px] text-gray-400 mt-6">
          Already have an account?{" "}
          <span className="text-blue-600 font-bold underline cursor-pointer">
            Log In
          </span>
        </p>
      </div>
    </div>
  );
}