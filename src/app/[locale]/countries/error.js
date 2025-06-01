"use client";

import React from "react";
import { Link } from "../../../i18n/routing";
import { useTranslations } from "next-intl";

/**
 * Error component to display an error message and a reset button.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.error - The error object containing the error message.
 * @param {Function} props.reset - The function to reset or retry the action that caused the error.
 *
 * @returns A div containing the error message and a button to retry the operation.
 */

const Error = ({ error, reset }) => {
  const t = useTranslations("Error");
  return (
    <div className="flex flex-col gap-4 items-center justify-center text-5xl font-bold text-black h-full">
      <h2>{t("title")}</h2>
      <p className="text-2xl">{error.message}</p>
      <Link
        href="/"
        className="text-lg font-bold py-2 px-4 border border-black text-black rounded-lg bg-primary3 cursor-pointer"
      >
        {t("button")}
      </Link>
    </div>
  );
};

export default Error;
