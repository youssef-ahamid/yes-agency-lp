<script>
    let Y;
</script>

<svelte:window bind:scrollY={Y}/>

<div class="w-24 h-24 bg-transparent animate-pulse flex justify-center z-0">
	<div class="mt-4">
		<p class="body-sm font-light text-center mb-4 transition duration-300 ease-out" class:text-transparent={Y>40}>scroll</p>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 172 172"
			class="text-primary fill-current animate-bounce w-6 h-auto mx-auto transition duration-300 ease-out"
            class:fill-transparent={Y>40}
			><g
				fill="none"
				fill-rule="nonzero"
				stroke="none"
				stroke-width="1"
				stroke-linecap="butt"
				stroke-linejoin="miter"
				stroke-miterlimit="10"
				stroke-dasharray=""
				stroke-dashoffset="0"
				font-family="none"
				font-weight="none"
				font-size="none"
				text-anchor="none"
				style="mix-blend-mode: normal"
				><path d="M0,172v-172h172v172z" fill="none" /><g class="text-primary fill-current" class:fill-transparent={Y>40}
					><path
						d="M82.08163,170.30688c0.0215,0.0215 0.04838,0.02687 0.06987,0.04837c0.043,0.043 0.08063,0.08063 0.12363,0.12363c0.0215,0.0215 0.02688,0.04837 0.04838,0.06988c0.24725,0.2365 0.55362,0.34938 0.83312,0.52675c0.23112,0.1505 0.42462,0.344 0.67725,0.45687c0.02688,0.01075 0.04838,0.03763 0.07525,0.04837c0.02688,0.01075 0.05375,0.00538 0.08063,0.01613c0.63962,0.258 1.32225,0.40312 2.01025,0.40312c0.688,0 1.37062,-0.14513 2.01563,-0.4085c0.02687,-0.01075 0.05375,-0.00538 0.08062,-0.01612c0.02688,-0.01075 0.04838,-0.03763 0.07525,-0.04838c0.25263,-0.11288 0.44612,-0.30637 0.67725,-0.45687c0.2795,-0.17738 0.58588,-0.29025 0.83313,-0.52675c0.0215,-0.0215 0.02687,-0.04837 0.04837,-0.06988c0.043,-0.043 0.08062,-0.08062 0.12363,-0.12362c0.0215,-0.0215 0.04837,-0.02687 0.06988,-0.04838l53.75,-57.21687c2.03175,-2.16075 1.92425,-5.56312 -0.2365,-7.60025c-2.15537,-2.02638 -5.55775,-1.91887 -7.60025,0.2365l-44.462,47.33225v-147.67812c0,-2.967 -2.408,-5.375 -5.375,-5.375c-2.967,0 -5.375,2.408 -5.375,5.375v147.67813l-44.45662,-47.32687c-2.03175,-2.16612 -5.43412,-2.26825 -7.60025,-0.2365c-2.16612,2.03175 -2.26825,5.43413 -0.2365,7.60025z"
					/></g
				></g
			></svg
		>
	</div>
</div>
