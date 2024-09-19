'use client'
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const SwitchingButtons = () => {
  return (
    <div className="sidebar grid place-items-center pt-14">
      <p className="text-3xl font-semibold text-center mb-4">
        Welcome to admin side
      </p>
      <span className="flex flex-wrap gap-2 justify-center">
        <Link href="/admin/add-projects">
          <button
            className="bg-primary p-2 w-40 outline-none rounded-md text-white hover:bg-primary/90"
            //   onClick={() => setAssigner("first")}
          >
            Add Projects
          </button>
        </Link>
        <Link href="/admin/show-projects">
          <button
            className="bg-primary p-2 w-40 outline-none rounded-md text-white hover:bg-primary/90"
            //   onClick={showProjectHandler}
          >
            Show Projects
          </button>
        </Link>
        <Link href="/">
          <button
            className="bg-primary p-2 w-40 outline-none rounded-md text-white hover:bg-primary/90"
            onClick={() => signOut()}
          >
            Logout Admin
          </button>
        </Link>
      </span>
    </div>
  );
};

export default SwitchingButtons;
