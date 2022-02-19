<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import Button from '$lib/components/base/Button.svelte';
	import Hero from '$lib/sections/heros/Home.svelte';
	import FeaturedServices from '$lib/sections/FeaturedServices.svelte';
	import Contact from '$lib/sections/Contact.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import Projects from '$lib/sections/MainProjects.svelte';
	import PersonalInfo from '$lib/components/ui/Onboarding/PersonalInfo.svelte';
	import ServiceSelect from '$lib/components/ui/Onboarding/ServiceSelect.svelte';
	import Success from '$lib/components/ui/Onboarding/Success.svelte';
	import Budget from '$lib/components/ui/Onboarding/Budget.svelte';
	import { loaded } from '$lib/store/META';
	import Modal from '$lib/components/base/Modal.svelte';

	let projects = [
		{
			tags: [
				{ text: 'branding', color: 'purple' },
				{ text: 'ui/ux', color: 'orange' },
				{ color: 'green', text: 'dev' },
				{ color: 'green', text: 'dev' }
			],
			max_tags: 2,
			slug: 'armageddon',
			client: {
				logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Aramex_logo.svg',
				slug: 'aramex',
				name: 'unknown'
			},
			title: 'Hamoo',
			about:
				'this is the about section content. we can fill this with some background about the project, things we accomplished, or zebby el manga',
			data: [
				{
					title: 'prop',
					content: 'data'
				},
				{
					title: 'prop2',
					content: 'data2'
				},
				{
					title: 'prop3',
					content: 'hello world this is me and my world',
					long: true
				}
			],
			images: [
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCiB1709wStX0SE_dWhcLLIOYK0qcPNYUeJtewS9AHKJ12quLgGno9SZUEsHO5wi4m6k&usqp=CAU'
			],
			dates: "july '22"
		},
		{
			tags: [{ text: 'ui/ux', color: 'orange' }],
			max_tags: 2,
			slug: 'armageddon',
			client: {
				logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Aramex_logo.svg',
				slug: 'aramex',
				name: 'unknown'
			},
			title: 'no branding here',
			about:
				'this is the about section content. we can fill this with some background about the project, things we accomplished, or zebby el manga',
			data: [
				{
					title: 'prop',
					content: 'data'
				},
				{
					title: 'prop2',
					content: 'data2'
				},
				{
					title: 'prop3',
					content: 'hello world this is me and my world',
					long: true
				}
			],
			images: [
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCiB1709wStX0SE_dWhcLLIOYK0qcPNYUeJtewS9AHKJ12quLgGno9SZUEsHO5wi4m6k&usqp=CAU'
			],
			dates: 'may 16 - july 12'
		},
		{
			tags: [{ text: 'dev', color: 'green' }],
			max_tags: 2,
			slug: 'armageddon',
			client: {
				logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Aramex_logo.svg',
				slug: 'aramex',
				name: 'unknown'
			},
			title: 'only dev',
			about:
				'this is the about section content. we can fill this with some background about the project, things we accomplished, or zebby el manga',
			data: [
				{
					title: 'prop',
					content: 'data'
				},
				{
					title: 'prop2',
					content: 'data2'
				},
				{
					title: 'prop3',
					content: 'hello world this is me and my world',
					long: true
				}
			],
			images: [
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCiB1709wStX0SE_dWhcLLIOYK0qcPNYUeJtewS9AHKJ12quLgGno9SZUEsHO5wi4m6k&usqp=CAU'
			],
			dates: 'may 16 - july 12'
		}
	];
	const tags = [
		{ color: 'orange', text: 'ui/ux' },
		{ color: 'purple', text: 'branding' },
		{ color: 'green', text: 'dev' },
		{ color: 'blue', text: 'social media' }
	];
	const services = [
		{
			title: 'UI/UX',
			text: 'Hello my son this is the text hello my son this is the text hello my son this is the text hello my son this is the text hello my son this is the text hello my son this is the text hello my son this is the text',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCiB1709wStX0SE_dWhcLLIOYK0qcPNYUeJtewS9AHKJ12quLgGno9SZUEsHO5wi4m6k&usqp=CAU',
			action: {
				orange: true,
				text: 'lorem button',
				to: '/services/ui-ux',
				underlined: true
			}
		},
		{
			title: 'branding',
			text: 'hello my son this is the text hello my son this is the text hello my son this is the text',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCiB1709wStX0SE_dWhcLLIOYK0qcPNYUeJtewS9AHKJ12quLgGno9SZUEsHO5wi4m6k&usqp=CAU',
			action: {
				purple: true,
				text: 'get branded!',
				to: '/services/branding',
				underlined: true
			}
		}
	];
	let onboarding = {
		steps: [
			{
				num: 1,
				component: PersonalInfo,
				props: {
					title: 'All I need, is your love tonight.',
					subtitle:
						'here is some subheading terxt to explain why we’re asking for this. what is why? why is whatever brings value to the customer',
					questions: [
						{
							value: '',
							placeholder: 'Company name'
						},
						{
							value: '',
							placeholder: 'Company name'
						}
					]
				}
			},
			{
				num: 2,
				component: ServiceSelect,
				props: {
					title: 'What services',
					subtitle: 'here is some subheading terxt to explain why we’re asking for this.',
					options: [
						{
							label: 'UI/UX',
							color: 'orange',
							checked: true
						},
						{
							label: 'Branding',
							color: 'purple',
							checked: false
						},
						{
							label: 'Social Media',
							color: 'blue',
							checked: false
						},
						{
							label: 'Dev',
							color: 'green',
							checked: false
						}
					]
				}
			},
			{
				num: 3,
				component: Budget,
				props: {
					title: 'Budgeting',
					subtitle: 'here is some subheading terxt to explain why we’re asking for this.',
					max: 600000,
					min: 10000,
					step: 10000
				}
			}
		],
		success: {
			component: Success,
			props: {
				title: 'Request Sent!',
				subtitle: ' heje ehe eejd jd djd djd dushs syx ud us sys syd ddud djdj',
				actions: [
					{
						underlined: true,
						tertiary: true,
						to: '/projects',
						text: 'browse projects'
					},
					{
						underlined: true,
						to: '/',
						text: 'home'
					}
				]
			}
		}
	};
	let modal = false;
	onMount(() => {
		setTimeout(() => {
			!$loaded ? loaded.set(true) : '';
		}, 5000);
	});
