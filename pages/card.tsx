import { useState } from 'react';
import { useRouter } from 'next/router';

const preventDefault = (f) => (e) => {
	e.preventDefault();
	f(e);
};

const API_URL = 'https://extreme-ip-lookup.com/json/';

async function fetcher(url) {
	const res = await fetch(url);
	const json = await res.json();
	return json;
}

export async function getServerSideProps({ query }) {
	const res = await fetch(
		`https://script.google.com/macros/s/AKfycbwAzJ5b-vfELhl3fNHm7eePooOiwFZ_2KzCUfoAwffcczVY6_76_ZUQ6w/exec?fullname=${query.q}&lang=${query.l}`
	);
	const data = await res.json();
	return {
		props: {
			slogan: data.slogan,
		},
	};
}

export default ({ slogan }) => {
	const router = useRouter();
	const { q, l } = router.query;
	const resp = slogan;
	// "அன்பு என்பது செலுத்தும் போது உணரலாம். ஆனால் அமைதி என்பது முகத்திலேயே தெரியவரும். அத்தகைய அமைதியான முகப்பொலிவு கொண்டவர் நீங்கள்.";

	return (
		<div className="md:flex w-full ">
			<div className="max-w-2xl mx-auto bg-red-100 flex flex-col items-center justify-center px-4">
				<div className=" h-screen  py-6 w-full">
					<div className="my-3 bg-white shadow rounded-lg">
						<div className="px-4 py-5 sm:p-6">
							<div className="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="h-5 w-5 text-green-600"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
									></path>
								</svg>
								<h3 className=" px-2 text-lg leading-6 font-semibold text-gray-900">
									Your Special Card is here
								</h3>
							</div>
						</div>
					</div>
					<div className="my-3  shadow rounded-lg ">
						<div className="containerCard" style={{ width: '100%' }}>
							<img src="assets/card-bg1.jpg" className="rounded-sm" />

							<div className="centeredCard sm:p-1" style={{ width: '100%' }}>
								<div className="text-red-900 font-extrabold font-serif">
									Dear {q},
								</div>
								<p className="pt-1 text-red-900 text-sm">{resp}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-2 max-w-xl text-xs font-medium leading-5 text-gray-500 overflow-hidden">
					<p>@Copyrights 2020. Brahma Kumaris - Youth Wing</p>
				</div>
				<div className="mt-1 text-sm leading-5 text-center">
					<a
						href="https://tamil.brahmakumaris.com"
						target="_blank"
						className="text-center font-medium text-red-600 hover:text-red-500 transition ease-in-out duration-150"
					>
						https://tamil.brahmakumaris.com
					</a>
				</div>
			</div>
		</div>
	);
};
