export default function Footer() {
	return (
		<footer className="flex justify-center bg-white rounded-lg m-4 dark:bg-gray-800 backdrop-blur flex-none transition-colors duration-500 lg:z-50 bg-white supports-backdrop-blur:bg-white/95 dark:bg-gray-800/75">
				<div className="w-full max-w-screen-xl p-4 sm:flex sm:items-center sm:justify-between">
					<ul className="flex items-center justify-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
						<li>
							<a href="/" className="hover:underline ml-3 me-4 md:me-6 text-gray-700 sm:text-center dark:text-gray-200">
								Home
							</a>
						</li>
						<li>
							<a href="/Portfolio" className="hover:underline me-4 md:me-6 text-gray-700 sm:text-center dark:text-gray-200">
								Portfolio
							</a>
						</li>
						<li>
							<a href="/About" className="hover:underline me-4 md:me-6 text-gray-700 sm:text-center dark:text-gray-200">
								About
							</a>
						</li>
						<li>
							<a href="/Blog" className="hover:underline text-gray-700 sm:text-center dark:text-gray-200">
								Blog
							</a>
						</li>
					</ul>
					<span className="mt-3 flex justify-center text-sm text-gray-700 sm:text-center dark:text-gray-200">&copy; 2023 Portfolio. All Rights Reserved.</span>
				</div>
		</footer>
	)
}