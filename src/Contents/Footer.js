export default function FooterSection() {
  return (
    //FOOTER SECTION
    <>
      <footer className="bg-gray-900">
        <div className="cotainer mx-auto px-24">
          <div className="flex w-full flex-col py-6 md:flex-row">
            <div className="mb-6 flex-1 text-black">
              <a
                href="/"
                className="tet-2xl font-bold text-pink-600 no-underline lg:text-4xl"
              >
                <svg
                  className="inline h-8 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512.005 512.005"
                >
                  <rect
                    fill="#2a2a31"
                    x="16.539"
                    y="425.626"
                    width="479.767"
                    height="50.502"
                    transform="matrix(1,0,0,1,0,0)"
                  />
                  <path
                    className="plane-take-off"
                    d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                  />
                </svg>
                LANDING
              </a>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Links</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 mr-2 inline-block md:mr-0 md:block">
                  <a
                    href="/"
                    className="text-white no-underline hover:text-pink-500 hover:underline"
                  >
                    FAQ
                  </a>
                </li>
                <li className="mt-2 mr-2 inline-block md:mr-0 md:block">
                  <a
                    href="/"
                    className="text-white no-underline hover:text-pink-500 hover:underline"
                  >
                    Help
                  </a>
                </li>
                <li className="mt-2 mr-2 inline-block md:mr-0 md:block">
                  <a
                    href="/"
                    className="text-white no-underline hover:text-pink-500 hover:underline"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Legal</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 mr-2 inline-block md:mr-0 md:block">
                  <a
                    href="/"
                    className="text-white no-underline hover:text-pink-500 hover:underline"
                  >
                    Terms
                  </a>
                </li>
                <li classname="mt-2 mr-2 inline-block md:mr-0 md:block">
                  <a
                    href="/"
                    className="text-white no-underline hover:text-pink-500 hover:underline"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Social</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 mr-2 inline-block md:mr-0 md:block">
                  <a
                    href="/"
                    className="text-white no-underline hover:text-pink-500 hover:underline"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mt-2 mr-2 inline-block md:mr-0 md:block">
                  <a
                    href="/"
                    className="text-white no-underline hover:text-pink-500 hover:underline"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="mt-2 mr-2 inline-block md:mr-0 md:block">
                  <a
                    href="/"
                    className="text-white no-underline hover:text-pink-500 hover:underline"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Company</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 mr-2 inline-block md:mr-0 md:block">
                  <a
                    href="/"
                    className="text-white no-underline hover:text-pink-500 hover:underline"
                  >
                    Official Blog
                  </a>
                </li>
                <li className="mt-2 mr-2 inline-block md:mr-0 md:block">
                  <a
                    href="/"
                    className="text-white no-underline hover:text-pink-500 hover:underline"
                  >
                    About Us
                  </a>
                </li>
                <li className="mt-2 mr-2 inline-block md:mr-0 md:block">
                  <a
                    href="/"
                    className="text-white no-underline hover:text-pink-500 hover:underline"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
