import React from 'react';
import './App.scss';
import BlogPost from './components/blogPost';

function App() {
  return (
    <BlogPost
      title="Post title"
      excerpt="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, dicta iure at incidunt debitis voluptates sit alias voluptatem inventore, numquam sint nisi aperiam aut voluptate similique, ullam quas placeat magni!"
      image={{
        path: "//picsum.photos/700/600",
        title: "Image title",
        alt: "Image alt text"
      }}
      published_at={new Date(2020, 22,2)}
    />
  );
}
export default App;

