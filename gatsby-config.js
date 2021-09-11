module.exports = {
  siteMetadata: {
    title: "Gardenby Blog",
    siteUrl: "https://gardenby.gatsbyjs.io/",
    author: "jeongwonHan",
    description: "한정원 블로그",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-typescript",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              plugins: [
                {
                  resolve: `gatsby-remark-vscode`,
                  options: {
                    theme: {
                      default: "Solarized Light",
                      dark: "Monokai Dimmed",
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-remark-copy-linked-files",
      options: {},
    },
  ],
};
