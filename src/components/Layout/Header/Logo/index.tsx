"use client";

import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Logo: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc =
    mounted && resolvedTheme === "light"
      ? getImgPath("/images/logo/logo.svg") // Logo for light theme
      : getImgPath("/images/logo/logo-white.svg"); // Logo for dark theme

  return (
    <Link
      href="/"
      className="flex items-center transition-transform duration-300 hover:-translate-y-0.5"
    >
      <Image
        src={logoSrc}
        alt="Vertex logo"
        width={120}
        height={28}
        quality={100}
        priority
        className="h-8 w-auto transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 sm:h-9"
      />
    </Link>
  );
};

export default Logo;