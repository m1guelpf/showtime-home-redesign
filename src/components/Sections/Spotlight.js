import spotlightData from '@/data/spotlight.json'
import NFT from '../NFT'
import { InformationCircleIcon } from '@heroicons/react/solid'

const Spotlight = () => {
	return (
		<div className="pt-6 px-10">
			<Hero />
			<div className="mx-auto pt-6 pb-12">
				<div className="infinite-scroll-component__outerdiv">
					<div className="infinite-scroll-component">
						<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 xl:grid-cols-4">
							{spotlightData.map(nft => (
								<NFT {...nft} />
							))}
						</div>
					</div>
				</div>
			</div>
			<ShowMoreButton title="Explore User Spotlights" />
		</div>
	)
}

const Hero = () => (
	<div>
		<div className="flex flex-row">
			<h3 className="self-end text-2xl md:text-4xl flex items-center space-x-2">
				<p className="dark:text-gray-400">User Spotlights</p>
				<InformationCircleIcon className="w-5 h-5 cursor-pointer text-gray-300 dark:text-gray-500 dark:hover:text-gray-600 mt-1 transition" />
			</h3>
			<div className="flex-grow " />
			<div className="self-end">
				<div className="ml-4 bg-white dark:bg-black text-black dark:text-gray-300 border-black dark:border-gray-800 rounded-full px-5 py-1 cursor-pointer border-2 hover:text-showtime dark:hover:text-showtime hover:border-showtime dark:hover:border-showtime transition-all">
					<span className="text-sm md:text-base">🎲&nbsp;Random</span>
				</div>
			</div>
		</div>
	</div>
)

export const ShowMoreButton = ({ title }) => (
	<div className="text-center pb-10 pt-4">
		<a className="showtime-purple-button-icon flex flex-row items-center px-4 py-2 rounded-full" href="https://tryshowtime.com/c/spotlights">
			<div className="mr-2">{title}</div>
			<div className="flex">
				<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ height: 18 }}>
					<path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
				</svg>
			</div>
		</a>
	</div>
)

export default Spotlight
