import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Trending from '@/components/Sections/Trending'
import Spotlight from '@/components/Sections/Spotlight'

const Home = () => (
	<Layout className="flex flex-col min-h-screen">
		<Hero />
		<Spotlight />
		<Trending />
	</Layout>
)

export default Home
