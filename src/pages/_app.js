import NProgress from 'nprogress'
import 'tailwindcss/tailwind.css'
import '@/styles/custom.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
	const router = useRouter()

	NProgress.configure({ showSpinner: false })

	useEffect(() => {
		router.events.on('routeChangeStart', () => NProgress.start())
		router.events.on('routeChangeComplete', () => NProgress.done())
		router.events.on('routeChangeError', () => NProgress.done())

		return () => {
			router.events.off('routeChangeStart', () => NProgress.start())
			router.events.off('routeChangeComplete', () => NProgress.done())
			router.events.off('routeChangeError', () => NProgress.done())
		}
	})

	return <Component {...pageProps} />
}

export default MyApp
