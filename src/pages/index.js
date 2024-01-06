import Image from "next/image";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
  return (
    <main className="backdrop-blur flex-none transition-colors duration-500 lg:z-50 bg-white supports-backdrop-blur:bg-white/95 dark:bg-gray-800/75 h-100">
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
                className="mt-4 inline-block px-1 transition focus:outline-none"
              >
                <GitHubIcon className="w-7 h-7" />
              </a>
              <a
                href="#"
                className="mt-4 inline-block px-1 transition focus:outline-none"
              >
                <LinkedInIcon className="w-7 h-7" />
              </a>
              <a
                href="#"
                className="mt-4 inline-block px-1 transition focus:outline-none"
              >
                <TwitterIcon className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
