import { useParams } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import "./BlogPost.css";

const posts = import.meta.glob("../posts/*.mdx", { eager: true });

function BlogPostPage() {
  const { slug } = useParams();
  const mod = posts[`../posts/${slug}.mdx`];

  if (!mod) {
    return (
      <PageLayout>
        <h1>Post not found.</h1>
        <a href="/blog">← Back to blog</a>
      </PageLayout>
    );
  }

  const { title, date, tag } = mod.frontmatter;
  const Content = mod.default;

  return (
    <PageLayout>
      <p className="page-meta">
        <a href="/blog">← Blog</a>
      </p>
      <h1>{title}</h1>
      <div className="blogpost-meta">
        <span className="blog-entry-tag">{tag}</span>
        <span className="page-meta">{date}</span>
      </div>
      <hr />
      <div className="blogpost-content">
        <Content />
      </div>
    </PageLayout>
  );
}

export default BlogPostPage;
