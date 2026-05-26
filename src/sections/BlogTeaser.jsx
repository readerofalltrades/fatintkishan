import "./BlogTeaser.css";

const posts = import.meta.glob("../posts/*.mdx", { eager: true });

const blogPosts = Object.entries(posts)
  .map(([path, mod]) => ({
    slug: path.replace("../posts/", "").replace(".mdx", ""),
    ...mod.frontmatter,
  }))
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 3);

function BlogTeaser() {
  return (
    <section className="blog-teaser" id="blog">
      <div className="blog-content">
        <h2 className="section-label">From the Blog</h2>
        <div className="blog-posts">
          {blogPosts.map((post) => (
            <div key={post.slug} className="blog-post-card">
              <div className="blog-post-meta">
                <span className="blog-post-tag">{post.tag}</span>
                <span className="blog-post-date">{post.date}</span>
              </div>
              <h3 className="blog-post-title">
                <a href={`/blog/${post.slug}`}>{post.title}</a>
              </h3>
            </div>
          ))}
        </div>
        <a href="/blog" className="section-link">
          Read the blog →
        </a>
      </div>
    </section>
  );
}

export default BlogTeaser;
