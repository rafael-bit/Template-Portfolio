import { useState } from 'react'
import Button from './Button'
import { Dialog, Popover} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const links = [
    { href: '/', text: 'Home' },
    { href: '/About', text: 'About' },
    { href: '/Portfolio', text: 'Portfolio' },
    { href: '/Blog', text: 'Blog' },
  ];

  return (
     <header className="bg-white dark:bg-gray-800 backdrop-blur flex-none transition-colors duration-500 lg:z-50  bg-white/75 dark:bg-gray-800/75 fixed w-full z-50 top-0  ">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Portfolio</span>
            <img className="h-8 w-auto" src={'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'} width={10} height={10} alt="Logo" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-50"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {links.map((link, index) => (
            <a key={index} href={link.href} className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
              {link.text}
            </a>
          ))}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center">
          <Button />
        </div>
      </nav>
       <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Portfolio</span>
              <img className="h-8 w-auto" src={'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'} width={10} height={10} alt="Logo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    {link.text}
                  </a>
                ))}
                <Button />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
			<hr className="border-gray-200 dark:border-gray-700" />
    </header>
  )
}