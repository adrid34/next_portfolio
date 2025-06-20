"use client";

import { Fragment } from "react";
import Intro from "./components/intro";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Education from "./components/education";
import CertificationSection from "./components/certification-section";

export default function Home() {
  return (
    <Fragment>
      <Intro />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <CertificationSection />
      <Contact />
    </Fragment>
  );
}
