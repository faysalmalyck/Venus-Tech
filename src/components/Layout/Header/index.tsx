"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { useTheme } from "next-themes";
import { SuccessfullLogin } from "@/components/Auth/AuthDialog/SuccessfulLogin";
import { FailedLogin } from "@/components/Auth/AuthDialog/FailedLogin";
import { UserRegistered } from "@/components/Auth/AuthDialog/UserRegistered";
import AuthDialogContext from "@/app/context/AuthDialogContext";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navbarOpen]);

  const authDialog = useContext(AuthDialogContext);

  return (
    <header
      className={`fixed top-0 z-50 w-full px-3 py-4 transition-all duration-500 ${
        sticky
          ? "bg-white/75 shadow-[0_16px_60px_rgba(15,23,42,0.10)] backdrop-blur-2xl dark:bg-darklight/80 dark:shadow-dark-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex max-w-6xl items-center justify-between rounded-full border border-slate-950/10 bg-white/75 px-4 py-3 shadow-[0_18px_70px_rgba(15,23,42,0.10)] backdrop-blur-2xl dark:border-white/[0.12] dark:bg-white/[0.06]">
        <Logo />
        <nav className="hidden grow items-center justify-center gap-8 lg:flex">
          {headerData.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-body-color shadow-sm duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary dark:border-white/10 dark:bg-white/10 dark:text-white"
          >
            <svg
              viewBox="0 0 16 16"
              className={`hidden h-6 w-6 dark:block ${
                !sticky && pathUrl === "/" && "text-white"
              }`}
            >
              <path
                d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z"
                fill="#FFFFFF"
              />
            </svg>
            <svg
              viewBox="0 0 23 23"
              className={`h-8 w-8 text-dark dark:hidden ${
                !sticky && pathUrl === "/" && "text-white"
              }`}
            >
              <path d="M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z" />
            </svg>
          </button>
          <Link
            href="/contact"
            className="premium-gradient-button hidden rounded-full px-5 py-3 text-sm font-bold hover:-translate-y-0.5 lg:block"
          >
            Contact us
          </Link>
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="block rounded-full border border-slate-200/80 bg-white/80 p-3 shadow-sm lg:hidden dark:border-white/10 dark:bg-white/10"
            aria-label="Toggle mobile menu"
          >
            <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
            <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5"></span>
            <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5"></span>
          </button>
        </div>
      </div>
      {navbarOpen && (
        <button
          type="button"
          aria-label="Close mobile menu overlay"
          className="fixed left-0 top-0 z-40 h-full w-full bg-slate-950/60 backdrop-blur-sm"
          onClick={() => setNavbarOpen(false)}
        />
      )}

      <div
        ref={mobileMenuRef}
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-sm transform border-l border-white/20 bg-white/90 shadow-2xl backdrop-blur-2xl transition-transform duration-500 lg:hidden dark:bg-darkmode/95 ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200/70 p-5 dark:border-white/10">
          <h2 className="text-lg font-black text-midnight_text dark:text-white">
            Menu
          </h2>
          <button
            onClick={() => setNavbarOpen(false)}
            aria-label="Close mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="dark:text-white"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex max-h-[calc(100vh-86px)] flex-col items-start gap-2 overflow-y-auto p-5">
          {headerData.map((item, index) => (
            <MobileHeaderLink
              key={index}
              item={item}
              onNavigate={() => setNavbarOpen(false)}
            />
          ))}
          <div className="mt-5 flex w-full flex-col gap-3">
            <Link
              href="/contact"
              className="rounded-2xl border border-primary/30 px-4 py-3 text-center font-bold text-primary transition-all duration-300 hover:border-Sky-blue-mist/50 hover:bg-primary/10 hover:text-primary dark:text-white"
              onClick={() => setNavbarOpen(false)}
            >
              Contact us
            </Link>
            <Link
              href="/portfolio"
              className="premium-gradient-button rounded-2xl px-4 py-3 text-center font-bold"
              onClick={() => setNavbarOpen(false)}
            >
              View work
            </Link>
          </div>
        </nav>
      </div>
      {/* Successsful Login Alert */}
      <div
        className={`fixed top-6 end-1/2 translate-x-1/2 z-50 ${
          authDialog?.isSuccessDialogOpen == true ? "block" : "hidden"
        }`}
      >
        <SuccessfullLogin />
      </div>
      {/* Failed Login Alert */}
      <div
        className={`fixed top-6 end-1/2 translate-x-1/2 z-50 ${
          authDialog?.isFailedDialogOpen == true ? "block" : "hidden"
        }`}
      >
        <FailedLogin />
      </div>
      {/* User registration Alert */}
      <div
        className={`fixed top-6 end-1/2 translate-x-1/2 z-50 ${
          authDialog?.isUserRegistered == true ? "block" : "hidden"
        }`}
      >
        <UserRegistered />
      </div>
    </header>
  );
};

export default Header;
