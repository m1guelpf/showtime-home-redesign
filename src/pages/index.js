import axios from 'axios'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Trending from '@/components/Sections/Trending'
import Spotlight from '@/components/Sections/Spotlight'

const Home = ({ trendingData, spotlightData }) => (
	<Layout className="flex flex-col min-h-screen">
		<Hero />
		<Spotlight spotlightData={spotlightData} />
		<Trending trendingData={trendingData} />
	</Layout>
)

export async function getStaticProps() {
	const [spotlightData, trendingData] = await Promise.all([
		axios.get('https://showtimenft.wl.r.appspot.com/api/v1/spotlight').then(({ data: res }) => res.data),
		axios.get('https://showtimenft.wl.r.appspot.com/api/v2/featured?limit=150&days=1').then(({ data: res }) => res.data),
	])

	return {
		props: {
			trendingData,
			spotlightData,
		},
		revalidate: 1,
	}
}

export default Home
