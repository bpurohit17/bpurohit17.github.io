import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";

const SliderBlogCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-[#1a1f29] p-8 rounded-xl text-white">
      {/* Left Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/3"
      >
        <div className="bg-[#e5e7eb] shadow-xl rounded-lg overflow-hidden">
          <div className="p-0">
            <img
              src={`${process.env.PUBLIC_URL}/images/bulko-img.png`}
              alt="Interact Family App Preview"
              className="w-full object-contain"
            />
          </div>
        </div>
      </motion.div>

      {/* Right Content Section */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-2/3 space-y-3"
      >
        <p className="text-sm text-gray-400 font-semibold">Featured Project</p>
        <h2 className="text-cyan-400 text-2xl md:text-3xl font-semibold">
          Interect Family Chat App
        </h2>
        <div
          className="p-4 rounded-md shadow-md text-[15px] text-gray-200 leading-relaxed"
          style={{ background: "#393E46", transform: "translateX(-10%)" }}
        >
          <p>
            Interact is a revolutionary mobile app designed to help families
            connect with other families and promote social interaction. With
            Interact, families can easily find and connect with other families
            in their local area, create events, and chat with family partners.
            The app uses geolocation features to show other families within a
            specific radius, making it easy to find and connect with like-minded
            families nearby.
          </p>
        </div>
        <div className="text-sm text-cyan-400">
          React Native | Hybrid Mobile App | Android | iOS
        </div>
      </motion.div>
    </div>
  );
};

export default SliderBlogCard;
