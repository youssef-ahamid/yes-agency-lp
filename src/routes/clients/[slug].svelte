<script>
	import Checkbox from '$lib/components/base/Checkbox.svelte';
	import RangeSlider from '$lib/components/base/RangeSlider.svelte';
	import Budget from '$lib/components/ui/Onboarding/Budget.svelte';
	import PersonalInfo from '$lib/components/ui/Onboarding/PersonalInfo.svelte';
	import ServiceSelect from '$lib/components/ui/Onboarding/ServiceSelect.svelte';
	import Stepper from '$lib/components/ui/Stepper.svelte';
	import Success from '$lib/components/ui/Onboarding/Success.svelte';
	let steps = [
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
	];
	let success = {
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
	};
	let checked = false;
	let value;
	$: console.log(value);
</script>

<Stepper open={checked} {steps} {success} />
<div class="flex h-40 w-full items-center justify-center">
	<Checkbox bind:checked color="orange" label="UI/UX" />
</div>

<RangeSlider min="10000" max="600000" bind:value beyond />

<div
	class="bg-blue-dark text-tertiary brightness-[10] checked:accent-orange checked:ring-orange focus:ring-orange peer-checked:text-orange"
/>
