export default function Footer() {
	return (
		<footer class="flex justify-center bg-white rounded-lg m-4 dark:bg-gray-800">
				<div class="w-full max-w-screen-xl p-4 sm:flex sm:items-center sm:justify-between">
					<ul class="flex items-center justify-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
						<li>
							<a href="/" class="hover:underline ml-3 me-4 md:me-6 text-gray-700 sm:text-center dark:text-gray-200">
								Home
							</a>
						</li>
						<li>
							<a href="/Portfolio" class="hover:underline me-4 md:me-6 text-gray-700 sm:text-center dark:text-gray-200">
								Portfolio
							</a>
						</li>
						<li>
							<a href="/About" class="hover:underline me-4 md:me-6 text-gray-700 sm:text-center dark:text-gray-200">
								About
							</a>
						</li>
						<li>
							<a href="/Blog" class="hover:underline text-gray-700 sm:text-center dark:text-gray-200">
								Blog
							</a>
						</li>
					</ul>
					<span class="mt-3 flex justify-center text-sm text-gray-700 sm:text-center dark:text-gray-200">&copy; 2023 Portfolio. All Rights Reserved.</span>
				</div>
		</footer>
	)
}