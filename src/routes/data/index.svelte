
<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { data, refiner, food, products, base, getById} from './_sortdata.js';
	// see https://kit.svelte.dev/docs#loading
	export const load: Load = async () => {
		return {
			props: { data, refiner, food, products, base, getById }
		};
	};
</script>

<script lang="ts">

</script>


<style>
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		line-height: 1.5;
		display: grid;
    grid-template-columns: 33% 33% 33%;
	gap: 1em
	}
	h5, h6 {
		margin: 0;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>
<ul>
	{#each products as item }
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				tpostshe user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel="prefetch" href="data/{item.id}"><img src="/icons/{item.icon}" width="50"><h4>{item.name} </h4></a>

			{#each item.ingredients as item }

				<h5>{getById(item.id).name}</h5>
				<h6>{item.amount}</h6>

			{/each}

		</li>
	{/each}
</ul>
