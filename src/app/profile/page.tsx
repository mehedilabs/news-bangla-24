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
    <div className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-4 py-10">
      <div className="relative h-[520px] w-full max-w-5xl overflow-hidden">
        {/* Profile Card */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out ${
            isEditing ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="avatar">
                <div className="w-28 rounded-full ring-4 ring-cyan-100 ring-offset-2">
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
            <div className="mt-5 text-center">
              <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>

              <p className="mt-1 text-sm text-gray-500">{user?.email}</p>
            </div>

            {/* Account Information */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <h2 className="mb-4 text-center text-lg font-semibold text-gray-800">
                অ্যাকাউন্ট তথ্য
              </h2>

              <div className="space-y-3 rounded-xl bg-gray-50 p-5">
                <div className="text-sm text-gray-600">
                  নাম:{" "}
                  <span className="font-bold text-gray-900">{user?.name}</span>
                </div>

                <div className="text-sm text-gray-600">
                  ইমেইল:{" "}
                  <span className="font-bold text-gray-900">{user?.email}</span>
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <button
              onClick={() => setIsEditing(true)}
              className="btn mt-6 w-full border-0 bg-cyan-700 text-white hover:bg-cyan-800"
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* Edit Card */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out ${
            isEditing ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Edit Profile</h2>

              <p className="mt-2 text-sm text-gray-500">
                আপনার নাম অথবা প্রোফাইল ছবি পরিবর্তন করুন।
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleUpdateProfile} className="space-y-5">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  নতুন নাম
                </label>

                <input
                  name="name"
                  type="text"
                  placeholder="নতুন নাম লিখুন"
                  className="input w-full border-gray-300 bg-white"
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
                  className="input w-full border-gray-300 bg-white"
                />

                <p className="mt-2 text-xs text-gray-400">
                  Image URL দিলে আপনার profile picture পরিবর্তন হবে।
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-3">
                <button
                  type="submit"
                  className="btn flex-1 border-0 bg-cyan-700 text-white hover:bg-cyan-800"
                >
                  আপডেট করুন
                </button>

                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="btn flex-1 border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                >
                  বাতিল
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
