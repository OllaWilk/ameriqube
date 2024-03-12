import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { LocaleContext } from "./contexts/LocaleContext";
import { loadLanguage } from "./utils/loadLanguage";
import { CookieInfo } from "./components/common";
import {
  About,
  Home,
  Redirect,
  NotFound,
  Contact,
  Footer,
  Navigation,
  CookiePage,
} from "./components/views/index";

export const App = () => {
  const { language, region } = useContext(LocaleContext);
  const data = loadLanguage(language);

  return (
    <>
      <CookieInfo cookie={data.cookie} />

      <Navigation
        navigationNavbar={data.navigationNavbar}
        productsAndServices={data.productsAndServices}
        geolocation={data.geolocation}
      />
      <Routes>
        <Route path="/" element={<Redirect redirectUrl={"home"} />} />
        <Route path="/ameriqube" element={<Redirect redirectUrl={"home"} />} />
        <Route path="/home" element={<Home home={data.home} />} />
        <Route
          path={`/about`}
          element={<About about={data.about} region={region} />}
        />
        <Route
          path="/contact"
          element={<Contact contact={data.contact} region={region} />}
        />
        <Route
          path="/cookies"
          element={<CookiePage cookiePage={data.cookiePage} region={region} />}
        />
        <Route path="*" element={<NotFound notFound={data.notFound} />} />
      </Routes>
      <Footer
        footer={data.footer}
        navigationNavbar={data.navigationNavbar}
        region={region}
      />
    </>
  );
};
