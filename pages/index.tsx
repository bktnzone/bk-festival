import { useState } from 'react';
import { useRouter } from 'next/router';

const preventDefault = (f) => (e) => {
	e.preventDefault();
	f(e);
};

export default function Home({ action = '/card' }) {
	const router = useRouter();
	const [query, setQuery] = useState('');
	const [lang, setLang] = useState('tam');
	const handleParam = (setValue) => (e) => setValue(e.target.value);

	const handleSubmit = preventDefault(() => {
		router.push({
			pathname: action,
			query: {
				q: query,
				l: lang,
			},
		});
	});

	return (
		<div className="md:flex w-full  h-screen ">
			<div className=" h-screen max-w-2xl mx-auto bg-red-100 flex flex-col items-center justify-center px-4">
				<h1 className="font-black  text-center  bg-red-100">
					<div className="flex items-center text-center  justify-center logoimg">
						<img src="/assets/logo_white.png" />
					</div>

					<div className="pt-3 text-2xl  text-red-900">You@meditation.calm</div>
				</h1>

				<h2 className="text-red-900 text-sm font-semibold">
					Special Card for You
				</h2>
				<h2 className="text-red-900 text-sm font-semibold">
					Get your blessing by entering your name
				</h2>

				<div className=" w-full mt-6 flex rounded-md shadow-sm">
					<div className="relative flex-grow focus-within:z-10">
						<form onSubmit={handleSubmit}>
							<div className="mt-4 text-center text-red-900">
								<span className="text-red-900 sm:text-sm">Language</span>
								<div className="mt-2">
									<label className="inline-flex items-center">
										<input
											onChange={handleParam(setLang)}
											type="radio"
											className="form-radio"
											name="langType"
											value="tam"
											checked
										/>
										<span className="ml-2 sm:text-sm">Tamil</span>
									</label>
									<label className="inline-flex items-center ml-6">
										<input
											onChange={handleParam(setLang)}
											type="radio"
											className="form-radio"
											name="langType"
											value="eng"
										/>
										<span className="ml-2 sm:text-sm">English</span>
									</label>
								</div>
							</div>

							<div className=" w-full mt-6 flex rounded-md shadow-sm">
								<div className="relative flex-grow focus-within:z-10">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
									<input
										placeholder="Your Name"
										value={query}
										onChange={handleParam(setQuery)}
										className="text-gray-700 py-3 form-input block w-full rounded-none rounded-l-md pl-5 transition ease-in-out duration-150 font-semibold sm:text-sm sm:leading-5"
									/>
								</div>
								<button className="group -ml-px relative inline-flex items-center px-3 py-3 border border-red-300 text-sm leading-5 font-medium rounded-r-md text-white bg-red-700 hover:text-blue-700  focus:outline-none focus:shadow-outline-blue focus:border-red-300 active:bg-gray-100 active:text-red-700 transition ease-in-out duration-150">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										className="text-white h-5 w-5 group-hover:text-red-700"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.568 18.005l-1.414-1.415 4.574-4.59-4.574-4.579 1.414-1.416 5.988 5.995-5.988 6.005z"
										></path>
									</svg>
									<span className="ml-2 text-sm font-semibold"></span>
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className="mt-2 max-w-xl text-xs font-medium leading-5 text-gray-500 overflow-hidden">
					<p>@Copyrights 2020. Brahma Kumaris - Youth Wing</p>
				</div>
				<div className="mt-1 text-sm leading-5 text-center">
					<a
						href="https://tamil.brahmakumaris.com"
						target="_blank"
						className="text-center font-medium text-red-900 hover:text-red-500 transition ease-in-out duration-150"
					>
						https://tamil.brahmakumaris.com
					</a>
				</div>
			</div>
		</div>
	);
}
