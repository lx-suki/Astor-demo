/**
 * Site Configuration
 *
 * Customize this file to personalize your blog.
 */

export const SITE_CONFIG = {
  // Basic site information
  title: "A Blog From Lx ",
  description: "A modern blog built with Astro",
  author: "lx-suki",
  email: "jkbingtang@outlook.com",

  // Social media links
  // Remove or leave empty any platforms you don't use
  socialLinks: {
    github: "lx-suki",
    twitter: "lx-suki",
    linkedin: "lx-suki",
    youtube: "", // Leave empty if not used
  },

  // Analytics
  // Add your Google Analytics tracking ID
  // Leave empty to disable analytics
  googleAnalyticsId: "",

  // Locale settings
  language: "zh-CN",
  locale: "zh-CN",

  // Site URL (used for canonical URLs and SEO)
  // Update this with your production URL
  siteUrl: "https://space.bilibili.com/622499613",

  // Default meta image for social sharing
  // Place your image in the public folder
  defaultOgImage: "/stock/default-og-image.jpg",

  // Posts per page for blog pagination
  postsPerPage: 10,

  // Enable/disable features
  features: {
    darkMode: true,
    analytics: true,
    sitemap: true,
  }
};

// Author information for structured data
export const AUTHOR_INFO = {
  name: SITE_CONFIG.author,
  email: SITE_CONFIG.email,
  url: SITE_CONFIG.siteUrl,
  // You can add more structured data here
  jobTitle: "Developer", // Optional
  organization: "", // Optional
};

// Navigation menu items
export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
];
