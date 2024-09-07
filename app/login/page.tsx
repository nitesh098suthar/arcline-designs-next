"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Login = () => {
  const session = useSession();
  console.log(session);
  if (session.status === "loading") return <Button>Loading...</Button>;
  else if (session.status === "authenticated")
    return <Button onClick={() => signOut()}>Logout</Button>;
  else if (session.status === "unauthenticated")
    return <Button onClick={() => signIn("google")}>Login</Button>;
};

export default Login;
