import React from 'react'

export interface IBlogPost {
    title: string,
    excerpt: string,
    image: {
        path: string
        title: string
        alt: string
    }
    featured?: boolean,
    published_at: Date
    tags?: Array<
        {
            title: string,
            path: string
        }
    >
}

export default function BlogPost({ title, excerpt, image, featured, published_at, tags }: IBlogPost) {
    return (
        <article className={(featured) ? 'featured' : ''}>
            <img src={image.path} alt={image.alt} title={image.title} />
            <h3>{title}</h3>
            <time>{published_at.toDateString()}</time>
            <p>{excerpt}</p>
            {tags && tags.map(tag => <a className="tag" href={tag.path}>{tag.title}</a>)}
        </article>
    )
}