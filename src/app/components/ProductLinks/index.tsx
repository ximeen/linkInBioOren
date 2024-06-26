"use client"
import { WhatsappLogo } from "@phosphor-icons/react";
import Image from "next/image";
interface LinkProps {
  href: string,
  Name: string,
  icon?: ()=>void
}
export default function Links({ href, Name, icon }: LinkProps) {
  return (
    <div className="h-full flex  bg-emerald-600 hover:bg-emerald-700 text-zinc-100 font-semibold rounded-md items-center justify-around md:w-1/2 lg:w-1/3 transition-colors">
    <>
      <a
        target={"_blank"}
        href={href}
        className="w-full h-full p-3">
        {Name}
      </a>
      {icon && icon()}
      </>
      </div>
  )
}