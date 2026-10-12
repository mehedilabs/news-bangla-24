"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { DiGithub } from "react-icons/di";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
    };

    if (!user.name.trim()) {
      toast.warn("আপনার নাম লিখুন");
      return;
    }

    if (!user.email.trim()) {
      toast.warn("আপনার ইমেইল লিখুন");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      toast.warn("সঠিক ইমেইল ঠিকানা দিন");
      return;
    }

    if (!user.password) {
      toast.warn("পাসওয়ার্ড লিখুন");
      return;
    }

    if (user.password.length < 8) {
      toast.warn("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
      return;
    }

    try {
      const { data, error } = await authClient.signUp.email({
        ...user,
        callbackURL: "/",
      });

      if (error) {
        if (error.code === "USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL") {
          toast.error("এই ইমেইল দিয়ে ইতোমধ্যে অ্যাকাউন্ট তৈরি করা হয়েছে");
        } else {
          toast.error("অ্যাকাউন্ট তৈরি করা যায়নি। আবার চেষ্টা করুন");
        }

        return;
      }

      if (data) {
        toast.success("সফলভাবে অ্যাকাউন্ট তৈরি হয়েছে");
        router.push("/");
      }
    } catch {
      toast.error("অ্যাকাউন্ট তৈরি করা যায়নি। আবার চেষ্টা করুন");
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
          সাইন আপ
        </h1>

        <p className="mt-2 text-center text-sm leading-6 text-gray-500">
          নতুন অ্যাকাউন্ট তৈরি করুন
        </p>

        <form onSubmit={onSubmit} className="mt-5 space-y-4 sm:mt-6">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              নাম
            </label>
            <input
              name="name"
              type="text"
              placeholder="আপনার নাম"
              className="input h-11 w-full border-gray-300 bg-white text-sm sm:h-12"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              ইমেইল
            </label>
            <input
              name="email"
              type="email"
              placeholder="আপনার ইমেইল"
              className="input h-11 w-full border-gray-300 bg-white text-sm sm:h-12"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              পাসওয়ার্ড
            </label>
            <input
              name="password"
              type="password"
              placeholder="আপনার পাসওয়ার্ড"
              className="input h-11 w-full border-gray-300 bg-white text-sm sm:h-12"
            />
          </div>

          <button
            type="submit"
            className="btn h-11 w-full border-0 bg-cyan-700 text-sm text-white hover:bg-cyan-800 sm:h-12"
          >
            সাইন আপ
          </button>
        </form>

        <p className="mt-5 text-center text-sm leading-6 text-gray-600">
          ইতোমধ্যে অ্যাকাউন্ট আছে?{" "}
          <Link
            href="/signin"
            className="font-semibold text-cyan-700 hover:text-cyan-900"
          >
            সাইন ইন করুন
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

export default SignUp;
