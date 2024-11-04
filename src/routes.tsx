import React from "react";
import { RouteObject } from "react-router-dom";
import Home from "./components/Home";
import offer from "./offer.json";
import OfferDetail from "./components/OfferDetail";
import AboutUs from "./components/AboutUs";

const createRoutes = (offers: any[], basePath: string): RouteObject[] => {
  return offers.map((offer) => ({
    path: `${basePath}${offer.adres}`,
    element: <OfferDetail offer={offer} />,
  }));
};

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/o-nas", element: <AboutUs /> },
  ...createRoutes(offer.packages, ""),
  ...createRoutes(offer.google_my_business, ""),
  ...createRoutes(offer.websites, ""),
  ...createRoutes(offer.applications, ""),
];

export default routes;
