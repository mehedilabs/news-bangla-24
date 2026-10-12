"use client";

import { useEffect } from "react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const AuthToast = () => {
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (isPending) return;

    const normalLoginSuccess = sessionStorage.getItem("normal-login-success");

    if (!session?.user) return;

    if (normalLoginSuccess === "true") {
      sessionStorage.removeItem("normal-login-success");
      toast.success("সফলভাবে লগইন হয়েছে");
    }
  }, [isPending, session]);

  return null;
};

export default AuthToast;
