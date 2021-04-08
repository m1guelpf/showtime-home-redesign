import useStickyState from '@/hooks/sticky'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import ScrollToTop from './ScrollToTop'
import Head from 'next/head'

const Layout = ({ children }) => {
	const [containerClasses, setContainerClasses] = useState('theme-transition')

	useEffect(() => {
		setTimeout(() => setContainerClasses(''), 300)
	}, [])

	const [isDarkMode, setDarkMode] = useStickyState('darkMode', false)

	const ThemeIcon = isDarkMode ? SunIcon : MoonIcon

	const changeTheme = () => {
		setContainerClasses('theme-transition')
		setDarkMode(state => !state)

		setTimeout(() => setContainerClasses(''), 300)
	}

	return (
		<>
			<Head>
				<title>Showtime | Crypto Art</title>
				<meta name="description" content="Discover and showcase crypto art" />
				<meta property="og:type" content="website" />
				<meta name="og:description" content="Discover and showcase crypto art" />
				<meta property="og:image" content="https://showtime.m1guelpf.me/img/og.jpg" />
				<meta name="og:title" content="Showtime" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Showtime" />
				<meta name="twitter:description" content="Discover and showcase crypto art" />
				<meta name="twitter:image" content="https://showtime.m1guelpf.me/img/og.jpg" />
			</Head>
			<div className={`${containerClasses} ${isDarkMode ? 'dark' : ''}`}>
				<div className="flex flex-col min-h-screen bg-gray-50 dark:bg-black relative">
					<Header />
					<ScrollToTop />
					<main>{children}</main>
					<button onClick={changeTheme} className="fixed bottom-3 right-3 bg-white dark:bg-black border-2 border-gray-800 dark:border-gray-400 p-1 rounded-full">
						<ThemeIcon className="w-6 h-6 text-gray-800 dark:text-gray-400" />
					</button>
					<Footer />
				</div>
			</div>
		</>
	)
}

export default Layout
