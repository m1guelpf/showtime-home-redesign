import trendingData from '@/data/featured.json'
import NFT from '../NFT'
import { ShowMoreButton } from './Spotlight'

const Trending = () => (
	<div className="pt-6 px-10">
		<Hero />
		<div className="infinite-scroll-component__outerdiv pb-12">
			<div className="infinite-scroll-component">
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 xl:grid-cols-4">
					{trendingData.map(nft => (
						<NFT {...nft} />
					))}
				</div>
			</div>
		</div>
		<ShowMoreButton title="Explore Collections" />
	</div>
)

const Hero = () => (
	<div className="mx-auto mb-8">
		<div className="w-full">
			<h3 className="text-2xl md:text-4xl">Trending</h3>
			<div className="flex border-b dark:border-gray-800 space-x-4">
				<div className="py-3 whitespace-nowrap cursor-pointer border-b-2 border-showtime text-showtime transition text-sm md:text-base">24 Hours</div>
				<div className="py-3 whitespace-nowrap cursor-pointer text-gray-600 transition text-sm md:text-base">7 Days</div>
				<div className="py-3 whitespace-nowrap cursor-pointer text-gray-600 transition text-sm md:text-base">30 Days</div>
			</div>
		</div>
	</div>
)

export default Trending
