import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { artigoMeta } from "@/lib/artigos";
import Artigo from "./Artigo";

/* Todos os artigos do blog estao em src/content/artigos/<slug>.json. Os 13 posts
   antigos (antes em src/data/blogPosts.tsx) foram convertidos em 2026-10-08 com a mesma URL. */
const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const meta = slug ? artigoMeta(slug) : undefined;
  return meta ? <Artigo key={meta.slug} meta={meta} /> : <NotFound />;
};

export default BlogPost;
