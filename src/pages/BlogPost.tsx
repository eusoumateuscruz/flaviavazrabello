import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import NotFound from "./NotFound";
import { getPostBySlug } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <NotFound />;

  return (
    <>
      <Seo
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={post.canonical}
        jsonLd={post.jsonLd}
      />
      <PageHero eyebrow={post.category} title={post.h1} />

      <section className="py-16 md:py-20">
        <div className="container-narrow max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary hover:text-accent transition-colors mb-10"
          >
            <ArrowLeft className="h-3 w-3" /> Voltar ao blog
          </Link>

          <article
            className="prose prose-neutral max-w-none
              prose-headings:font-serif prose-headings:text-primary
              prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4
              prose-p:text-foreground/80 prose-p:leading-relaxed
              prose-li:text-foreground/80
              prose-strong:text-primary
              prose-a:text-accent hover:prose-a:underline"
          >
            {post.content}
          </article>
        </div>
      </section>
    </>
  );
};

export default BlogPost;