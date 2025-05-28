"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "../../../i18n/routing";
import { usePathname } from "../../../i18n/routing";
import Image from "next/image";

const Header = () => {
  const t = useTranslations("Header");
  const pathname = usePathname();
  const lang = useLocale();
  const selectedLang = (currentLang, lang) => {
    return currentLang === lang
      ? "text-primary1 hover:shadow-lg"
      : "text-primary3 hover:shadow-lg";
  };
  return (
    <header className="header flex items-center relative border-b-2 border-primary3 text-[40px]">
      <div className="flex justify-center items-center w-full">
        <Link href="/">
          <Image
            src="/imgs/find-cafes-logo-transparent.png"
            width={225}
            height={100}
            alt="logo"
          />
        </Link>
      </div>
      <div className="language-buttons absolute left-4 bottom-4 flex gap-1">
        <Link href={pathname} locale="ar">
          <h1 className={selectedLang(lang, "ar")}>عربي</h1>
        </Link>
        <h1 className="text-primary3">|</h1>
        <Link href={pathname} locale="en">
          <h1 className={selectedLang(lang, "en")}>ENG</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
