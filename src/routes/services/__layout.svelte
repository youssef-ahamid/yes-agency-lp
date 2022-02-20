<!-- s
<script>
	import { Modal } from '$lib/components/base/Modal.svelte';
	import Modal from './../../../package/components/base/Modal.svelte';
	import Modal from './../../lib/components/base/Modal.svelte';
	import Contact from '$lib/sections/Contact.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import PersonalInfo from '$lib/components/ui/Onboarding/PersonalInfo.svelte';
	import ServiceSelect from '$lib/components/ui/Onboarding/ServiceSelect.svelte';
	import Success from '$lib/components/ui/Onboarding/Success.svelte';
	import Budget from '$lib/components/ui/Onboarding/Budget.svelte';

	let contactData = {
		action: { text: 'start', tertiary: true, round: true },
		title: 'Ready to connect on a project?',
		text: 'more text to convince reader this is a god decision',
		onboarding: {
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
		}
	};
	let footerData = {
		tel: '+201200525233',
		email: 'youssef@tutoruu.com',
		address: 'more text to convince,\nreader this is a god decision'
	};
</script>

<div class="pt-24 md:pt-0">
	<slot />
</div>
<Contact {...contactData} />
<Footer {...footerData} /> -->
<script>
	import Modal from '$lib/components/base/Modal.svelte';
	import Button from '$lib/components/base/Button.svelte';
	import { onMount } from 'svelte';
	let active = false;

	onMount(() => {
		setTimeout(() => {
			active = true;
		}, 500);
	});
</script>

<Modal bind:active>
	<div class="flex h-full w-full items-center justify-center">
		<div class="text-center">
			<svg
				version="1.1"
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 218.207 218.207"
				style="enable-background:new 0 0 218.207 218.207;"
				xml:space="preserve"
				class="my-8 mx-auto h-auto w-28 fill-current text-primary md:w-44"
			>
				<g>
					<g>
						<g>
							<path
								d="M214.31,27.276H3.897C1.745,27.276,0,29.019,0,31.172v155.862c0,2.154,1.745,3.897,3.897,3.897H214.31
				c2.152,0,3.897-1.743,3.897-3.897V31.172C218.207,29.019,216.462,27.276,214.31,27.276z M210.414,183.138H7.793V35.069h202.621
				V183.138z"
							/>
							<path
								d="M54.521,105.207h35.13c12.875,0,23.349-10.487,23.349-23.379c0-12.892-10.474-23.379-23.349-23.379h-35.13
				c-12.875,0-23.349,10.487-23.349,23.379C31.172,94.72,41.646,105.207,54.521,105.207z M54.521,66.241h35.13
				c8.577,0,15.556,6.99,15.556,15.586c0,8.596-6.979,15.586-15.556,15.586h-35.13c-8.577,0-15.556-6.99-15.556-15.586
				C38.965,73.231,45.944,66.241,54.521,66.241z"
							/>
							<rect x="128.586" y="58.448" width="58.599" height="7.793" />
							<rect x="128.586" y="74.034" width="38.966" height="7.793" />
							<rect x="128.586" y="113" width="27.276" height="7.793" />
							<rect x="128.586" y="128.586" width="50.832" height="7.793" />
							<rect x="128.586" y="144.172" width="50.832" height="7.793" />
							<path
								d="M85.724,93.517c6.446,0,11.69-5.244,11.69-11.69c0-6.446-5.244-11.69-11.69-11.69s-11.69,5.244-11.69,11.69
				C74.034,88.274,79.278,93.517,85.724,93.517z M85.724,77.931c2.148,0,3.897,1.746,3.897,3.897s-1.748,3.897-3.897,3.897
				s-3.897-1.746-3.897-3.897S83.576,77.931,85.724,77.931z"
							/>
							<path
								d="M54.521,159.759h35.13c12.875,0,23.349-10.487,23.349-23.379c0-12.893-10.474-23.38-23.349-23.38h-35.13
				c-12.875,0-23.349,10.487-23.349,23.379C31.172,149.271,41.646,159.759,54.521,159.759z M54.521,120.793h35.13
				c8.577,0,15.556,6.99,15.556,15.586c0,8.596-6.979,15.586-15.556,15.586h-35.13c-8.577,0-15.556-6.99-15.556-15.586
				C38.966,127.783,45.944,120.793,54.521,120.793z"
							/>
							<path
								d="M58.448,148.069c6.446,0,11.69-5.244,11.69-11.69c0-6.446-5.244-11.69-11.69-11.69s-11.69,5.244-11.69,11.69
				C46.759,142.825,52.002,148.069,58.448,148.069z M58.448,132.483c2.148,0,3.897,1.746,3.897,3.897
				c0,2.15-1.748,3.897-3.897,3.897c-2.148,0-3.897-1.746-3.897-3.897C54.552,134.229,56.3,132.483,58.448,132.483z"
							/>
						</g>
					</g>
				</g>
			</svg>
			<h4 class="w-full capitalize">oops!</h4>
			<h6 class="max-w-3xl py-4 font-thin">
				This page is currently under construction. We're launching V2 of this website next week!
			</h6>
			<div
				class="mt-6 flex w-full justify-end"
				on:click={() => {
					active = false;
				}}
			>
				<Button underlined primary to="/">go back home</Button>
			</div>
		</div>
	</div>
</Modal>
