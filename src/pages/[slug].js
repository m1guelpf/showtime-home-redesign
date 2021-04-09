import axios from 'axios'
import { useRouter } from 'next/router'
import { formatAddress } from '@/utils/address'
import ChatIcon from '@/components/Icons/ChatIcon'
import Layout from '@/components/Layout'
import { PlusSmIcon } from '@heroicons/react/solid'
import { HeartIcon, RefreshIcon, ShareIcon } from '@heroicons/react/outline'
import NFT from '@/components/NFT'

const Profile = ({ user }) => {
	const router = useRouter()

	if (router.isFallback) {
		return (
			<Layout>
				<div className="flex items-center justify-center min-h-screen">
					<RefreshIcon class="w-12 h-12 animate-spin text-gray-500 dark:text-gray-700" />
				</div>
			</Layout>
		)
	}

	return (
		<Layout className="flex flex-col min-h-screen">
			<main className="px-4 sm:px-16 mt-12">
				<div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
					<div>
						<div className="flex sm:items-center mb-2">
							<p className="mr-2 text-base text-gray-500 dark:text-gray-400">@{user.profile.username}</p>
							<div className="flex items-center mr-2 md:mr-0 space-x-1">
								{user.profile.wallet_addresses_excluding_email.map(address => (
									<a
										key={address}
										href="#"
										className="py-1 px-3 bg-purple-100 dark:bg-purple-900 rounded-full hover:bg-purple-200 dark:hover:bg-opacity-80 transition text-sm text-purple-500 dark:text-purple-400 whitespace-nowrap"
									>
										{formatAddress(address)}
									</a>
								))}
							</div>
						</div>
						<div className="flex items-center space-x-2 sm:mb-4">
							<img src={user.profile.img_url} className="w-14 h-14 flex items-center justify-center rounded-full" />
							<h1 className="text-4xl md:text-6xl break-words dark:text-gray-200">{user.profile.name}</h1>
						</div>
						<div className="flex-1 mt-4 pb-2 text-base">
							<p className="max-w-xl dark:text-gray-400">{user.profile.bio}</p>
							<a href={user.profile.website_url} target="_blank" className="break-all" style={{ color: 'rgb(81, 125, 228)' }}>
								{user.profile.website_url}
							</a>
						</div>
					</div>
					<div className="px-6 py-4 rounded-lg sm:w-max bg-white dark:bg-gray-900 flex items-center justify-center sm:items-stretch shadow space-x-6">
						<div className="flex items-center space-x-4">
							<div className="flex flex-col justify-center my-2 md:my-0 items-center md:items-start cursor-pointer hover:opacity-60 transition">
								<div className="text-sm text-gray-500 dark:text-gray-600">Following</div>
								<div className="text-xl dark:text-gray-400">{user.following.length}</div>
							</div>
							<div className="flex flex-col justify-center my-2 md:my-0 items-center md:items-start cursor-pointer hover:opacity-60 transition">
								<div className="text-sm text-gray-500 dark:text-gray-600">Followers</div>
								<div className="text-xl dark:text-gray-400">{user.followers.length}</div>
							</div>
						</div>
						<div className="flex">
							<div className="flex items-center justify-center my-2 md:my-0 relative">
								<div class="bg-black dark:bg-gray-800 text-white border-black dark:border-gray-800 rounded-full pl-4 pr-6 py-2 cursor-pointer border-2 hover:opacity-70 dark:hover:opacity-80 transition flex items-center space-x-2">
									<PlusSmIcon class="w-5 h-5" />
									<span class="text-base">Follow</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="m-auto">
					<div className="sm:hidden">
						<NFT {...user.featured_nft} />
					</div>
					<div className="hidden bg-white dark:bg-gray-900 shadow rounded-lg sm:flex items-center overflow-hidden space-x-4 border border-transparent dark:border-gray-800 min-h-[400px] max-h-[600px]">
						<div className="w-1/2">
							{user.featured_nft.token_has_video ? (
								<video className="h-full" src={user.featured_nft.token_animation_url} preload="auto" autoPlay loop playsInline muted />
							) : (
								<img className="h-full w-full" src={user.featured_nft.token_img_url} loading="lazy" />
							)}
						</div>
						<div className={`w-1/2 min-h-[400px] max-h-[600px] ${user.featured_nft.token_has_video ? 'h-screen' : 'h-full'} py-4 pr-6 flex flex-col justify-between`}>
							<div>
								<div className="mb-3 break-words cursor-pointer truncate text-4xl dark:text-gray-300">{user.featured_nft.token_name}</div>
								<div className="pb-2 md:pb-4 text-gray-500 dark:text-gray-500 break-words whitespace-pre-wrap">{user.featured_nft.token_description}</div>
							</div>
							<div>
								<div className="flex flex-row w-full ">
									<div className="flex-col flex-1">
										<div className="flex-shrink pr-2" style={{ fontWeight: 400, fontSize: 14, color: 'rgb(136, 136, 136)' }}>
											Created {user.featured_nft.creator_username === user.featured_nft.owner_username && '& owned'} by
										</div>
										<div className="flex-shrink">
											<a className="flex flex-row items-center pt-1" href={`/${user.featured_nft.creator_username}`}>
												<img alt={user.featured_nft.creator_name} src={user.featured_nft.creator_img_url} className="rounded-full" style={{ height: 30, width: 30 }} />
												<div className="showtime-card-profile-link ml-2 md:text-lg dark:text-gray-400">{user.featured_nft.creator_name}</div>
											</a>
										</div>
									</div>
									{user.featured_nft.creator_username !== user.featured_nft.owner_username && (
										<div className="flex-1">
											<div className="flex-shrink pr-2" style={{ fontWeight: 400, fontSize: 14, color: 'rgb(136, 136, 136)' }}>
												Owned by
											</div>
											<div className="md:text-lg">
												<a className="flex flex-row items-center pt-1" href={`/${user.featured_nft.owner_username}`}>
													<img alt={user.featured_nft.owner_name} src={user.featured_nft.owner_img_url} className="rounded-full" style={{ height: 30, width: 30 }} />
													<div className="showtime-card-profile-link ml-2 md:text-lg dark:text-gray-400">{user.featured_nft.owner_name}</div>
												</a>
											</div>
										</div>
									)}
								</div>
								<div className="mt-4 flex items-center justify-between">
									<div className="flex items-center space-x-3">
										<button>
											<div className="flex flex-row items-center rounded-md py-1 hover:text-stpink">
												<div className="mr-2 text-gray-700 dark:text-gray-500">{user.featured_nft.like_count}</div>
												<HeartIcon className="h-6 w-6 text-gray-600 dark:text-gray-700" />
											</div>
										</button>
										<button>
											<div className="flex flex-row items-center rounded-md py-1 hover:text-stpink">
												<div className="mr-2 text-gray-700 dark:text-gray-500">{user.featured_nft.comment_count}</div>
												<ChatIcon className="w-5 h-5 text-gray-600 dark:text-gray-700" />
											</div>
										</button>
										<button
											className="inline-flex py-1 rounded-md text-gray-600 dark:text-gray-700"
											style={{
												paddingLeft: 2,
												paddingRight: 2,
											}}
										>
											<ShareIcon className="h-5 w-5" />
										</button>
									</div>
									<a
										href={`https://opensea.io/assets/${user.featured_nft.contract_address}/${user.featured_nft.token_id}?ref=0x0c7f6405bf7299a9ebdccfd6841feac6c91e5541`}
										target="_blank"
										class="flex flex-row items-center showtime-card-bid dark:text-gray-600"
									>
										<div class="mr-1">Bid</div>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
											></path>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="mx-auto mb-4">
						<div className="pt-4 flex items-center justify-between border-b dark:border-gray-800">
							<div className="flex space-x-4">
								<div className="py-3 whitespace-nowrap cursor-pointer text-gray-600 transition text-sm md:text-base">Created</div>
								<div className="py-3 whitespace-nowrap cursor-pointer border-b-2 border-showtime text-showtime transition text-sm md:text-base">Owned</div>
								<div className="py-3 whitespace-nowrap cursor-pointer text-gray-600 transition text-sm md:text-base">Liked</div>
							</div>
							<div className="text-right pr-4 text-xs font-base text-gray-400 pb-1">Show hidden</div>
						</div>
					</div>
					<div className="infinite-scroll-component__outerdiv">
						<div className="infinite-scroll-component">
							<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 xl:grid-cols-4">
								{user.owned
									.filter(nft => !user.owned_hidden.includes(nft.nft_id))
									.map(nft => (
										<NFT key={nft.nft_id} {...nft} />
									))}
							</div>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	)
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: true,
	}
}

export async function getStaticProps({ params: { slug } }) {
	try {
		const [profileData, nftData] = await Promise.all([
			axios.get(`https://showtimenft.wl.r.appspot.com/api/v2/profile_server/${slug}?limit=150`).then(({ data: res }) => res.data),
			axios.get(`https://showtimenft.wl.r.appspot.com/api/v2/profile_client/${slug}?limit=150`).then(({ data: res }) => res.data),
		])

		return {
			props: {
				user: { ...profileData, ...nftData },
			},
			revalidate: 1,
		}
	} catch (e) {
		if (e.response.status === 404) return { notFound: true }

		throw e
	}
}

export default Profile
