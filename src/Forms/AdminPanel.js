import { Fragment } from "react";
import { React, useState } from "react";
import AdminImage from "../HeroImage/admin.png";
import { LineChart, BarChart } from "./Chart";
import SideBar from "../NavigationBar/Sidebar";

export default function AdminPanel() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Fragment>
        <SideBar />
        <section>
          <main>
            <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
              <div className="w-full scale-90 rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-lg md:mt-0 xl:p-5">
                <LineChart />
              </div>
              <div className="w-full scale-90 rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-lg md:mt-0 xl:p-5">
                <BarChart />
              </div>
            </div>
          </main>
        </section>
      </Fragment>
    </>
  );
}
