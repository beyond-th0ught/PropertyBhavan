/** @type {import('next-sitemap').IConfig} */
// siteUrl: 'https://propertybhavan.com',
module.exports = {
  siteUrl : "https://propertybhavan.com",
  generateRobotsTxt: true,
  // exclude: ['/server-sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    policies : [
      {userAgent : "*", disallow : "/secret"},
      {userAgent : "*",allow : "/"}
    ],
    additionalSitemaps: [
      'https://propertybhavan.com/server-sitemap.xml', // <==== Add here
    ],
  },

}