module.exports = {
  //-- SITE SETTINGS -----
  author: "Christopher Cobb",
  siteTitle: "Christopher Cobb Portfolio",
  siteShortTitle: "cc.", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "Hi there! I'm Christopher Cobb, a full stack web developer based in Birmingham, AL.",
  siteUrl: "http://www.christopher-cobb.com",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.ico", // Relative to gatsby-config file
  seoTitleSuffix: "Christopher Cobb", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#CDF3E1",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // GitHub, LinkedIn
  socialMedia: [
   {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/christopher-cobb4/",
    },
    {
      name: "Github",
      url: "https://github.com/christophercobb",
    },
    {
      name: "Email",
      url: "mailto:cbcobb4@gmail.com",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
    ],
    button: {
      name: "Contact",
      url: "/#contact",
    },
  },
  footerLinks: [
    {
      name: "Privacy",
      url: "/privacy",
    },
  ],
}
