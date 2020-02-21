import React from 'react';
import './App.css';
import BlogPost from './components/blogPost';

function App() {
  return (
    <BlogPost
      title="Post title"
      excerpt="Excerpt"
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