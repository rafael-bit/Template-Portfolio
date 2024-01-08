export default function Footer() {
  const links = [
    { href: '/', text: 'Home' },
    { href: '#skills', text: 'Skills' },
    { href: '/Portfolio', text: 'Portfolio' },
    { href: '/Blog', text: 'Blog' },
  ];

  return (
    <>
			<hr className="border-gray-200 dark:border-gray-700" />
      <footer className="flex justify-center bg-white rounded-lg mx-4 my-4 dark:bg-gray-800 backdrop-blur flex-none transition-colors duration-500 lg:z-50 bg-white supports-backdrop-blur:bg-white/95 dark:bg-gray-800/75">
        <div className="w-full max-w-screen-xl sm:flex sm:items-center sm:justify-between">
          <ul className="flex items-center justify-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={`hover:underline ${index !== links.length - 1 ? 'me-4 md:me-6' : ''} text-gray-700 sm:text-center dark:text-gray-200`}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <span className="flex justify-center text-sm text-gray-700 sm:text-center dark:text-gray-200">&copy; 2023 Portfolio. All Rights Reserved.</span>
        </div>
      </footer>
    </>
  );
}