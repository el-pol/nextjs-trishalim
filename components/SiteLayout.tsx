import Head from "next/head";
import { Header } from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

const SiteLayout = ({
  children,
  showSkills = false,
}: {
  children: ReactNode;
  showSkills?: boolean;
}) => {
  const title = "Trisha Lim - Frontend Engineer";

  return (
    <div className="flex flex-col justify-between h-full">
      <Head>
        <title>{title}</title>
      </Head>

      <div>
        <Header />

        {children}
      </div>

      <Footer showSkills={showSkills} />
    </div>
  );
};

export default SiteLayout;
