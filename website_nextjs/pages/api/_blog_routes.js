const blogRoutes = {
  "project":"yellow uncle",
  "blog":{
    "title":"Yellow Uncle blogs",
    "categories":[
      {
        "slug": "journey",
        "folder":"journey",
        title:"Journey",
        "articles":[
          {
            "title": "Photoatm Journey",
            "slug": "photoatm-journey",
            "filename":"photoatm"
          },
          {
            "title": "Offline Notes",
            "slug": "offline-notes-journey",
            "filename":"offline_notes"
          }
        ]
      },
      {
        "slug": "products",
        "folder":"products",
        title:"Products",
        "articles":[{
            "title": "Books",
            "slug": "books",
            "filename":"books"
        }]
      }
    ]
  }
};
export default  blogRoutes;