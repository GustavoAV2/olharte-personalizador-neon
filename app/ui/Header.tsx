import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="flex flex-row justify-center gap-3 p-4 items-center">
      <Image src={"/Logo.png"} alt="Olharte Logo" width={170} height={100} />
      <div className="text-2xl">|</div>
      <div className="text-xl">Personalizador Neon</div>
    </div>
  );
}
