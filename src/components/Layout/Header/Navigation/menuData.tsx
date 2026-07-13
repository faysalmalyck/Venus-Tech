import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    submenu: [
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Core Values", href: "/core-values" },
    ],
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Work",
    href: "/portfolio",
    submenu: [{ label: "Portfolio", href: "/portfolio" }],
  },
];
