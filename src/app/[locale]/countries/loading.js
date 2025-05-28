import React from "react";
import { useTranslations } from "next-intl";

/**
 * Loading component displays a spinner and loading messages.
 * The component utilizes the useTranslations hook from next-intl
 * to fetch localized loading messages. It renders a spinning SVG
 * icon to indicate a loading state and displays translated title
 * and content messages below the spinner. The component is styled
 * using Tailwind CSS classes for layout and design.
 */

export default function Loading() {
  const t = useTranslations("Loading");

  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-gray-600">
      <svg
        className="animate-spin -ml-1 mr-3 h-12 w-12 text-blue-500 mb-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <p className="text-2xl font-semibold">{t("title")}...</p>
      <p className="text-md text-primary4">{t("content")}</p>
    </div>
  );
}
