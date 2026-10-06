"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { DiGithub } from "react-icons/di";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const SignUp = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (error) {
      if (error.code === "USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL") {
        toast.error("এই ইমেইল দিয়ে ইতোমধ্যে অ্যাকাউন্ট তৈরি করা হয়েছে");
      }

      return;
    }

    if (data) {
      redirect("/");
    }
  };
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleGithubSignIn = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="text-center text-3xl font-bold text-gray-900">
          সাইন আপ
        </h1>

        <p className="mt-2 text-center text-sm text-gray-500">
          নতুন অ্যাকাউন্ট তৈরি করুন
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              নাম
            </label>
            <input
              name="name"
              type="text"
              placeholder="আপনার নাম"
              className="input w-full border-gray-300 bg-white"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              ইমেইল
            </label>
            <input
              name="email"
              type="email"
              placeholder="আপনার ইমেইল"
              className="input w-full border-gray-300 bg-white"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              পাসওয়ার্ড
            </label>
            <input
              name="password"
              type="password"
              placeholder="আপনার পাসওয়ার্ড"
              className="input w-full border-gray-300 bg-white"
            />
          </div>

          <button
            type="submit"
            className="btn w-full border-0 bg-cyan-700 text-white hover:bg-cyan-800"
          >
            সাইন আপ
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-600">
          ইতোমধ্যে অ্যাকাউন্ট আছে?{" "}
          <Link
            href="/sign-in"
            className="font-semibold text-cyan-700 hover:text-cyan-900"
          >
            সাইন ইন করুন
          </Link>
        </p>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="btn mt-4 w-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
        >
          <FcGoogle className="text-xl" />
          Google দিয়ে সাইন আপ করুন
        </button>
        <button
          type="button"
          onClick={handleGithubSignIn}
          className="btn mt-4 w-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
        >
          <DiGithub className="text-xl" />
          Github দিয়ে সাইন আপ করুন
        </button>
      </div>
    </div>
  );
};

export default SignUp;
