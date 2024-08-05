import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import postcss from "lume/plugins/postcss.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import { attrs } from "npm:@mdit/plugin-attrs";
import typography from "npm:@tailwindcss/typography";

const site = lume({ src: "./src", location: new URL("https://sethetter.com") });

site.ignore("README.md", "netlify.toml", "netlify-build.sh");

site.use(
  tailwindcss({
    options: {
      plugins: [typography],
    },
  })
);

site.use(postcss());

site.hooks.addMarkdownItPlugin(attrs);

site.use(jsx());

site.copy("img");
site.copy("fonts");
site.copy("css");

site.copy("_redirects"); // netlify redirects

export default site;
