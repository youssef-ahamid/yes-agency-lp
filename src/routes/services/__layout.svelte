<!-- s -->
<script>
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

<slot />
<Contact {...contactData} />
<Footer {...footerData} />
