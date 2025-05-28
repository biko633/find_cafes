// "use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

/**
 * This component renders a global not found page. It is used in the
 * _app.tsx file to handle 404 errors. It displays a title and content
 * which are translated using the useTranslations hook from next-intl.
 * The content is a link to the homepage.
 *
 * @returns A JSX element representing the not found page.
 */
const GlobalNotFound = () => {
  const t = useTranslations("NotFound");

  return (
    <html lang="en" style={{ backgroundColor: "#ab886d", height: "100%" }}>
      <body>
        <div
          style={{
            textAlign: "center",
            marginTop: "15%",
            fontSize: "30px",
            color: "black",
            fontWeight: "bold",
          }}
        >
          <h2>{t("title")}</h2>
          <p>{t("content")}</p>
          <Link
            href="/"
            style={{
              color: "black",
              fontSize: "20px",
              fontWeight: "bold",
              padding: "10px",
              border: "1px solid black",
              borderRadius: "10px",
              textDecoration: "none",
              margin: "10px",
              backgroundColor: "#d6c0b3",
              cursor: "pointer",
              display: "inline-block",
              transition: "background-color 0.3s ease-in-out",
            }}
          >
            {t("button")}
          </Link>
        </div>
      </body>
    </html>
  );
};

export default GlobalNotFound;
