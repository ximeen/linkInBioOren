'use client'
import { WhatsappLogo, MapPin, Globe } from "@phosphor-icons/react";
import ProductLinks from "./components/ProductLinks";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <main className="px-4 mb-10">
        <header
          className="flex flex-col justify-center items-center pt-10">
          <Image
          width={500}
          height={500}
            src="/profile.png"
            alt="profile image"
            className="h-auto w-80 bg-no-repeat bg-cover" />
          <section className="mt-10 flex flex-col gap-2 text-center items-center">
            <div className="flex gap-2 items-center">
              <h3 className="lg:text-2xl text-xl font-semibold text-zinc-800">Oren Refrigeração Automotiva</h3>
              <Image width={20} height={20} className="h-7 w-7 " src="/verify.png" alt="Icon Verify" />
            </div>
            
          </section>
        </header>

        <section className="flex flex-col gap-4 pt-10 w-full md:justify-center md:items-center">
          
        <ProductLinks
              Name='Site'
              href='https://www.orenrefrigeracao.com.br/'
              icon={()=> <Globe width={30} height={30}  className="mr-2" />}
            />
            <ProductLinks
              Name='WhatsApp'
              href='https://wa.me/5599933219110'
              icon={()=> <WhatsappLogo width={30} height={30}  className="mr-2"/> }
            />
            <ProductLinks
              Name='Matriz Imperatriz-MA'
              href='https://www.google.com/maps/place/OREN+REFRIGERA%C3%87%C3%83O+-+AR+CONDICIONADO+AUTOMOTIVA/@-5.5198865,-47.4639448,15z/data=!4m6!3m5!1s0x92c55fae6c343761:0xff6402f9a0a077ae!8m2!3d-5.5198865!4d-47.4639448!16s%2Fg%2F11cs6jw360?entry=ttu'
              icon={()=> <MapPin width={30} height={30}  className="mr-2"/>}
            />
            <ProductLinks
              Name='Filial Balsas-MA'
              href='https://www.google.com.br/maps/place/Oren+Refrigera%C3%A7%C3%A3o+Automotiva/@-7.5148568,-46.0389255,17z/data=!4m6!3m5!1s0x92d5ef16b908309f:0xcd30bfb63cde1738!8m2!3d-7.5149332!4d-46.0388812!16s%2Fg%2F11r7sf7092?entry=ttu'
              icon={()=> <MapPin width={30} height={30}  className="mr-2"/>}
            />
          
            
        </section>
      </main>
    </>
  )
}