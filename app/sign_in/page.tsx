"use client";

import { Eye, EyeOff, Globe, Mail } from "lucide-react";
import React, { useState } from "react";
import Left_side from "./components/Left_side";
import Right_side_form from "./components/Right_side_form";

export default function sign_in() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <>
      <div className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden bg-[#f4eef0]">
        <Left_side />
        <Right_side_form />
      </div>
    </>
  );
}
