import { React, Fragment } from "react";

import CoverPage from "./../CverPage/CoverPage";
import UpperContent from "./../Contents/Upper";
import MiddleContent from "./../Contents/Middle";
import BottomContent from "./../Contents/Bottom";
import FooterSection from "./../Contents/Footer";
import TeamSection from "./../Contents/Teams";

export default function Home() {
  return (
    <Fragment>
      <CoverPage />
      <UpperContent />
      <MiddleContent />
      <BottomContent />
      <TeamSection />
      <FooterSection />
    </Fragment>
  );
}
