"use client";
import { type ReactNode } from "react";
import { useRouter } from "next/navigation";

interface loginButtonProps {
  children: ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export default function LoginButton({
  children,
  mode = "redirect",
  asChild,
}: loginButtonProps) {
  const router = useRouter();

  function onClick() {
    router.push("/auth/login");
  }

  if (mode === "modal") {
    return <span>TODO:Implement Modal</span>;
  }

  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
}
