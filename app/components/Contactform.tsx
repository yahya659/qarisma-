"use client";

import React, { useState } from "react";

export default function ContactUsPage() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting:", { fullname, email, message });
  };

  return (
    <section className="relative w-full min-h-screen font-sans flex flex-col items-center justify-start py-20 px-6 md:px-12 overflow-hidden">
      {/* 1. الخلفية الأساسية (اللون الوردي الهادئ) */}
     
      {/* 2. صورة الجلسة داخل الفقاعة (تموضع مطلق دقيق) */}
      <div className="absolute inset-0 -z-20 flex justify-center bg-[#BD9FA9CC] items-end opacity-20">
        <img
          src="/images/contact.png" 
          alt="Bubble Cafe Scene"
          className="w-full   h-auto object-contain  translate-y-20 "
        />
      </div>
      <div className="absolute inset-0 -z-30 bg-[#BD9FA9CC]/80" />


      <div className="max-w-7xl w-full flex flex-col items-center gap-12 relative z-10">
        {/* 3. العناوين (تظهر فوق كل شيء) */}
        <div className="text-center z-20">
          <h1 className="text-5xl md:text-[70px] font-bold text-white leading-tight mb-3 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-[48px]   text-[#00052B] opacity-95 tracking-wide font-medium">
            Get inTouch With US
          </p>
        </div>

        {/* 4. النموذج البنفسجي الشفاف (The Glassmorphism Container) */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-5xl    p-10 md:p-16   flex flex-col gap-12 relative z-10  "
        >
          {/* حقل Fullname */}
          <div className="w-full flex flex-col gap-4 ">
            <label className="text-3xl font-bold text-black/90">Fullname</label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Enter Your fullname"
              className="w-full md:w-[500px] p-6 text-2xl text-black placeholder:text-black/40  bg-[#5D5FEF33]  focus:outline-none focus:ring-4 focus:ring-[#6366F1]/50 transition-all shadow-inner"
            />
          </div>

          {/* حقل Email Address */}
          <div className="w-full flex flex-col gap-4">
            <label className="text-3xl font-bold text-black/90">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Address"
              className="w-full md:w-[750px] p-6 bg-[#5D5FEF33] rounded-2xl  text-2xl text-black placeholder:text-black/40 border border-white/20 focus:outline-none focus:ring-4 focus:ring-[#6366F1]/50 transition-all shadow-inner"
            />
          </div>

          {/* حقل Message */}
          <div className="w-full flex flex-col gap-4">
            <label className="text-3xl font-bold text-black/90">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your messge"
              rows={10}
              className="w-full p-6 rounded-3xl bg-[#5D5FEF33] text-2xl text-black placeholder:text-black/40 border border-white/20 focus:outline-none focus:ring-4 focus:ring-[#6366F1]/50 resize-none transition-all shadow-inner"
            />
          </div>

          {/* زر Submit الوردي (يتوضع فوق النموذج) */}
          <div className="w-full flex justify-end mt-6">
            <button
              type="submit"
              className="px-24 py-6 rounded-2xl  bg-[#5D5FEF] text-white text-3xl font-bold shadow-xl hover:bg-[#d8b0be] hover:text-[#6366F1] transition-all active:scale-95 z-20"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
