import React from "react";
import { useRef } from "react";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Quality from "../Quality/Quality";
import Products from "../Products/Product";
import StudentDiscount from "../Discount/Discount";
import Logistic from "../Logistic/Logistic";
import Footer from "../Footer/Footer";
import Feedback from "../Feedback/Feedback";
import Frontbaner from "../Frontbaner/Frontbaner";


const Home = () => {
  const heroRef = useRef(null);

  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  return (
    <div>
      <Frontbaner scrollTo={scrollToHero} />
      <div ref={heroRef}>
      <Hero />
      </div>
      <Quality />
      <Category />
      <StudentDiscount />
      <Products />
      <Logistic />
      <Feedback />
    </div>
  );
};

export default Home