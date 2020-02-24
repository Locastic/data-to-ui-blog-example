import React from 'react'
import BlogPost, {IBlogPost}  from './blogPost';

interface IBlogPostListProps {
    posts: IBlogPost[],
    featuredOnly?: boolean
}

export default function blogPostList({posts, featuredOnly}: IBlogPostListProps) {
    return (
        <section className="flex-container">
            {posts
                .filter(post => featuredOnly ? post.featured : true)
                .map((post:IBlogPost) => <BlogPost {...post} />)
            }
        </section>
    )
}