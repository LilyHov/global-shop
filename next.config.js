/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

module.exports = {
  reactStrictMode: true,
  i18n,

  async redirects() {
    return [
      // {
      //   source: '/team',
      //   destination: '/about',
      //   permanent: false,
      // },
      // // Path Matching - will match `/old-blog/a`, but not `/old-blog/a/b`
      // {
      //   source: '/old-blog/:slug',
      //   destination: '/news/:slug',
      //   permanent: false,
      // },
      // Wildcard Path Matching - will match `/blog/a` and `/blog/a/b`
      // {
      //   source: '/shop/:slug*',
      //   destination: '/shop/:slug*',
      //   permanent: false,
      // },
      // // Regex Path Matching - The regex below will match `/post/123` but not `/post/abc`
      // {
      //   source: '/shop/:slug(\\d{1,})',
      //   destination: '/shop/:slug',
      //   permanent: false,
      // },
    ]
  },
}
