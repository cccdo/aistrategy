module.exports = {
  siteMetadata: {
    title: "AI Strategy",
    description: "A site to give you more information about our AI Strategy",
    keywords: "gatsby,theme,carbon",
  },
  pathPrefix: `/cccdo/aistrategy`,
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Carbon Design Gatsby Theme",
        icon: "src/images/favicon.svg",
        short_name: "Gatsby Theme Carbon",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#161616",
        display: "browser",
      },
    },
    {
      resolve: "gatsby-theme-carbon",
      options: {
        mediumAccount: "carbondesign",
        repository: {
          baseUrl: "https://github.com/deidrap/aistrategy",
        },
      },
    },
  ],
};
