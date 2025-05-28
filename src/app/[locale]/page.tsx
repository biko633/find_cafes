import { useTranslations } from "next-intl";
import Main from "../[locale]/compomemts/Main";
import { Link } from "i18n/routing";
import Hero from "../[locale]/compomemts/Hero";

/**
 * HomePage component serves as the main entry point of the application.
 * It renders the main layout which includes the Hero component.
 * This component is wrapped in a Main container with a flex layout.
 */

export default function HomePage() {
  // const t = useTranslations("Homepage");
  return (
    <Main>
      <Hero />
      {/* <Link href="/Test_Page">Test Page</Link> */}
    </Main>
  );
}
