"use client";
import React from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const SignIn = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (error) {
      if (error.code === "INVALID_EMAIL_OR_PASSWORD") {
        toast.error("ইমেইল অথবা পাসওয়ার্ড ভুল হয়েছে");
      }
    }

    if (data) {
      console.log(data);
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="text-center text-3xl font-bold text-gray-900">
          সাইন ইন
        </h1>

        <p className="mt-2 text-center text-sm text-gray-500">
          আপনার অ্যাকাউন্টে লগইন করুন
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              ইমেইল
            </label>
            <input
              type="email"
              name="email"
              placeholder="আপনার ইমেইল"
              className="input w-full border-gray-300 bg-white"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              পাসওয়ার্ড
            </label>
            <input
              type="password"
              name="password"
              placeholder="আপনার পাসওয়ার্ড"
              className="input w-full border-gray-300 bg-white"
            />
          </div>

          <button
            type="submit"
            className="btn w-full border-0 bg-cyan-700 text-white hover:bg-cyan-800"
          >
            সাইন ইন
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-600">
          অ্যাকাউন্ট নেই?{" "}
          <Link
            href="/sign-up"
            className="font-semibold text-cyan-700 hover:text-cyan-900"
          >
            সাইন আপ করুন
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
