import React from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import Typed from 'react-typed';

const sleep = (milliseconds) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const fetcher = (url: string) =>
	fetch(url).then(async (res) => {
		await sleep(7000);
		return res.json();
	});

const YCard = (ctx) => {
	const router = useRouter();
	const query = router.query;
	const url = `https://script.google.com/macros/s/AKfycbwAzJ5b-vfELhl3fNHm7eePooOiwFZ_2KzCUfoAwffcczVY6_76_ZUQ6w/exec?fullname=${query.q}&lang=${query.l}`;

	const { data, error } = useSWR(url, fetcher);

	//  if (error) return <h1>Something went wrong!</h1>
	//  if (!data) return <h1>Loading...</h1>

	return (
		<div className="bg-hero md:flex w-full ">
			<div className="max-w-2xl mx-auto bg-hero flex flex-col items-center justify-center px-4">
				<div className=" h-screen  py-3 w-full">
					<div className="my-3 bg-white shadow rounded-lg">
						<div className="px-2 py-3 sm:p-3">
							<div className=" items-center content-center">
								<h3 className="px-2 font-semibold text-sm text-center  text-indigo-700">
									Your Special Card is here
									<p className="text-center">
										<span style={{ color: '#b81995' }}>
											Month of Peace (Jan 2021)
										</span>
									</p>
								</h3>
							</div>
						</div>
					</div>
					<div className="my-3  shadow rounded-lg ">
						<div className="containerCard" style={{ width: '100%' }}>
							<img src="/assets/card-bg.png" className="rounded-sm" />

							<div className="centeredCard sm:p-1" style={{ width: '100%' }}>
								<div
									style={{ color: '#025ca1' }}
									className="text-centered   text-lg font-extrabold font-serif"
								>
									<div className="flex items flex-col transition duration-500 ease-in-out  transform text-centered">
										<p className="m-2">
											{!data && 'Your card is getting generated..'}
										</p>
										<p className="flex items  items-center justify-center text-centered align-center">
											{!data && (
												<img
													className="rounded-full"
													style={{ height: '100px' }}
													src="https://media0.giphy.com/media/YR2gvdcNw2fgzgTN7W/giphy.gif"
												/>
											)}{' '}
										</p>
										<p className="m-2">
											{!data &&
												'Till then spread the peace & love in and aroud you.'}{' '}
										</p>
									</div>

									{data && (
										<p className="transition duration-2500 ease-in-out">
											{' '}
											{data && data.disp_name}{' '}
										</p>
									)}
								</div>
								<p
									className="pt-1 font-semibold  text-xl"
									style={{ color: '#b81995' }}
								>
									{data && (
										<Typed
											strings={[data.slogan]}
											showCursor={false}
											typeSpeed={75}
										/>
									)}
								</p>
							</div>
							<div>
								<div className="footer-social-icons">
									<div className="footer-social-icons float-left">
										<ul className="social-media-list">
											<li>
												<a
													href="https://www.facebook.com/bkYouthwing"
													target="_blank"
												>
													<img
														src="https://unpkg.com/simple-icons@latest/icons/facebook.svg"
														alt="Facebook"
														title="Facebook"
													/>
												</a>
											</li>
											<li>
												<a
													href="https://twitter.com/bkyouthwing"
													target="_blank"
												>
													<img
														src="https://unpkg.com/simple-icons@latest/icons/twitter.svg"
														alt="Twitter"
														title="Twitter"
													/>
												</a>
											</li>
											<li>
												<a
													href="https://www.instagram.com/bkyouthwing"
													target="_blank"
												>
													<img
														src="https://unpkg.com/simple-icons@latest/icons/instagram.svg"
														alt="Instagram"
														title="Instagram"
													/>
												</a>
											</li>

											<li>
												<a
													href="https://youtube.com/c/YouthWingBrahmaKumaris"
													target="_blank"
												>
													<img
														src="https://unpkg.com/simple-icons@latest/icons/youtube.svg"
														alt="YouTube"
														title="YouTube"
													/>
												</a>
											</li>
										</ul>
									</div>
									<div className="text-xs float-right mt-2">
										@Copyrights 2020.
										<a target="_blank" href="https://www.brahmakumaris.com">
											Brahma Kumaris
										</a>
										-
										<a target="_blank" href="https://bkyouth.org">
											Youth Wing
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default YCard;
