import {
  IconAdjustmentsHorizontal,
  IconChevronDown,
} from "@tabler/icons-react";
import React from "react";

const Popular = () => {
  return (
    <div className="flex items-center justify-end gap-4 text-gray-600 capitalize mb-7">
      <div className="flex items-center gap-3 border border-E8E8E8 px-4 py-1 rounded-3xl">
        <p>popular</p>
        <IconChevronDown className="text-BA570B" />
      </div>
      <div className="flex items-center gap-3 border border-E8E8E8 px-4 py-1 rounded-3xl">
        <p>filters</p>
        <IconAdjustmentsHorizontal className="text-BA570B" />
      </div>
    </div>
  );
};

export default Popular;
