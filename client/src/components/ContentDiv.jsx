import React, { useId } from "react";
import { NavLink } from "react-router-dom";
import UserInfo from "./UserInfo";

const ContentDiv = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return (
          <div
            key={useId()}
            className="flex flex-col sm:flex-row   gap-4 p-3 shadow-lg"
          >
            <div className=" flex items-center justify-center  ">
              <img src={post.image} alt="" className="rounded-lg max-h-48" />
            </div>
            <div>
              <article
                key={post.id}
                className="flex max-w-xl gap-2 flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-900 dark:text-white">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="z-10 rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 font-medium text-gray-900 dark:text-white"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group ">
                  <h3 className="mt-1 text-lg font-semibold leading-6 text-gray-900 dark:text-white hover:underline">
                    <NavLink to={post.to}>{post.title}</NavLink>
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-900 dark:text-white">
                    {post.description}
                  </p>
                </div>
                <UserInfo />
              </article>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ContentDiv;
