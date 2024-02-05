import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <Link
      href="/"
      className="flex flex-row justify-center gap-3 p-4 items-center"
    >
      <Image src={"/Logo.png"} alt="Olharte Logo" width={170} height={100} />
      <div className="text-2xl">|</div>
      <div className="text-xl">Personalizador Neon</div>
    </Link>
  );
}
