// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import blogRoutes from './_blog_routes';

export default (req, res) => {
  // console.log(req.params, req.pid);
  console.log('------------');
  
  
  res.status(200).json(blogRoutes);
}
