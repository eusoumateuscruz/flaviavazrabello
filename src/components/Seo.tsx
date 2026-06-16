import { Helmet } from "react-helmet-async";

type SeoProps = {
  title: string;
  description: string;
  canonical: string;
};

const Seo = ({ title, description, canonical }: SeoProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
  </Helmet>
);

export default Seo;