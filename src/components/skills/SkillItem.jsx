import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./Skills.css";

const SkillItem = ({ tooltip, children }) => {
  return (
    <div class="relative inline-block">
      <div>
        <div
          data-tooltip={tooltip}
          class="text-4xl rounded-full md:p-4 md:w-16 md:h-16 p-3 w-12 h-12 flex items-center justify-center cursor-pointer icons"
        >
          {children}
          <span class="sr-only">{tooltip}</span>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
