import React from "react";
import { motion } from "framer-motion";
import './Companies.css';

const Companies = () => {
  const brands = [
    { name: "Yahoo!", logo: "https://cdn.pixabay.com/photo/2013/01/29/22/53/yahoo-76684_640.png" },
    { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/2560px-Spotify_logo_with_text.svg.png" },
    { name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Shopify_Logo.png/640px-Shopify_Logo.png" },
    { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" },
    { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/1200px-Dell_Logo.png" },
  ];

  return (
    
    <div className=" py-24 px-4 text-center bg-gradient-to-r from-gray-400 to-slate-500">
      <motion.h2
        className="text-5xl font-bold text-green-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Protecting the brands you love and trust:
      </motion.h2>
      <motion.p
        className="mt-4 text-xl text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Over 200+ vulnerabilities uncovered globally to keep your data safe and secure.
      </motion.p>
      <motion.p
        className="mt-2 text-xl text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        We're proud to work with the brands you know and love to protect your data and privacy.
      </motion.p>

      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 items-center">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            className="flex justify-center"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-11"
              title={brand.name}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
