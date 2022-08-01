

import Link from 'next/link'

export default function Post({ post }: any) {
  return (
    <div className='card'>
      <img src={post.frontmatter.cover_image} alt='' />

      <div className='post-date'>{post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/projects/${post.slug}`}>
        <a className='btn'>Les mer</a>
      </Link>
    </div>
  )
}