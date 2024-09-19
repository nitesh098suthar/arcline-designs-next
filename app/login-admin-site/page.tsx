"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Login = () => {
  const { data: session, status } = useSession();
  console.log(session, status);
  if (status === "loading") return <Button>Loading...</Button>;

  if (status === "authenticated")
    return (
      <>
        <p>Welcome, {session?.user?.name}</p>
        <p>
          goto admin site{" "}
          <Link href="/admin/show-projects" className="text-primary underline">
            Admin
          </Link>
        </p>
        <Button onClick={() => signOut()}>Logout</Button>
      </>
    );

  return <Button onClick={() => signIn("google")}>Login</Button>;
};

export default Login;
