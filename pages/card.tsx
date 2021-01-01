import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Typed from 'react-typed';
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

	// const myElement = document.querySelector('#sloganText')
	// init(myElement, {loop:       false,disableBackTyping:true, showCursor: false, strings: [resp] })

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
							<img src="assets/card-bg.png" className="rounded-sm" />

							<div className="centeredCard sm:p-1" style={{ width: '100%' }}>
								<div
									style={{ color: '#025ca1' }}
									className="text-centered   text-lg font-extrabold font-serif"
								>
									Dear {q},
								</div>
								<p className="pt-1   text-lg" style={{ color: '#b81995' }}>
									<Typed strings={[resp]} showCursor={false} typeSpeed={75} />
								</p>
							</div>
							<div>
								<div className="footer-social-icons">
									<div className="footer-social-icons float-left">
										<ul className="social-media-list">
											<li>
												<a>
													<img
														src="https://unpkg.com/simple-icons@latest/icons/facebook.svg"
														alt="Facebook"
														title="Facebook"
													/>
												</a>
											</li>
											<li>
												<a>
													<img
														src="https://unpkg.com/simple-icons@latest/icons/twitter.svg"
														alt="Twitter"
														title="Twitter"
													/>
												</a>
											</li>
											<li>
												<a>
													<img
														src="https://unpkg.com/simple-icons@latest/icons/instagram.svg"
														alt="Instagram"
														title="Instagram"
													/>
												</a>
											</li>

											<li>
												<a>
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
