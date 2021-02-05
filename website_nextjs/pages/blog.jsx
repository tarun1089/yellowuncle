import axios from 'axios';
import blogRoutes from './blog/_blog_routes';
import Link from 'next/link'

export async function getStaticProps(context) {
  // const res = await axios.get(`http://localhost:3000/api/blogs`);
  // const blogRoutes = res.data;
  const categories = blogRoutes.blog.categories;
  return {
    props: {
      categories:  categories
    }
  };
}

export default function BlogHome({categories}) {
  // console.log(categories);
  return (
   <div className="container mx-auto">
     <h1>Blog Home</h1>
     <ul>
     {categories.map((category,index)=>{
       return (
        <li key={index}>
          <Link href={"/blog/"+category.slug}>
            <a>{category.slug}</a>
          </Link>
        </li>
       );
     })}
     </ul>
   </div>
  )
}

