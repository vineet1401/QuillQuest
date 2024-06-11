import React, { useId } from "react";
import { CpuChipIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const CategoryBar = ({category}) => {
  return (
    <div className="mt-3">
      <h1 className="p-3 text-center text-gray-900 dark:text-white text-2xl uppercase font-bold font-serif bg-indigo-500 rounded-t-md">
        categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1">
        {category.map((item) => {
          return (
            <NavLink
              key={useId()}
              className="cursor-pointer grid-cols-1 flex p-3 my-2 gap-2 md:gap-3 lg:gap-4 text-gray-900 dark:text-white dark:hover:bg-indigo-700 hover:bg-indigo-200"
              to={item.to}
            >
              <CpuChipIcon height={32} color="purple" />
              <p className="text-lg uppercase">{item.name}</p>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryBar;
