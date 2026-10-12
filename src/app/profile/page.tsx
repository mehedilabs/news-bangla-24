"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React, { useState } from "react";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name") as string;
    const image = formData.get("image") as string;

    await authClient.updateUser({
      ...(name && { name }),
      ...(image && { image }),
    });

    setIsEditing(false);
  };

  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-3 py-8 sm:px-5 sm:py-10">
      <div className="relative min-h-[500px] w-full max-w-5xl overflow-hidden sm:min-h-[520px]">
        {/* Profile Card */}
        <div
          className={`absolute inset-0 flex items-start justify-center overflow-y-auto transition-transform duration-500 ease-in-out sm:items-center ${
            isEditing ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="my-2 w-full max-w-md rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:my-0 sm:p-6 md:p-8">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="avatar">
                <div className="w-16 rounded-full ring-4 ring-cyan-100 ring-offset-2 sm:w-28">
                  <Image
                    src={
                      user?.image ||
                      "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                    }
                    alt="Profile"
                    width={112}
                    height={112}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Name & Email */}
            <div className="mt-5 min-w-0 text-center">
              <h1 className="break-words text-xl font-bold text-gray-900 sm:text-2xl">
                {user?.name}
              </h1>

              <p className="mt-1 break-all text-sm text-gray-500">
                {user?.email}
              </p>
            </div>

            {/* Account Information */}
            <div className="mt-6 border-t border-gray-200 pt-5 sm:mt-8 sm:pt-6">
              <h2 className="mb-4 text-center text-base font-semibold text-gray-800 sm:text-lg">
                অ্যাকাউন্ট তথ্য
              </h2>

              <div className="space-y-3 rounded-xl bg-gray-50 p-3 sm:p-5">
                <div className="break-words text-sm text-gray-600">
                  নাম:{" "}
                  <span className="font-bold text-gray-900">{user?.name}</span>
                </div>

                <div className="break-words text-sm text-gray-600">
                  ইমেইল:{" "}
                  <span className="font-bold text-gray-900">{user?.email}</span>
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <button
              onClick={() => setIsEditing(true)}
              className="btn mt-5 min-h-11 w-full border-0 bg-cyan-700 text-white hover:bg-cyan-800 sm:mt-6"
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* Edit Card */}
        <div
          className={`absolute inset-0 flex items-start justify-center overflow-y-auto transition-transform duration-500 ease-in-out sm:items-center ${
            isEditing ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="my-2 w-full max-w-md rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:my-0 sm:p-6 md:p-8">
            {/* Header */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Edit Profile
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                আপনার নাম অথবা প্রোফাইল ছবি পরিবর্তন করুন।
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleUpdateProfile}
              className="space-y-4 sm:space-y-5"
            >
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  নতুন নাম
                </label>

                <input
                  name="name"
                  type="text"
                  placeholder="নতুন নাম লিখুন"
                  className="input h-11 w-full border-gray-300 bg-white text-sm sm:h-12"
                />
              </div>

              {/* Image */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  নতুন প্রোফাইল ছবি
                </label>

                <input
                  name="image"
                  type="url"
                  placeholder="নতুন ছবির URL দিন"
                  className="input h-11 w-full border-gray-300 bg-white text-sm sm:h-12"
                />

                <p className="mt-2 text-xs leading-5 text-gray-400">
                  Image URL দিলে আপনার profile picture পরিবর্তন হবে।
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:pt-3">
                <button
                  type="submit"
                  className="btn min-h-11 w-full flex-1 border-0 bg-cyan-700 text-white hover:bg-cyan-800"
                >
                  আপডেট করুন
                </button>

                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="btn min-h-11 w-full flex-1 border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                >
                  বাতিল
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
