'use client'
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Login = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <Button>Loading...</Button>;

  if (status === "authenticated")
    return (
      <>
        <p>Welcome, {session?.user?.name}</p>
        <Button onClick={() => signOut()}>Logout</Button>
      </>
    );

  return <Button onClick={() => signIn("google")}>Login</Button>;
};

export default Login;
