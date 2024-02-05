import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <Link
      href="/"
      className="flex flex-row justify-center gap-3 p-4 items-center"
    >
      <Image src={"/Logo.png"} alt="Olharte Logo" width={100} height={100} />
    </Link>
  );
}
