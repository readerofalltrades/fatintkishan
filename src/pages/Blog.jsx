import PageLayout from "../components/PageLayout";
import "./Blog.css";

const posts = import.meta.glob("../posts/*.mdx", { eager: true });

const blogPosts = Object.entries(posts)
  .map(([path, mod]) => ({
    slug: path.replace("../posts/", "").replace(".mdx", ""),
    ...mod.frontmatter,
  }))
  .sort((a, b) => new Date(b.date) - new Date(a.date));

function BlogPostEntry({ slug, title, date, tag, excerpt }) {
  return (
    <div className="blog-entry">
      <div className="blog-entry-meta">
        <span className="blog-entry-tag">{tag}</span>
        <span className="page-meta">{date}</span>
      </div>
      <h3>
        <a href={`/blog/${slug}`}>{title}</a>
      </h3>
      <p>{excerpt}</p>
    </div>
  );
}

function BlogPage() {
  return (
    <PageLayout>
      <h1>Blog</h1>
      <p className="page-meta">
        A public diary. Notes on systems, building, and everything adjacent.
      </p>
      <hr />
      {blogPosts.map((post) => (
        <BlogPostEntry key={post.slug} {...post} />
      ))}
    </PageLayout>
  );
}

export default BlogPage;
