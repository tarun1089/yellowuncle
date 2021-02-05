<script context="module">
	import blogRoutes from '../_blog_routes.js';
	const categories = blogRoutes.root.blog.categories;
	export async function preload({ params }) {
		const {category, slug} = params;
		const categorySlug = category;
		let postData;
		categories.forEach((category)=>{
			if(category.slug === categorySlug){
				if(category.articles){
					category.articles.forEach((article)=>{
						if(article.slug === slug){
							postData = article;
						}
					});
				}
			}
		});
		return {post: postData};
	}
</script>

<script>
	import PhotoatmJourney from 'articles/journey/photoatm';
	import Books from 'articles/products/books';
	export let post;
</script>

<style>
	
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<div class="content">
	<h4>Slug:{post.slug}</h4>
	<h5>Filename {post.filename}</h5>
	{#if post.filename === "photoatm"}<PhotoatmJourney/>{/if}
	{#if post.filename === "books"}<Books/>{/if}
</div>
