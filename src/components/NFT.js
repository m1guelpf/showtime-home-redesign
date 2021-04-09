import ChatIcon from './Icons/ChatIcon'
import Link from 'next/link'
import { ExternalLinkIcon, HeartIcon, LinkIcon, ShareIcon } from '@heroicons/react/outline'

const NFT = ({
	owner_name,
	token_name,
	token_description,
	like_count,
	comment_count,
	creator_name,
	creator_username,
	owner_username,
	creator_img_url,
	token_img_url,
	owner_img_url,
	token_has_video,
	token_animation_url,
	contract_address,
	token_id,
}) => (
	<div className="mx-auto rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-900 w-full flex flex-col transform hover:-translate-y-1 transition duration-300 ease-in-out">
		<div className="p-4 flex items-center justify-between w-full space-x-1.5">
			<div className="flex-shrink overflow-hidden">
				<div className="flex flex-row items-center">
					<div className="flex -space-x-1 overflow-hidden flex-shrink-0">
						<Link href={`/${creator_username}`}>
							<a>
								<img
									className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-900"
									src={creator_img_url || `https://avatar.tobi.sh/showtime-`}
									alt={creator_name}
									loading="lazy"
								/>
							</a>
						</Link>
						{owner_name && creator_name !== owner_name && (
							<Link href={`/${owner_username}`}>
								<a>
									<img
										className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-900"
										src={owner_img_url || `https://avatar.tobi.sh/showtime-${creator_name}`}
										alt={owner_name}
										loading="lazy"
									/>
								</a>
							</Link>
						)}
					</div>
					<div className="ml-2 flex items-center space-x-1.5 flex-shrink truncate">
						<Link href={`/${creator_username}`}>
							<a className="showtime-card-profile-link whitespace-nowrap truncate dark:text-gray-400">{creator_name}</a>
						</Link>
						{owner_name && creator_name !== owner_name && (
							<>
								<LinkIcon className="w-4 h-4 text-gray-400 dark:text-gray-600" />
								<Link href={`/${owner_username}`}>
									<a className="showtime-card-profile-link whitespace-nowrap truncate dark:text-gray-400">{owner_name}</a>
								</Link>
							</>
						)}
					</div>
				</div>
			</div>
			<a
				href={`https://opensea.io/assets/${contract_address}/${token_id}?ref=0x0c7f6405bf7299a9ebdccfd6841feac6c91e5541`}
				target="_blank"
				className="flex flex-row items-center showtime-card-bid dark:text-gray-600"
			>
				<div className="mr-1">Bid</div>
				<ExternalLinkIcon className="w-4 h-4" />
			</a>
		</div>
		<div className="relative pb-[100%]">
			{token_has_video ? (
				<video className="w-full h-full absolute object-cover" src={token_animation_url} preload="auto" autoPlay loop playsInline muted />
			) : (
				<img className="w-full h-full absolute object-cover" src={token_img_url} alt="Let me be" loading="lazy" />
			)}
		</div>
		<div className="p-4 pb-3 flex-1 flex flex-col justify-between">
			<div>
				<div
					className="showtime-card-title dark:text-gray-300 overflow-hidden truncate cursor-pointer whitespace-nowrap"
					style={{
						fontSize: 20,
					}}
				>
					{token_name}
				</div>
				<div
					className="py-2 text-gray-500 dark:text-gray-400"
					style={{
						fontSize: 14,
						overflowWrap: 'break-word',
						display: 'block',
						minHeight: '3.5rem',
					}}
				>
					<div>
						{token_description?.replace(/(.{100}).*/s, '$1…')}{' '}
						<a
							style={{
								color: 'rgb(17, 17, 17)',
								cursor: 'pointer',
							}}
						>
							{' '}
							more
						</a>
					</div>
				</div>
			</div>
			<div className="flex items-center">
				<div className="mr-3">
					<div className="tooltip">
						<button>
							<div className="flex flex-row items-center rounded-md py-1 hover:text-stpink">
								<div
									className="mr-2 text-gray-700 dark:text-gray-500"
									style={{
										whiteSpace: 'nowrap',
									}}
								>
									{like_count}
								</div>
								<HeartIcon className="h-6 w-6 text-gray-600 dark:text-gray-700" />
							</div>
						</button>
					</div>
				</div>
				<div className="mr-3">
					<div className="tooltip">
						<button>
							<div className="flex flex-row items-center rounded-md py-1 hover:text-stpink">
								<div
									className="mr-2 text-gray-700 dark:text-gray-500"
									style={{
										whiteSpace: 'nowrap',
									}}
								>
									{comment_count}
								</div>
								<ChatIcon className="w-5 h-5 text-gray-600 dark:text-gray-700" />
							</div>
						</button>
					</div>
				</div>
				<div>
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
			</div>
		</div>
	</div>
)

export default NFT
