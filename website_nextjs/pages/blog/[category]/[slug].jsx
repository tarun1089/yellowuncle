import axios from 'axios';
import blogRoutes from '../_blog_routes';

export async function getStaticPaths() {
    const categories = blogRoutes.blog.categories;
    // Get the paths we want to pre-render based on posts
    const paths = [];
    categories.forEach((category) => {

      const articles = category.articles;
      articles.forEach((article)=>{
        paths.push({
          params:{slug: article.slug, category: category.slug}
        });
      });
    });
  
    console.log(paths);
    
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  

export async function getStaticProps(context) {
    const {category,slug} = context.params;
    // console.log(category,slug);
    // const res = await axios.get(`http://localhost:3000/api/blogs`);
    // const blogRoutes = res.data;
    const categories = blogRoutes.blog.categories;
    const selectedCategory = categories.filter(item=> item.slug === category)[0];
    const articles = selectedCategory.articles;
    const article = articles.filter(item => item.slug === slug)[0];
    
    
    return {
      props: {
        category: category,
        article:  article
      }
    };
  }

export default function Category({category,article}) {
  return (
   <div className="container mx-auto">
     <h1>Article: {category}</h1>
     <p>{article.title}</p>
     
   </div>
  )
}

