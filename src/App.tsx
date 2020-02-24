import React, { useState } from 'react';
import './App.scss';
import BlogPost from './components/blogPost';


const posts = [
  {
    title: "Post title",
    excerpt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, dicta iure at incidunt debitis voluptates sit alias voluptatem inventore, numquam sint nisi aperiam aut voluptate similique, ullam quas placeat magni!",
    image: {
      path: "//picsum.photos/700/600",
      title: "Image title",
      alt: "Image alt text"
    },
    published_at: new Date(2020, 22, 2),
    tags: [
      {
        title: "Tag 1",
        path: "/tag1"
      },
      {
        title: "Tag 2",
        path: "/tag2"
      }
    ]
  },
  {
    title: "Post title 2",
    excerpt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, dicta iure at incidunt debitis voluptates sit alias voluptatem inventore, numquam sint nisi aperiam aut voluptate similique, ullam quas placeat magni!",
    image: {
      path: "//picsum.photos/700/602",
      title: "Image title",
      alt: "Image alt text"
    },
    published_at: new Date(2020, 22, 2),
    tags: [
      {
        title: "Tag 1",
        path: "/tag1"
      },
      {
        title: "Tag 3",
        path: "/tag3"
      }
    ]
  },
  {
    title: "Featured post title",
    excerpt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, dicta iure at incidunt debitis voluptates sit alias voluptatem inventore, numquam sint nisi aperiam aut voluptate similique, ullam quas placeat magni!",
    image: {
      path: "//picsum.photos/700/603",
      title: "Image title",
      alt: "Image alt text"
    },
    published_at: new Date(2020, 22, 2),
    featured: true,
    tags: [
      {
        title: "Tag 1",
        path: "/tag1"
      },
      {
        title: "Tag 2",
        path: "/tag2"
      },
      {
        title: "Tag 3",
        path: "/tag3"
      }
    ]
  },
  {
    title: "Post title 3",
    excerpt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, dicta iure at incidunt debitis voluptates sit alias voluptatem inventore, numquam sint nisi aperiam aut voluptate similique, ullam quas placeat magni!",
    image: {
      path: "//picsum.photos/700/604",
      title: "Image title",
      alt: "Image alt text"
    },
    published_at: new Date(2020, 22, 2),
    tags: [
      {
        title: "Tag 1",
        path: "/tag1"
      },
      {
        title: "Tag 2",
        path: "/tag2"
      }
    ]
  },
  {
    title: "Feature post title 2",
    excerpt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, dicta iure at incidunt debitis voluptates sit alias voluptatem inventore, numquam sint nisi aperiam aut voluptate similique, ullam quas placeat magni!",
    image: {
      path: "//picsum.photos/700/605",
      title: "Image title",
      alt: "Image alt text"
    },
    published_at: new Date(2020, 22, 2),
    featured: true,
    tags: [
      {
        title: "Tag 1",
        path: "/tag1"
      },
      {
        title: "Tag 3",
        path: "/tag3"
      }
    ]
  },
  {
    title: "Featured post title 3",
    excerpt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, dicta iure at incidunt debitis voluptates sit alias voluptatem inventore, numquam sint nisi aperiam aut voluptate similique, ullam quas placeat magni!",
    image: {
      path: "//picsum.photos/700/606",
      title: "Image title",
      alt: "Image alt text"
    },
    published_at: new Date(2020, 22, 2),
    featured: true,
    tags: [
      {
        title: "Tag 1",
        path: "/tag1"
      },
      {
        title: "Tag 2",
        path: "/tag2"
      },
      {
        title: "Tag 3",
        path: "/tag3"
      }
    ]
  }
];

function App() {
  const [featuredOnly, setFeaturedOnly] = useState(false);
  return (
    <>
      <label htmlFor="featured_filter">
        <input
          id="featured_filter"
          type="checkbox"
          onChange={() =>
            setFeaturedOnly(!featuredOnly)
          } />
          Featured only
      </label>
      <div className="flex-container">
        {posts
          .filter(post => featuredOnly ? post.featured : true)
          .map(({ title, excerpt, image, featured, published_at, tags }) =>
            <BlogPost
              title={title}
              excerpt={excerpt}
              image={image}
              published_at={published_at}
              featured={featured}
              tags={tags}
            />
          )}
      </div>
    </>
  )
}
export default App;