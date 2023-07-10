'use client'
import { WhatsappLogo, MapPin, Globe } from "@phosphor-icons/react";
import ProductLinks from "./components/ProductLinks";
import Image from "next/image";

export default function Home() {

  return (
    <main className="px-4 mb-10">
      <header
        className="flex flex-col justify-center items-center pt-10">
        <Image
        width={300}
        height={300}
          src="/profile.png"
          alt="profile image"
          className="h-auto w-52 bg-no-repeat bg-cover" />
        <section className="mt-10 flex flex-col gap-2 text-center items-center">
          <div className="flex gap-2 items-center">
            <h3 className="text-2xl font-semibold text-zinc-800">Analogicatec</h3>
            <Image width={20} height={20} className="h-7 w-7 " src="/verify.png" alt="" />
          </div>
          <div>
            <span className="flex justify-center max-w-xs gap-1 text-zinc-700">Automatize a gestão de ponto/frequência de seus colaborares, com o uso de softwares em nuvem e equipamentos digital de alta tecnologia.</span>
          </div>
        </section>
      </header>

      <section className="flex flex-col gap-4 pt-10 w-full md:justify-center md:items-center">
        
      <ProductLinks
            Name='Site'
            href='https://analogicatec.com.br/'
            icon={()=> <Globe width={30} height={30}  className="mr-2" />}
          />
          <ProductLinks
            Name='Contato Imperatriz-MA'
            href='https://wa.me/5599992178301'
            icon={()=> <WhatsappLogo width={30} height={30}  className="mr-2"/> }
          />
           <ProductLinks
            Name='Localização Imperatriz-MA'
            href='https://www.google.com.br/maps/place/Anal%C3%B3gica+Tecnologia+Controle+de+Ponto+e+Acesso/@-5.5222759,-47.482239,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMmBPqJw_ZObSv2Q_Odt2VvXQdDeohJgS3BoROT!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMmBPqJw_ZObSv2Q_Odt2VvXQdDeohJgS3BoROT%3Dw108-h86-k-no!7i2602!8i2070!4m7!3m6!1s0x92c55e33d3c860a7:0xcfd88d4efe137fcd!8m2!3d-5.5222411!4d-47.4821868!10e5!16s%2Fg%2F1tggc11d?entry=ttu'
            icon={()=> <MapPin width={30} height={30}  className="mr-2"/>}
          />
           <ProductLinks
            Name='Contato Marabá-PA'
            href='https://wa.me/5594991453838'
            icon={()=> <WhatsappLogo width={30} height={30}  className="mr-2"/>}
          />
            <ProductLinks
            Name='Localização Marabá-PA'
            href='https://www.google.com/maps/search/Av.%20Itacai%C3%BAnas%2C%201804%20-%20Cidade%20Nova%2C%20Marab%C3%A1%20-%20PA%2C%2068501-533%2C%20Brasil/@-5.3701,-49.1245,17z?hl=pt-BR'
            icon={()=> <MapPin width={30} height={30}  className="mr-2"/>}
          />
      </section>
    </main>
  )
}