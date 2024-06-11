import React from "react";
import UserInfo from "./UserInfo";

const RecentBlog = () => {
  return (
    <div className="p-3 py-5 border-2 dark:border-gray-800 my-1 flex flex-col sm:flex-row md:flex-col">
      <img
        className="w-2/3 sm:w-2/4 sm:p-2 md:w-2/3 mx-auto"
        src="https://images.unsplash.com/photo-1595147389795-37094173bfd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlfGVufDB8fDB8fHww"
        alt=""
      />
      <div>
        <h1 className="text-2xl uppercase py-1 text-center text-black dark:text-white">Blog title</h1>
        <p className="line-clamp-2 font-serif my-2 text-black dark:text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia nemo
          molestiae, consequuntur consectetur maxime voluptatibus nesciunt ex
          minus vitae i
        </p>
        <div className="flex justify-between items-center">
          <UserInfo />
          <p className="px-2 py-1 bg-gray-900 dark:bg-white rounded-xl dark:text-black text-white font-bold">Category</p>
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
