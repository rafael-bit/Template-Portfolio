import Head from "next/head";
import Image from "next/image";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
  return (
    <main className="backdrop-blur flex-none transition-colors duration-500 lg:z-50 bg-white supports-backdrop-blur:bg-white/95 dark:bg-gray-800/75 h-100">
      <Head>
        <title>Portfolio</title>
      </Head>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative overflow-hidden sm:h-80 lg:h-full">
              <Image className="rounded-lg" src={'/images.jpg'} width={1000} height={1000} alt="Your Image"/>
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Hello. I'm Suzan</h2>

              <p className="mt-4 text-gray-600 dark:text-gray-200">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                quidem quam repellat.
              </p>
              <a
                href="#"
                className="mt-4 inline-block px-1 transition focus:outline-none hover:text-gray-800 dark:hover:text-gray-300"
              >
                <GitHubIcon className="w-7 h-7" />
              </a>
              <a
                href="#"
                className="mt-4 inline-block px-1 transition focus:outline-none hover:text-gray-800 dark:hover:text-gray-300"
              >
                <LinkedInIcon className="w-7 h-7" />
              </a>
              <a
                href="#"
                className="mt-4 inline-block px-1 transition focus:outline-none hover:text-gray-800 dark:hover:text-gray-300"
              >
                <TwitterIcon className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="text-center mx-auto max-w-lg lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl font-bold sm:text-4xl">My skills</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid sint distinctio
                iure ipsum cupiditate? Quis, odit assumenda? Deleniti quasi inventore, libero reiciendis
                minima aliquid tempora. Obcaecati, autem.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
              >
                <span className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800  p-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>
                <h2 className="mt-2 font-bold">HTML5</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 dark:text-gray-200">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
              >
                <span className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800  p-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <h2 className="mt-2 font-bold">CSS3</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 dark:text-gray-200">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
              >
                <span className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800  p-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <h2 className="mt-2 font-bold">Accountant</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 dark:text-gray-200">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
              >
                <span className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800  p-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <h2 className="mt-2 font-bold">Accountant</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 dark:text-gray-200">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
              >
                <span className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800  p-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <h2 className="mt-2 font-bold">Accountant</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 dark:text-gray-200">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
              >
                <span className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800  p-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <h2 className="mt-2 font-bold">Accountant</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 dark:text-gray-200">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
