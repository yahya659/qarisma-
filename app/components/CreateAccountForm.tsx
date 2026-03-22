"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

// Schema للتحقق من كل الحقول
const createAccountSchema = z
  .object({
    firstname: z.string().min(2, "Enter your first name"),
    lastname: z.string().min(2, "Enter your last name"),
    email: z.string().email("Invalid email address"),
    gender: z.enum(["male", "female"], "Select a gender"),
    phone: z.string().min(6, "Enter a valid phone number"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type CreateAccountFormData = z.infer<typeof createAccountSchema>;

export default function CreateAccountForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<CreateAccountFormData>({
    resolver: zodResolver(createAccountSchema),
  });

  const onSubmit = async (data: CreateAccountFormData) => {
    try {
      setIsLoading(true);

      // 🔥 هنا يمكنك استبدالها بـ API حقيقي
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Create Account Data:", data);

      // تحويل بعد التسجيل
      router.push("/login");

    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center w-full max-w-[999px] 
             bg-white/10 backdrop-blur-lg rounded-[28px] sm:rounded-[38px] 
             p-6 sm:p-8 md:p-10 border border-white/30 shadow-2xl"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 mb-8 sm:mb-10">
        <div className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[120px] md:h-[120px] rounded-full overflow-hidden shadow-sm">
          <img src="images/logo.png" alt="Logo" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-[26px] sm:text-[34px] md:text-[42px] font-bold text-[#2A2A2A] tracking-tight">
          create an account
        </h1>
      </div>

      <div className="w-full space-y-6">
        {/* Firstname & Lastname */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-[16px] sm:text-[18px] md:text-[20px] font-bold ml-2">Firstname</label>
            <input
              {...register("firstname")}
              placeholder="enter your name"
              className="w-full bg-white/80 py-3 px-5 rounded-2xl border-none text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.firstname && <p className="text-red-500 text-xs">{errors.firstname.message}</p>}
          </div>
          <div className="space-y-1">
            <label className="text-[16px] sm:text-[18px] md:text-[20px] font-bold ml-2">Lastname</label>
            <input
              {...register("lastname")}
              placeholder="enter your name"
              className="w-full bg-white/80 py-3 px-5 rounded-2xl border-none text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.lastname && <p className="text-red-500 text-xs">{errors.lastname.message}</p>}
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="text-[16px] sm:text-[18px] md:text-[20px] font-bold ml-2">Email Address</label>
          <input
            {...register("email")}
            type="email"
            placeholder="johnsmith@example.com"
            className="w-full bg-white/80 py-3 px-5 rounded-2xl border-none text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        {/* Gender & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-[16px] sm:text-[18px] md:text-[20px] font-bold ml-2">Gender</label>
            <select
              {...register("gender")}
              className="w-full bg-white/80 py-3 px-5 rounded-2xl border-none text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-400 appearance-none"
            >
              <option value="">select</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
            {errors.gender && <p className="text-red-500 text-xs">{errors.gender.message}</p>}
          </div>
          <div className="space-y-1">
            <label className="text-[16px] sm:text-[18px] md:text-[20px] font-bold ml-2">Phone Number</label>
            <input
              {...register("phone")}
              type="tel"
              placeholder="+12313"
              className="w-full bg-white/80 py-3 px-5 rounded-2xl border-none text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Password & Confirm Password */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-[16px] sm:text-[18px] md:text-[20px] font-bold ml-2">Password</label>
            <input
              {...register("password")}
              type="password"
              placeholder="enter your password"
              className="w-full bg-white/80 py-3 px-5 rounded-2xl border-none text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
          </div>
          <div className="space-y-1">
            <label className="text-[16px] sm:text-[18px] md:text-[20px] font-bold ml-2">Confirm Password</label>
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="enter your password"
              className="w-full bg-white/80 py-3 px-5 rounded-2xl border-none text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            disabled={isLoading}
            className="w-[400px] h-[56px] bg-[#5853D6] text-white font-semibold rounded-full shadow-xl hover:bg-[#4a45b8] transition-all duration-300 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? "Creating Account..." : "Create an account"}
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mx-auto w-full max-w-[399px] my-[23px]">
          <div className="flex-1 h-[0.5px] bg-black"></div>
          <span className="px-4 text-[16px] sm:text-[18px] md:text-[20px] text-black font-normal lowercase tracking-wide">Or</span>
          <div className="flex-1 h-[0.5px] bg-black"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col items-center gap-4 mt-6">
          <p className="text-[16px] sm:text-[18px] md:text-[20px] text-white font-medium mb-4">Sign up with</p>
          <div className="flex gap-4">
            <button type="button" className="p-3 bg-white shadow-md border border-[#F178B6] hover:scale-110 transition-transform">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-6 h-6" alt="Google" />
            </button>
            <button type="button" className="p-3 bg-white shadow-md border border-[#F178B6] hover:scale-110 transition-transform">
              <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-6 h-6" alt="Facebook" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}