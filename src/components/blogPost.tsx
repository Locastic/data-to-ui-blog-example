import React from 'react'

interface Props {
    title: string,
    excerpt: string,
    image: {
        path: string
        title: string
        alt: string
    }
    featured?: boolean,
    published_at: Date
    tags?: [
        {
            title: string,
            path: string
        }
    ]
}

export default function BlogPost({ title, excerpt, image, featured, published_at, tags }: Props) {
    return (
        <article>
            <img src={image.path} alt={image.alt} title={title} />
            <h3>{title}</h3>
            <time>{published_at.toDateString()}</time>
            <p>{excerpt}</p>
        </article>
    )
}