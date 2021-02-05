import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import blogRoutes from './_blog_routes';


export async function getStaticPaths() {
    const categories = blogRoutes.blog.categories;
    // Get the paths we want to pre-render based on posts
    const paths = [];
    categories.forEach((category) => {

      const articles = category.articles;
      paths.push({
        params:{articles: articles, category: category.slug}
      });
    });
  
    console.log(paths);
    return { paths, fallback: false }
  }
  



export async function getStaticProps(context) {
    const category = context.params.category;
    // const res = await axios.get(`http://localhost:3000/api/blogs`);
    // const blogRoutes = res.data;
    const categories = blogRoutes.blog.categories;
    const selectedCategory = categories.filter(item=> item.slug === category)[0];
    const articles = selectedCategory.articles;
    
    return {
      props: {
        category: category,
        articles:  articles
      }
    };
  }

export default function Category({category,articles}) {
  return (
   <div className="container mx-auto">
     <h1>Articles List of the category {category}</h1>
     <ul>
     {articles.map((article,index)=>{
       return (
        <li key={index}>
          <Link href={`/blog/${category}/${article.slug}`}>
            <a>{article.title}</a>
          </Link>
        </li>
       );
     })}
     </ul>
   </div>
  )
}

