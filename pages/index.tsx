import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { stringify } from 'querystring';
import { useEffect } from 'react';

const preventDefault = (f) => (e) => {
	e.preventDefault();
	f(e);
};

export default function Home({ action = '/ycard' }) {
	const router = useRouter();
	const [query, setQuery] = useState('');
	const secretVal = router.asPath.indexOf('secret=3213') >= 0;
	const [hasSecret] = useState(secretVal);
	const [lang, setLang] = useState('tam');
	const handleParam = (setValue) => (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = preventDefault(() => {
		// Show Progress
		router.push({
			pathname: action,
			query: {
				q: query,
				l: lang,
			},
		});
	});

	return (
		<div className="md:flex w-full h-screen">
			<Head>
				<title>Special Blessings - Mamma Day - 24 Jun 2021</title>
				<meta property="og:url" content="https://mamma-rday.vercel.app/" />
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Special Blessings - Mamma Day - 24 Jun 2021"
				/>
				<meta name="twitter:card" content="summary" />
				<meta
					property="og:description"
					content="Special Blessings - Mamma Day - 24 Jun 2021"
				/>
				<meta
					property="og:image"
					content="https://mamma-rday.vercel.app/assets/mamma.png"
				/>
			</Head>
			<div className="h-screen  max-w-2xl mx-auto bg-red-100 bg-hero bg-opacity-100  flex flex-col items-center justify-center px-4">
				<h1 className="font-black  text-center">
					<div className="flex items-center text-center  justify-center -mt-12">
						<img src="/assets/bk-logo-1.png" className="w-3/5 " />
					</div>
					<div className="flex items-center text-center  justify-center ">
						<img src="/img/rakshabandhan.png" className="rotateimg  w-3/5" />
					</div>

					<p className="text-black-80  font-semibold text-md ">
						Tamilnadu Zone
					</p>

					<div className="pt-3 text-1xl ">
						<p className="pt-1 text-xl   text-red-800">
							<span className="pt-1 text-xl text-indigo-800">
								{' '}
								Remembering{' '}
							</span>
							<span>Mateshwari Jagadmaba Saraswati</span>
						</p>
						<p className="pt-1 text-md  text-gray-500 bg-opacity-75">
							24th June 2021
						</p>
					</div>
				</h1>
				<h2 className="text-indigo-800 text-center text-xl align-center text-md font-semibold mt-3">
					Gift of Blessings
				</h2>

				{hasSecret === true && (
					<div className=" w-full mt-6 flex rounded-md shadow-sm ">
						<div className="relative flex-grow focus-within:z-10">
							<form onSubmit={handleSubmit}>
								<div className="mt-1 text-center text-indigo-900 ">
									<ul className="segmented-control">
										<li className="segmented-control__item ">
											<input
												className="segmented-control__input"
												type="radio"
												onChange={() => {
													setLang('eng');
												}}
												name="langType"
												value="eng"
												id="option-1"
											/>
											<label
												className="py-2 rounded-l  segmented-control__label text-sm font-semibold"
												htmlFor="option-1"
											>
												English
											</label>
										</li>
										<li className="segmented-control__item hidden">
											<input
												className="segmented-control__input"
												type="radio"
												id="option-2"
												onChange={() => {
													setLang('hin');
												}}
												name="langType"
												value="hin"
											/>
											<label
												className=" py-2 segmented-control__label text-sm font-semibold"
												htmlFor="option-2"
											>
												हिंदी
											</label>
										</li>

										<li className="segmented-control__item">
											<input
												className="segmented-control__input"
												type="radio"
												id="option-3"
												onChange={() => {
													setLang('tam');
												}}
												defaultChecked
												name="langType"
												value="tam"
											/>
											<label
												className="rounded-r py-2 segmented-control__label text-sm font-semibold"
												htmlFor="option-3"
											>
												தமிழ்
											</label>
										</li>
									</ul>
								</div>

								<div className=" w-full mt-1 flex rounded-md shadow-sm">
									<div className="relative flex-grow focus-within:z-10">
										<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
										<input
											placeholder="Your Name | आपका नाम | உங்கள் பெயர் "
											value={query}
											onChange={handleParam(setQuery)}
											className="text-gray-700 py-3 form-input block w-full rounded-none rounded-l-md pl-5 transition ease-in-out duration-150 font-semibold sm:text-sm sm:leading-5"
										/>
									</div>
									<button
										onClick={handleSubmit}
										className="h-11 bg-red-800 text-white hover:bg-red-600 font-bold  pl-2 rounded-r-md shadow hover:shadow-md outline-none focus:outline-none mr-1 pr-2 text-sm"
										type="button"
										style={{ transition: 'all .15s ease' }}
									>
										<i className="fas fa-heart"></i> →
									</button>
								</div>
							</form>
						</div>
					</div>
				)}
				<h2 className="text-black-800 text-center text-sm  align-center  font-semibold mt-3">
					<p className="text-black-400">
						Get a special value blessing unique to you on this Special Day.
					</p>
					<p className="text-black-600">
						மாதேஸ்வரி மம்மாவின் அவ்யக்த தினத்தில், உங்களுக்கான தனித்துவம்
						வாய்ந்த சிறப்பு வரதானத்தை பெற்று கொள்ளவும்.
					</p>
				</h2>

				<div className="mt-2 max-w-xl text-xs font-medium leading-5 text-gray-500 overflow-hidden">
					<div className="text-xs">
						@Copyrights 2021.
						<a href="https://www.brahmakumaris.com">Brahma Kumaris </a> -
						<a href="https://tamil.brahmakumaris.com"> Tamilnadu Zone</a>
					</div>
				</div>
				<div className="text-xs text-gray-500"></div>
				<div className="text-xs text-gray-500">
					<br />
				</div>
			</div>
		</div>
	);
}
