import React from "react";
import Nav from "../../partials/Nav";
import {
  FaShoppingBag,
  FaStore,
  FaParking,
  FaUtensils,
  FaFilm,
  FaChild,
  FaWifi,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import Hero from "./hero/Hero";
import Footer from "../../partials/Footer";
import Contact from "./contact/Contact";
import Stores from "./stores/Stores";
import Services from "./services/Services";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Stores />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
