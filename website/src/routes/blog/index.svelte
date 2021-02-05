<script context="module">
	import blogRoutes from './_blog_routes.js';
	export function preload() {
		const categories = blogRoutes.root.blog.categories;
		// return this.fetch(`blog.json`).then(r => r.json()).then(categories => {
		// 	console.log(categories);
			
		// 	return { categories };
		// });

		return {categories};
	}
</script>

<script>
	export let categories;
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

<h1>Recent categories</h1>

<ul>
	{#each categories as category}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel="prefetch" href="blog/{category.slug}">{category.title}</a></li>
	{/each}
</ul>
