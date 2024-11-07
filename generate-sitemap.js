const fs = require("fs");
const Sitemap = require("react-router-sitemap").default;

const offer = JSON.parse(fs.readFileSync("./src/offer.json", "utf8"));

const createRoutes = (offers, basePath) => {
  return offers.map((offer) => ({
    path: `${basePath}${offer.adres}`,
  }));
};

const routes = [
  { path: "/", element: "<Home />" },
  { path: "/o-nas", element: "<AboutUs />" },
  ...createRoutes(offer.packages, ""),
  ...createRoutes(offer.google_my_business, ""),
  ...createRoutes(offer.websites, ""),
  ...createRoutes(offer.applications, ""),
];

new Sitemap(routes)
  .build("https://visioptimize.pl")
  .save("./public/sitemap.xml");
