import { useState } from 'react';
import { useRouter } from 'next/router';

const preventDefault = (f) => (e) => {
	e.preventDefault();
	f(e);
};

export default function Home({ action = '/ycard' }) {
	const router = useRouter();
	const [query, setQuery] = useState('');
	const [lang, setLang] = useState('eng');
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
		<div className="md:flex w-full h-screen ">
			<div className="bg-hero h-screen -mt-20 max-w-2xl mx-auto bg-indigo-100 flex flex-col items-center justify-center px-4">
				<h1 className="font-black  text-center ">
					<div className="flex items-center text-center  justify-center logoimg">
						<img src="/assets/logo_white.png" />
					</div>

					<div className="pt-3 text-2xl  text-indigo-700">
						Youth for Global Peace
					</div>
				</h1>

				<h2 className="text-indigo-500 text-sm font-semibold">
					(An Intiative to Empower Global Youth)
				</h2>

				<h2 className="text-indigo-600 text-centered text-xl align-center text-sm font-semibold mt-10">
					Month of Peace - January 2021
				</h2>

				<h2 className="text-indigo-700 text-centered text-sm  align-center text-sm font-semibold mt-3">
					Get your Peace Card for this Month
				</h2>
				<div className=" w-full mt-6 flex rounded-md shadow-sm">
					<div className="relative flex-grow focus-within:z-10">
						<form onSubmit={handleSubmit}>
							<div className="mt-1 text-center text-indigo-900">
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
											defaultChecked
											id="option-1"
										/>
										<label
											className="py-2 rounded-l  segmented-control__label text-sm font-semibold"
											htmlFor="option-1"
										>
											English
										</label>
									</li>
									<li className="segmented-control__item">
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
										placeholder="Your Name"
										value={query}
										onChange={handleParam(setQuery)}
										className="text-gray-700 py-3 form-input block w-full rounded-none rounded-l-md pl-5 transition ease-in-out duration-150 font-semibold sm:text-sm sm:leading-5"
									/>
								</div>
								<button
									onClick={handleSubmit}
									className="h-11 bg-indigo-700 text-white hover:bg-indigo-600 font-bold  pl-2 rounded-r-md shadow hover:shadow-md outline-none focus:outline-none mr-1 pr-2 text-sm"
									type="button"
									style={{ transition: 'all .15s ease' }}
								>
									<i className="fas fa-heart"></i> Get Card →
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className="mt-2 max-w-xl text-xs font-medium leading-5 text-gray-500 overflow-hidden">
					<div className="text-xs">
						@Copyrights 2020.
						<a href="https://www.brahmakumaris.com">Brahma Kumaris</a>-
						<a href="https://bkyouth.org">Youth Wing</a>
					</div>
				</div>
			</div>
		</div>
	);
}
