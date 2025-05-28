import React from "react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="flex justify-center items-center border-t-2 border-primary3">
      <h1 className="text-primary4">{t("content")}</h1>
    </footer>
  );
};

export default Footer;
