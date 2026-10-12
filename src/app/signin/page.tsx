"use client";

import React from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";
import { DiGithub } from "react-icons/di";

const SignIn = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    if (!user.email.trim()) {
      toast.warn("আপনার ইমেইল লিখুন");
      return;
    }

    if (!user.password) {
      toast.warn("পাসওয়ার্ড লিখুন");
      return;
    }

    try {
      const { error } = await authClient.signIn.email({
        ...user,
        callbackURL: "/",
      });

      if (error) {
        if (error.code === "INVALID_EMAIL_OR_PASSWORD") {
          toast.error("ইমেইল অথবা পাসওয়ার্ড ভুল হয়েছে");
        } else {
          toast.error("লগইন করা যায়নি। আবার চেষ্টা করুন");
        }
        return;
      }

      sessionStorage.setItem("normal-login-success", "true");
      window.location.href = "/";
    } catch {
      toast.error("লগইন করা যায়নি। আবার চেষ্টা করুন");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await authClient.signIn.social({
        provider: "google",
      });

      if (error) {
        toast.error("Google দিয়ে লগইন করা যায়নি। আবার চেষ্টা করুন।");
      }
    } catch {
      toast.error("Google দিয়ে লগইন করা যায়নি। আবার চেষ্টা করুন।");
    }
  };

  const handleGithubSignIn = async () => {
    try {
      const { error } = await authClient.signIn.social({
        provider: "github",
      });

      if (error) {
        toast.error("GitHub দিয়ে লগইন করা যায়নি। আবার চেষ্টা করুন।");
      }
    } catch {
      toast.error("GitHub দিয়ে লগইন করা যায়নি। আবার চেষ্টা করুন।");
    }
  };

  return (
    <main className="flex min-h-[70vh] w-full items-center justify-center px-3 py-8 sm:px-5 sm:py-10">
      <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <h1 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          সাইন ইন
        </h1>

        <p className="mt-2 text-center text-sm leading-6 text-gray-500">
          আপনার অ্যাকাউন্টে লগইন করুন
        </p>

        <form onSubmit={onSubmit} className="mt-5 space-y-4 sm:mt-6">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              ইমেইল
            </label>
            <input
              type="email"
              name="email"
              placeholder="আপনার ইমেইল"
              className="input h-11 w-full border-gray-300 bg-white text-sm sm:h-12"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              পাসওয়ার্ড
            </label>
            <input
              type="password"
              name="password"
              placeholder="আপনার পাসওয়ার্ড"
              className="input h-11 w-full border-gray-300 bg-white text-sm sm:h-12"
            />
          </div>

          <button
            type="submit"
            className="btn h-11 w-full border-0 bg-cyan-700 text-sm text-white hover:bg-cyan-800 sm:h-12"
          >
            সাইন ইন
          </button>
        </form>

        <p className="mt-5 text-center text-sm leading-6 text-gray-600">
          অ্যাকাউন্ট নেই?{" "}
          <Link
            href="/signup"
            className="font-semibold text-cyan-700 hover:text-cyan-900"
          >
            সাইন আপ করুন
          </Link>
        </p>

        <div className="mt-5 space-y-3">
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn h-11 w-full flex-nowrap border border-gray-300 bg-white px-3 text-sm text-gray-700 hover:bg-gray-50 sm:h-12"
          >
            <FcGoogle className="shrink-0 text-xl" />
            <span>Google দিয়ে সাইন আপ করুন</span>
          </button>

          <button
            type="button"
            onClick={handleGithubSignIn}
            className="btn h-11 w-full flex-nowrap border border-gray-300 bg-white px-3 text-sm text-gray-700 hover:bg-gray-50 sm:h-12"
          >
            <DiGithub className="shrink-0 text-xl" />
            <span>Github দিয়ে সাইন আপ করুন</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