</script>

{#if $loaded}
	<div
		in:fly={{ x: -30, duration: 600, delay: 600 }}
		on:fireModal={() => {
			modal = true;
		}}
	>
		<Hero
			speed="2"
			words={[
				{ text: 'Marketing Style', color: 'blue' },
				{ text: 'Tech Savviness', color: 'green' },
				{ text: 'Branding Finesse', color: 'purple' },
				{ text: 'Design', color: 'orange' }
			]}
			title="Make your"
			titleAfter="Irresistible."
			subtitle="We do everything and anything digital. From website development to design to marketing, we do it all and we do it fast.
			Get your brand to keep up with the most recent trends, create a brand that lasts
			and do it with style."
			actions={[
				{ round: true, text: 'button 1', to: '/services/branding' },
				{ underlined: true, text: 'button 2', to: '/projects' }
			]}
		/>
		<FeaturedServices {services} />
		<Projects {projects} title="Our Work" />
		<Contact
			{onboarding}
			title="Bored of scrolling? Talk to a human."
			text="We have the most flexible chat team. We can talk via Email, Whatsapp, Zoom, Phone Call, whatever is most convenient for you, we'll do!"
		/>
		<Footer
			tel="+2012000525233"
			email="youssef@tutoruu.com"
			address={`231 Z, Hadabat Al Ahram\nGiza, Egypt`}
			copyright="Forever and Ever"
		/>
	</div>
{:else}
	<svg
		out:fade={{ duration: 200 }}
		width="154"
		height="58"
		viewBox="0 0 154 58"
		class="fill-primary fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 md:w-full md:max-w-xl"
		xmlns="http://www.w3.org/2000/svg"
	>
		<mask
			id="path-1-outside-1_252_27"
			maskUnits="userSpaceOnUse"
			x="0.503906"
			y="0.40802"
			width="153"
			height="58"
			fill="black"
		>
			<rect class="text-primary fill-current" x="0.503906" y="0.40802" width="153" height="58" />
			<path
				d="M13.0879 50.216C14.0479 50.216 14.8879 50.048 15.6079 49.712C16.3279 49.376 16.9759 48.848 17.5519 48.128C18.1279 47.408 18.7039 46.472 19.2799 45.32L24.5359 33.944L25.6879 32.072L34.9039 9.82402H29.3599V3.27202H46.2079V9.82402H42.9679L29.5759 40.928C28.2319 44.048 26.8159 46.712 25.3279 48.92C23.8879 51.128 22.1839 52.808 20.2159 53.96C18.2479 55.16 15.7999 55.76 12.8719 55.76L13.0879 50.216ZM22.8799 48.056L6.39191 9.82402H3.22391V3.27202H25.9759V9.82402H20.2879L28.8559 32L22.8799 48.056ZM8.98391 43.52C10.5679 43.52 11.8879 43.88 12.9439 44.6C13.9999 45.32 14.5279 46.376 14.5279 47.768C14.5279 49.208 13.9999 50.216 12.9439 50.792C11.9359 51.416 10.7359 51.752 9.34391 51.8L8.91191 48.92C9.39191 49.352 9.99191 49.664 10.7119 49.856C11.4319 50.096 12.2239 50.216 13.0879 50.216L12.8719 55.76C9.79991 55.76 7.30391 55.064 5.38391 53.672C3.46391 52.328 2.50391 50.624 2.50391 48.56C2.55191 46.976 3.17591 45.728 4.37591 44.816C5.62391 43.952 7.15991 43.52 8.98391 43.52Z"
			/>
			<path
				d="M67.8349 41.864C63.9949 41.864 60.5629 41.096 57.5389 39.56C54.5629 38.024 52.2349 35.792 50.5549 32.864C48.8749 29.888 48.0349 26.312 48.0349 22.136C48.0349 17.96 48.8749 14.408 50.5549 11.48C52.2349 8.55202 54.5389 6.32002 57.4669 4.78402C60.3949 3.20002 63.7549 2.40802 67.5469 2.40802L67.9069 8.81602C66.4669 8.81602 65.2189 9.22402 64.1629 10.04C63.1549 10.808 62.3629 12.08 61.7869 13.856C61.2589 15.632 60.9949 18.032 60.9949 21.056C60.9949 24.608 61.8349 27.416 63.5149 29.48C65.2429 31.496 67.6429 32.504 70.7149 32.504C72.3949 32.504 73.8109 32.216 74.9629 31.64C76.1629 31.016 77.0989 30.2 77.7709 29.192C78.4909 28.184 78.9949 27.056 79.2829 25.808H86.3389C86.2429 27.92 85.7869 29.936 84.9709 31.856C84.1549 33.728 82.9789 35.432 81.4429 36.968C79.9549 38.504 78.0589 39.704 75.7549 40.568C73.4989 41.432 70.8589 41.864 67.8349 41.864ZM54.1549 22.496V16.448H73.5229L86.4829 19.832V22.496H54.1549ZM73.5229 16.448C73.5229 15.008 73.2829 13.712 72.8029 12.56C72.3709 11.408 71.7469 10.496 70.9309 9.82402C70.1149 9.15202 69.1069 8.81602 67.9069 8.81602L67.5469 2.40802C71.6749 2.40802 75.1309 3.15202 77.9149 4.64002C80.6989 6.12802 82.8109 8.19202 84.2509 10.832C85.7389 13.424 86.4829 16.424 86.4829 19.832L73.5229 16.448Z"
			/>
			<path
				d="M114.381 41.576C111.597 41.576 109.101 41.12 106.893 40.208C104.685 39.248 102.909 37.784 101.565 35.816C100.221 33.848 99.4527 31.304 99.2607 28.184H101.061C102.165 30.056 103.341 31.496 104.589 32.504C105.885 33.464 107.157 34.136 108.405 34.52C109.701 34.904 110.829 35.096 111.789 35.096C113.229 35.096 114.357 34.808 115.173 34.232C115.989 33.608 116.397 32.768 116.397 31.712C116.397 30.992 116.181 30.392 115.749 29.912C115.365 29.384 114.789 28.952 114.021 28.616C113.253 28.28 112.269 28.016 111.069 27.824L106.821 27.104C103.797 26.528 101.229 25.712 99.1167 24.656C97.0047 23.6 95.3967 22.208 94.2927 20.48C93.1887 18.704 92.6367 16.544 92.6367 14C92.6367 10.16 93.8607 7.32802 96.3087 5.50402C98.7567 3.63202 101.829 2.69602 105.525 2.69602C108.117 2.69602 110.445 3.12802 112.509 3.99202C114.621 4.80802 116.349 6.15202 117.693 8.02402C119.037 9.89602 119.805 12.368 119.997 15.44H118.269C117.309 13.712 116.205 12.392 114.957 11.48C113.709 10.568 112.485 9.96802 111.285 9.68002C110.085 9.34402 109.053 9.17602 108.189 9.17602C106.941 9.17602 105.909 9.44002 105.093 9.96802C104.325 10.448 103.941 11.216 103.941 12.272C103.941 12.944 104.133 13.52 104.517 14C104.901 14.48 105.477 14.888 106.245 15.224C107.013 15.512 107.997 15.776 109.197 16.016L113.445 16.736C116.421 17.264 118.989 18.032 121.149 19.04C123.309 20.048 124.965 21.392 126.117 23.072C127.269 24.704 127.845 26.84 127.845 29.48C127.845 33.464 126.621 36.488 124.173 38.552C121.725 40.568 118.461 41.576 114.381 41.576ZM93.7167 41V28.184H99.2607L101.133 31.784V41H93.7167ZM119.997 15.44L118.125 11.84V3.27202H125.613V15.44H119.997Z"
			/>
			<path
				d="M142.768 41.72C140.272 41.72 138.232 40.976 136.648 39.488C135.112 37.952 134.344 36.008 134.344 33.656C134.344 31.256 135.112 29.312 136.648 27.824C138.232 26.336 140.272 25.592 142.768 25.592C145.312 25.592 147.352 26.336 148.888 27.824C150.424 29.312 151.192 31.256 151.192 33.656C151.192 36.008 150.424 37.952 148.888 39.488C147.352 40.976 145.312 41.72 142.768 41.72Z"
			/>
		</mask>
		<path
			style="stroke-dasharray: 1000; stroke-dashoffset: 1000"
			class="animate-draw text-primary fill-current stroke-primary"
			d="M13.0879 50.216C14.0479 50.216 14.8879 50.048 15.6079 49.712C16.3279 49.376 16.9759 48.848 17.5519 48.128C18.1279 47.408 18.7039 46.472 19.2799 45.32L24.5359 33.944L25.6879 32.072L34.9039 9.82402H29.3599V3.27202H46.2079V9.82402H42.9679L29.5759 40.928C28.2319 44.048 26.8159 46.712 25.3279 48.92C23.8879 51.128 22.1839 52.808 20.2159 53.96C18.2479 55.16 15.7999 55.76 12.8719 55.76L13.0879 50.216ZM22.8799 48.056L6.39191 9.82402H3.22391V3.27202H25.9759V9.82402H20.2879L28.8559 32L22.8799 48.056ZM8.98391 43.52C10.5679 43.52 11.8879 43.88 12.9439 44.6C13.9999 45.32 14.5279 46.376 14.5279 47.768C14.5279 49.208 13.9999 50.216 12.9439 50.792C11.9359 51.416 10.7359 51.752 9.34391 51.8L8.91191 48.92C9.39191 49.352 9.99191 49.664 10.7119 49.856C11.4319 50.096 12.2239 50.216 13.0879 50.216L12.8719 55.76C9.79991 55.76 7.30391 55.064 5.38391 53.672C3.46391 52.328 2.50391 50.624 2.50391 48.56C2.55191 46.976 3.17591 45.728 4.37591 44.816C5.62391 43.952 7.15991 43.52 8.98391 43.52Z"
			mask="url(#path-1-outside-1_252_27)"
			stroke-width="4"
		/>
		<path
			style="stroke-dasharray: 1000; stroke-dashoffset: 1000"
			class="animate-draw text-primary fill-current stroke-primary animation-delay-1000"
			d="M67.8349 41.864C63.9949 41.864 60.5629 41.096 57.5389 39.56C54.5629 38.024 52.2349 35.792 50.5549 32.864C48.8749 29.888 48.0349 26.312 48.0349 22.136C48.0349 17.96 48.8749 14.408 50.5549 11.48C52.2349 8.55202 54.5389 6.32002 57.4669 4.78402C60.3949 3.20002 63.7549 2.40802 67.5469 2.40802L67.9069 8.81602C66.4669 8.81602 65.2189 9.22402 64.1629 10.04C63.1549 10.808 62.3629 12.08 61.7869 13.856C61.2589 15.632 60.9949 18.032 60.9949 21.056C60.9949 24.608 61.8349 27.416 63.5149 29.48C65.2429 31.496 67.6429 32.504 70.7149 32.504C72.3949 32.504 73.8109 32.216 74.9629 31.64C76.1629 31.016 77.0989 30.2 77.7709 29.192C78.4909 28.184 78.9949 27.056 79.2829 25.808H86.3389C86.2429 27.92 85.7869 29.936 84.9709 31.856C84.1549 33.728 82.9789 35.432 81.4429 36.968C79.9549 38.504 78.0589 39.704 75.7549 40.568C73.4989 41.432 70.8589 41.864 67.8349 41.864ZM54.1549 22.496V16.448H73.5229L86.4829 19.832V22.496H54.1549ZM73.5229 16.448C73.5229 15.008 73.2829 13.712 72.8029 12.56C72.3709 11.408 71.7469 10.496 70.9309 9.82402C70.1149 9.15202 69.1069 8.81602 67.9069 8.81602L67.5469 2.40802C71.6749 2.40802 75.1309 3.15202 77.9149 4.64002C80.6989 6.12802 82.8109 8.19202 84.2509 10.832C85.7389 13.424 86.4829 16.424 86.4829 19.832L73.5229 16.448Z"
			mask="url(#path-1-outside-1_252_27)"
			stroke-width="4"
		/>
		<path
			style="stroke-dasharray: 1000; stroke-dashoffset: 1000"
			class="animate-draw text-primary fill-current stroke-primary animation-delay-2000"
			d="M114.381 41.576C111.597 41.576 109.101 41.12 106.893 40.208C104.685 39.248 102.909 37.784 101.565 35.816C100.221 33.848 99.4527 31.304 99.2607 28.184H101.061C102.165 30.056 103.341 31.496 104.589 32.504C105.885 33.464 107.157 34.136 108.405 34.52C109.701 34.904 110.829 35.096 111.789 35.096C113.229 35.096 114.357 34.808 115.173 34.232C115.989 33.608 116.397 32.768 116.397 31.712C116.397 30.992 116.181 30.392 115.749 29.912C115.365 29.384 114.789 28.952 114.021 28.616C113.253 28.28 112.269 28.016 111.069 27.824L106.821 27.104C103.797 26.528 101.229 25.712 99.1167 24.656C97.0047 23.6 95.3967 22.208 94.2927 20.48C93.1887 18.704 92.6367 16.544 92.6367 14C92.6367 10.16 93.8607 7.32802 96.3087 5.50402C98.7567 3.63202 101.829 2.69602 105.525 2.69602C108.117 2.69602 110.445 3.12802 112.509 3.99202C114.621 4.80802 116.349 6.15202 117.693 8.02402C119.037 9.89602 119.805 12.368 119.997 15.44H118.269C117.309 13.712 116.205 12.392 114.957 11.48C113.709 10.568 112.485 9.96802 111.285 9.68002C110.085 9.34402 109.053 9.17602 108.189 9.17602C106.941 9.17602 105.909 9.44002 105.093 9.96802C104.325 10.448 103.941 11.216 103.941 12.272C103.941 12.944 104.133 13.52 104.517 14C104.901 14.48 105.477 14.888 106.245 15.224C107.013 15.512 107.997 15.776 109.197 16.016L113.445 16.736C116.421 17.264 118.989 18.032 121.149 19.04C123.309 20.048 124.965 21.392 126.117 23.072C127.269 24.704 127.845 26.84 127.845 29.48C127.845 33.464 126.621 36.488 124.173 38.552C121.725 40.568 118.461 41.576 114.381 41.576ZM93.7167 41V28.184H99.2607L101.133 31.784V41H93.7167ZM119.997 15.44L118.125 11.84V3.27202H125.613V15.44H119.997Z"
			mask="url(#path-1-outside-1_252_27)"
			stroke-width="4"
		/>
		<path
			style="stroke-dasharray: 1000; stroke-dashoffset: 1000"
			class="animate-draw text-primary fill-current stroke-tertiary animation-delay-4000"
			d="M142.768 41.72C140.272 41.72 138.232 40.976 136.648 39.488C135.112 37.952 134.344 36.008 134.344 33.656C134.344 31.256 135.112 29.312 136.648 27.824C138.232 26.336 140.272 25.592 142.768 25.592C145.312 25.592 147.352 26.336 148.888 27.824C150.424 29.312 151.192 31.256 151.192 33.656C151.192 36.008 150.424 37.952 148.888 39.488C147.352 40.976 145.312 41.72 142.768 41.72Z"
			mask="url(#path-1-outside-1_252_27)"
			stroke-width="4"
		/>
	</svg>
{/if}
