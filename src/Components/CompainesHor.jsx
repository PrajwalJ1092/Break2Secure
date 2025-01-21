import React, { useEffect } from "react";
import "./CompainesHor.css";

const CompaniesHor = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If the user hasn't opted for reduced motion, enable animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

        const scrollerInner = scroller.querySelector(".scroller-inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className=" bg-[#F0ECE2] text-[#2B786D] flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-semibold text-center mb-8">
        Worked with 200+ companies
      </h1>

      {/* First scroller */}
      <div className="scroller overflow-hidden relative max-w-full" data-speed="fast">
        <div className="scroller-inner gap-5 p-5">
        <img src="public/Images/zoom.svg" alt="Zoom" className="w-25 h-16"/>
        <img src="public/Images/yahoo.svg" alt="Yahoo" className="w-25 h-16"/>
        <img src="public/Images/walmart.svg" alt="Walmart" className="w-25 h-16"/>
        <img src="public/Images/uber.svg" alt="Uber" className="w-25 h-16"/>
        <img src="public/Images/spotify.svg" alt="Spotify" className="w-25 h-16"/>
        <img src="public/Images/amazon.svg" alt="Amazon" className="w-25 h-16"/>
        <img src="public/Images/shopify.svg" alt="Shopify" className="w-25 h-16"/>
        <img src="public/Images/paypal.svg" alt="PayPal" className="w-25 h-16"/>
        <img src="public/Images/netflix.svg" alt="Netflix" className="w-25 h-16"/>
        <img src="public/Images/dell.svg" alt="Dell" className="w-25 h-16"/>
        <img src="public/Images/aws.svg" alt="AWS" className="w-25 h-16"/>
        </div>
      </div>

      {/* Second scroller */}
    </div>
  );
};

export default CompaniesHor;