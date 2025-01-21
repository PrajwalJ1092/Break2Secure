import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Animation1 from "./Animation1.json";
import CompaniesHor from "./CompainesHor";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import "./CyberSecurity.css";

const CyberSecuritySection = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [h1Text, setH1Text] = useState("");
  const [pText, setPText] = useState("");
  const h1Array =
    "Cyber Security Skills Gap Widens As Demand For Experts Continues To Soar".split(
      ""
    );

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (count1 < 94) {
        setCount1(count1 + 1);
      }
    }, 50);

    const interval2 = setInterval(() => {
      if (count2 < 69) {
        setCount2(count2 + 1);
      }
    }, 50);

    const interval3 = setInterval(() => {
      if (count3 < 99) {
        setCount3(count3 + 1);
      }
    }, 50);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [count1, count2, count3]);

  useEffect(() => {
    const h1Interval = setInterval(() => {
      if (h1Text.length < h1Array.length) {
        setH1Text(h1Text + h1Array[h1Text.length]);
      }
    }, 50);

   

    return () => {
      clearInterval(h1Interval);
      
    };
  }, [h1Text]);

  // Reset state when component unmounts
  useEffect(() => {
    return () => {
      setCount1(0);
      setCount2(0);
      setCount3(0);
      setH1Text("");
     
    };
  }, []);

  return (
    <div>
      <div className="bg-[#F0ECE2] text-[#E19898] min-h-screen flex items-center justify-center ">
        <div className="container mx-auto px-4 lg:px-8 py-12 flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              {h1Text}
              <span className="animate-blink"></span>
            </h1>
            <p className="text-gray-400 mb-6">
              {pText}
              <span className="animate-blink"></span>
            </p>
            <div className="flex gap-7 mb-6">
              <div>
                <h2 className="text-4xl font-bold">{count1}%</h2>
                <p className="text-sm text-gray-400">Quality services</p>
              </div>
              <div>
                <h2 className="text-4xl font-bold">{count2}%</h2>
                <p className="text-sm text-gray-400">Skilled staff</p>
              </div>
              <div>
                <h2 className="text-4xl font-bold">{count3}%</h2>
                <p className="text-sm text-gray-400">Support team</p>
              </div>
            </div>
          </div>

          {/* Lottie Animation Section */}
          <div
            className="animate11 lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
            // data-aos="fade-left"
          >
            <Lottie
              animationData={Animation1}
              loop={true}
              autoplay={true}
              className="w-[400px] h-[400px]"
            />
          </div>
        </div>
      </div>
      <div className="">
      <CompaniesHor />
      </div>
    </div>
  );
};

export default CyberSecuritySection;
