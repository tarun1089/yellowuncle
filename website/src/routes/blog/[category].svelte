<script context="module">
	import blogRoutes from './_blog_routes.js';
	const categories = blogRoutes.root.blog.categories;
	export async function preload({ params }) {
		// // the `slug` parameter is available because
		// // this file is called [slug].svelte
		// const res = await this.fetch(`blog/${params.slug}.json`);
		// const data = await res.json();
		// console.log(data);

		// if (res.status === 200) {
		// 	return { post: data };
		// } else {
		// 	this.error(res.status, data.message);
		// }

		const categorySlug = params.category;
		let postData;
		categories.forEach((category)=>{
			if(category.slug === categorySlug){
				postData = category;
			}
		});
		return {post: postData};
	}
</script>

<script>
	export let post;
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<div class="content">
	<h4>Slug:{post.slug}</h4>
	{#each post.articles as article}
		<li><a rel="prefetch" href="blog/{post.slug}/{article.slug}">{article.title}</a></li>
	{/each}
	{@html post.html}
</div>
