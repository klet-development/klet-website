import { defineConfig, defineCollection, s } from "velite";

const posts = defineCollection({
  name: "Post",
  pattern: "blog/*/*.mdx",
  schema: s
    .object({
      title: s.string(),
      description: s.string(),
      date: s.isodate(),
      body: s.mdx(),
    })
    .transform((data, { meta }) => {
      // meta.path = "blog/my-slug/fr" or "blog/my-slug/en"
      const parts = meta.path.split("/");
      return {
        ...data,
        slug: parts[1],
        locale: parts[2] as "fr" | "en",
      };
    }),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts },
});
