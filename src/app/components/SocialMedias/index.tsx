"use client"
import { ReactNode } from "react";
interface SocialMediaProps {
  href: string
  children: ReactNode
}
export default function SocialMedias({ href, children }: SocialMediaProps) {
  return (
    <a
      target={"_blank"}
      href={href}
      className="p-2 bg-zinc-50 rounded-md transition-all duration-150 hover:bg-zinc-300">
      {children}
    </a>
  )
}