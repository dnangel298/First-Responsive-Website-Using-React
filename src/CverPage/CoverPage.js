import WebCoverImage from "../Cover/coverimg.jpg";
import { motion } from "framer-motion";
import { Button } from "@material-tailwind/react";
import HeroImage from "../HeroImage/hero.png";

//framer motion variants
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
//--------------------------

export default function CoverPage() {
  return (
    <>
      {" "}
      {/*<div className="container m-10 mx-auto rounded-xl border bg-gray-200 p-8 font-sans shadow-xl">
        <p className="mb-5 text-2xl font-bold text-gray-700">Welcome!</p>
        <p className="text-lg text-gray-500">
          React and Tailwind CSS in Action
        </p>
      </div>
      */}
      <section>
        <div className="mx-auto max-w-screen-xl items-center gap-8 py-8 px-4 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
          <img
            className="w-full dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            alt="dashboardimage"
          />
          <img
            className="hidden w-full dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboardimage"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="to my-4 mb-4 bg-cyan-600 bg-gradient-to-r from-white bg-clip-text text-4xl font-extrabold tracking-tight text-transparent dark:text-white">
              Let's create more tools and ideas that brings us together.
            </h2>
            <p className="mb-6 font-light text-white">
              Flowbite helps you connect with friends and communities of people
              who share your interests. Connecting with your friends and family
              as well as discovering new ones is easy with features like Groups.
            </p>
            <a
              href="*"
              className="inline-flex items-center rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300"
            >
              Get Started
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <div className="pt-24">
        <div className="container mx-auto flex flex-col flex-wrap items-center px-3 md:flex-row">
          <div className="font-mono flex w-full flex-col items-start justify-center text-center md:w-2/5 md:text-left">
            <p className="tracking-loose to w-full bg-cyan-600 bg-gradient-to-r from-white bg-clip-text text-3xl uppercase text-transparent">
              Your Asian Team
            </p>
            <h1 className="to my-4 bg-cyan-600  bg-gradient-to-r from-white bg-clip-text text-5xl font-bold leading-tight text-transparent">
              This is our team!
            </h1>
            <p className="mb-8 text-2xl leading-normal text-white">
              Duis quis est leo. Suspendisse non tortor vitae nibh tincidunt
              posuere a nec lacus. Fusce posuere auctor turpis eget iaculis.
              Cras sed interdum massa. Nunc ultrices pellentesque ante a cursus.
              Morbi quis fermentum tortor, vitae elementum felis. Ut laoreet
              sapien et tellus rhoncus laoreet. Maecenas arcu mauris, aliquet in
              mollis vel, semper aliquet justo. Donec viverra sagittis semper.
              Ut sapien felis, suscipit vel ante sit amet, egestas tincidunt
              purus. Duis tempus augue nulla. Quisque vitae ligula eu sem
              fermentum hendrerit.
            </p>
            <Button
              variant="gradient"
              size="sm"
              className="bg:white focus:shadow-outline font-mono mx-auto my-6 transform rounded-full py-4 px-8 font-bold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:text-black hover:underline focus:outline-none lg:mx-0"
            >
              Join Us
            </Button>
          </div>
          <div className="w-full py-6 text-center md:w-3/5">
            <img className="z-50 w-full md:w-4/5" src={HeroImage} alt="hero" />
          </div>
        </div>
      </div>
      {/* 
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
      */}
      {/* 
        <div className="mx-auto max-w-5xl rounded-lg py-6 sm:px-6 lg:px-8">
       
          <motion.div
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {[0].map((index) => (
              <div className=" px-4 py-0 shadow-2xl sm:px-0">
                <motion.div key={index} className="item" variants={item}>
                  <img
                    className="h-auto max-w-full rounded-lg object-fill shadow-2xl "
                    src={WebCoverImage}
                    alt="cover"
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
          
     
        </div>
      </main>
      */}
    </>
  );
}
