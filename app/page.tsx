"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BestSelling from "./components/BestSelling";
import AboutUs from "./components/AboutUs";
import Categories from "./components/Categories";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Section
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      });

      heroTl.from(".hero-title", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .from(".stats-container", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      }, "-=0.4")
      .from(".search-wrapper", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      }, "-=0.3")
      .from(".hero-image-wrapper", {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=0.6");

      // Best Selling Section
      gsap.from(".best-selling-title, .best-selling-text, .best-selling-button", {
        scrollTrigger: {
          trigger: "#best-selling-section",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      gsap.from(".best-selling-card", {
        scrollTrigger: {
          trigger: "#best-selling-section",
          start: "top 70%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.4
      });

      // About Us Section
      gsap.from(".about-us-title, .about-us-text", {
        scrollTrigger: {
          trigger: "#about-us-section",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      gsap.from(".about-us-item", {
        scrollTrigger: {
          trigger: "#about-us-section",
          start: "top 70%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
      });

      // Categories Section
      gsap.from(".categories-title, .categories-text", {
        scrollTrigger: {
          trigger: "#categories-section",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      gsap.from(".categories-bg", {
        scrollTrigger: {
          trigger: "#categories-section",
          start: "top 60%",
        },
        opacity: 0,
        scaleY: 0,
        transformOrigin: "bottom center",
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(".categories-item", {
        scrollTrigger: {
          trigger: "#categories-section",
          start: "top 70%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3
      });

      // Testimonials Section
      gsap.from(".testimonials-title, .swiper-custom-pagination", {
        scrollTrigger: {
          trigger: "#testimonials-section",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      gsap.from(".testimonials-swiper", {
        scrollTrigger: {
          trigger: "#testimonials-section",
          start: "top 70%",
        },
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });

      // Footer Section
      gsap.from(".footer-brand, .footer-column, .footer-bottom", {
        scrollTrigger: {
          trigger: "#footer",
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center mx-auto">
      <Header />
      <Hero />
      <BestSelling />
      <AboutUs />
      <Categories />
      <Testimonials />
      <Footer />
    </main>
  );
}

