type NavLink = {
  url: string;
  label: string;
  title: string;
};
const navLinks: NavLink[] = [
  { url: "/posts", label: "posts", title: "Things I've written" },
  { url: "/links", label: "links", title: "Links I've collected" },
  // {
  //   url: "/projects",
  //   label: "projects",
  //   title: "Things I've made or contributed to",
  // },
];

export default ({ title, children }: Lume.Data) => (
  <html lang="en">
    <head>
      <title>Seth Etter &mdash; {title}</title>

      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link rel="shortcut icon" href="/img/favicon.ico" />

      <link rel="stylesheet" href="/css/style.css" />
    </head>
    <body>
      <div id="header">
        <div id="logo">
          <a href="/">
            <strong>seth etter</strong>&nbsp;
            <small>
              <em>dot</em>
            </small>
            &nbsp;&nbsp;<strong>com</strong>
          </a>
        </div>
        <div id="navigation">
          <ul>
            {navLinks.map((l) => (
              <li>
                <a href={l.url} title={l.title}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <main className="container">
        <div id="content prose">{children}</div>
      </main>

      <footer id="footer">
        <p style="float: right; justify-text: right;">
          <a
            href="https://sethetter.com/feed.rss"
            title="RSS feed for sethetter.com"
          >
            {" "}
            RSS feed
          </a>
          {" | "}
          <a
            href="https://github.com/sethetter/sethetter.com"
            title="sethetter.com source on GitHub"
            target="_blank"
          >
            Source code
          </a>
        </p>
        <p>
          Created and maintained by{" "}
          <a rel="me" href="https://sethetter.com">
            Seth
          </a>
        </p>
      </footer>

      <script
        src="https://cdn.usefathom.com/script.js"
        data-site="HRUUKZPR"
        defer
      ></script>
    </body>
  </html>
);
