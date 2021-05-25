
<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { data, refiner, food } from './_nmsdata.js';

	// see https://kit.svelte.dev/docs#loading
	export const load: Load = async () => {
		return {
			props: { data, refiner, food }
		};
	};
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
	{#each data as item}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				tpostshe user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel="prefetch" href="data/{item.id}">{item.name}</a></li>
	{/each}
</ul>
