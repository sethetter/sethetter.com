export interface LinksPageData extends Lume.Data {
  links: Link[];
}

export type Link = {
  title: string;
  author: string;
  url: string;
  tags: string[];
};

export const links = [
  {
    title: "Type Safety Back and Forth",
    url: "https://www.parsonsmatt.org/2017/10/11/type_safety_back_and_forth.html",
    author: "Matt Parsons",
    tags: ["programming", "types", "design"],
  },
  {
    title: "Parse, don't validate",
    url: "https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/",
    author: "Alexis King",
    tags: ["programming", "design"],
  },
  {
    title: "Choose boring technology",
    url: "https://boringtechnology.club",
    author: "Dan McKinley",
    tags: ["software", "engineering"],
  },
  {
    title: "An app can be a home-cooked meal",
    url: "https://www.robinsloan.com/notes/home-cooked-app/",
    author: "Robin Sloan",
    tags: ["software"],
  },
  {
    title: "Tools for a culture of writing",
    url: "https://matt.blwt.io/post/tools-for-a-culture-of-writing/",
    author: "Matt Blewitt",
    tags: ["teams", "remote", "writing"],
  },
  {
    title: "Ten commandments of egoless programming",
    author: "Gerald M. Weinberg",
    url: "https://blog.codinghorror.com/the-ten-commandments-of-egoless-programming/",
    tags: ["programming", "teams"],
  },
  {
    title: "Why we prefer complex over simple",
    author: "Farnam Street",
    url: "https://fs.blog/2018/01/complexity-bias/",
    tags: ["programming", "thinking"],
  },
  {
    title: "Fear makes you a worse programmer",
    author: "Julia Evans",
    url: "https://jvns.ca/blog/2014/12/21/fear-makes-you-a-worse-programmer/",
    tags: ["programming"],
  },
  {
    title: "The product-minded software engineer",
    author: "Gergely Orosz",
    url: "https://blog.pragmaticengineer.com/the-product-minded-engineer/",
    tags: ["programming", "product"],
  },
  {
    title: "The future of work is written",
    author: "Juan Pablo Buriticá",
    url: "https://increment.com/remote/future-of-work-is-written/",
    tags: ["teams", "remote", "writing"],
  },
];
