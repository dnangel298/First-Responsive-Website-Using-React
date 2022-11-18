import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Docs() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-8 px-6 py-8 sm:py-16 md:h-screen lg:py-0 xl:gap-16">
        <section className="rounded-lg bg-white px-4">
          <Fragment>
            <Accordion open={open === 1}>
              <AccordionHeader onClick={() => handleOpen(1)}>
                What is Material Tailwind?
              </AccordionHeader>

              <AccordionBody>
                Tailwind CSS is a highly customizable, low-level CSS framework
                that gives you all of the building blocks you need to build
                bespoke designs without any annoying opinionated styles you have
                to fight to override.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
              <AccordionHeader onClick={() => handleOpen(2)}>
                How to use Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
              <AccordionHeader onClick={() => handleOpen(3)}>
                What can I do with Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
          </Fragment>
        </section>
      </div>
    </>
  );
}
