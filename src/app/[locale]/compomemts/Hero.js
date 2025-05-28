import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "i18n/routing";

/**
 * The Hero component renders a full-screen hero section with a background image.
 * It includes a title, content, and a button, all of which are translated using
 * the useTranslations hook from next-intl. The button links to the countries page.
 * The component is styled with Tailwind CSS classes for layout and design.
 */

const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <div className="w-full h-screen">
      <img
        src="/imgs/background-image.jpg"
        className="w-full h-full object-cover"
        alt="background"
      />
      <div className="hero w-[500px] h-[450px] container absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 bg-primary3 rounded-3xl p-6 grid gap-10 text-center">
        <h2 className="hero-title text-primary1 text-5xl font-bold">
          {t("title")}
        </h2>
        <p className="hero-content text-primary1 text-3xl">{t("content")}</p>
        <Link
          href="/countries"
          className="hero-button text-primary1 text-2xl font-bold bg-primary4 rounded-full p-6 self-center hover:shadow-lg"
        >
          {t("button")}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
