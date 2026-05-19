import './BlogTeaser.css'

const placeholderPosts = [
  {
    title: 'Why I switched to Arch Linux as a CS student',
    date: '2026-01-01',
    tag: 'systems',
  },
  {
    title: 'My first Codeforces contest — what I learned',
    date: '2026-01-15',
    tag: 'competitive-programming',
  },
]

function BlogTeaser() {
  return (
    <section className="blog-teaser" id='blog'>
      <div className="blog-content">
        <h2 className="section-label">From the Blog</h2>
        <div className="blog-posts">
          {placeholderPosts.map((post) => (
            <div key={post.title} className="blog-post-card">
              <div className="blog-post-meta">
                <span className="blog-post-tag">{post.tag}</span>
                <span className="blog-post-date">{post.date}</span>
              </div>
              <h3 className="blog-post-title">{post.title}</h3>
            </div>
          ))}
        </div>
        {/* TODO: wire to real MDX posts in Phase 3 */}
        <a href="/blog" className="about-link">Read the blog →</a>
      </div>
    </section>
  )
}

export default BlogTeaser