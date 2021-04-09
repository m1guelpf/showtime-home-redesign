import { BellIcon, SearchIcon } from '@heroicons/react/outline'

const Header = () => (
	<div className="mb-20">
		<header className="p-4 shadow-header dark:shadow-header-dark bg-crystal fixed bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80 w-full z-10 sm:px-16">
			<div className="flex flex-row items-center justify-between space-x-6">
				<div>
					<a className="flex flex-row showtime-header-link items-center text-left mr-auto" href="/">
						<div className="text-2xl py-2 dark:text-white" style={{ fontWeight: 400, fontFamily: 'Afronaut' }}>
							SHOWTIME
						</div>
					</a>
				</div>
				<div className="hidden sm:block flex-grow flex-1">
					<div className="relative w-full">
						<SearchIcon className="w-5 h-5 absolute top-2.5 left-3 text-gray-500 dark:text-gray-700" />
						<input
							type="search"
							placeholder="Search by name or wallet address"
							className="rounded-full border-gray-400 dark:border-gray-800 dark:text-gray-400 w-full pl-10 focus:outline-none focus:border-gray-800 dark:focus:border-gray-600 focus:ring-gray-800 dark:focus:ring-gray-600 transition bg-transparent"
						/>
					</div>
				</div>
				<div className="flex items-center">
					<div className="hidden md:flex mr-6 items-center space-x-6" style={{ fontWeight: 400 }}>
						<a className="showtime-header-link dark:text-gray-200 text-sm md:text-base" href="https://tryshowtime.com/c/all">
							Explore
						</a>
						<a className="showtime-header-link dark:text-gray-200 text-sm md:text-base" href="https://tryshowtime.com/leaderboard">
							Leaderboard
						</a>
						<div className="flex-shrink ml-5">
							<button className="relative hover:text-stpink border-gray-900 dark:border-gray-800 hover:border-stpink dark:hover:border-stpink border-2 rounded-full h-9 w-9 flex items-center justify-center cursor-pointer group transition">
								<BellIcon className="w-6 h-6 group-hover:text-stpink dark:text-gray-600 dark:group-hover:text-stpink transition" />
								<div
									style={{
										position: 'absolute',
										height: 10,
										width: 10,
										top: 0,
										left: 0,
										borderRadius: '50%',
										background: 'radial-gradient(circle at 50% 15%, hsla(340, 83%, 69%, 1), hsla(340, 83%, 34%, 1))',
										boxShadow: '0 0 2px 1px hsla(340, 83%, 69%, .5), 0 0 12px 0 hsla(340, 83%, 34%, 1), 0 0 24px 0 hsla(340, 83%, 34%, 1)',
									}}
								/>
							</button>
						</div>
					</div>
					<div>
						<a
							className="showtime-login-button-outline dark:border-gray-800 text-sm px-2 py-1 md:px-3 md:py-2 md:text-base flex flex-row items-center rounded-full group transition"
							href="https://twitter.com/m1guelpf"
						>
							<div>
								<img
									alt="profile pic"
									src="https://miguelpiedrafita.com/images/_site/logo.png"
									className="rounded-full mr-2"
									style={{ height: 24, width: 24, minWidth: 24 }}
									loading="lazy"
								/>
							</div>
							<div
								className="dark:text-gray-600 dark:group-hover:text-showtime transition"
								style={{
									textOverflow: 'ellipsis',
									overflow: 'hidden',
									whiteSpace: 'nowrap',
									maxWidth: 200,
								}}
							>
								Miguel Piedrafita
							</div>
						</a>
					</div>
				</div>
			</div>
		</header>
	</div>
)

export default Header
