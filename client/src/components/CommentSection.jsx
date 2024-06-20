import { HeartIcon } from "@heroicons/react/20/solid";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";

const CommectSection = () => {
  return (
    <div className="bg-white mx-auto border-2 px-4 dark:bg-gray-900 py-4 lg:py-6 antialiased">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
          Discussion (20)
        </h2>
        <div className="inline-flex items-center p-2 ">
            <HeartIcon height={36} className="mx-2  text-red-500  bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600" />
            <p className="px-2 py-1 bg-indigo-600 rounded-xl dark:text-black text-white font-bold">Subscribe</p>
          </div>
      </div>
      <form className="mb-6 ">
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <label className="sr-only">Your comment</label>
          <textarea
            id="comment"
            rows="2"
            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center bg-blue-500 text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Post comment
        </button>
      </form>

      <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt="Michael Gough"
              />
              Michael Gough
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <time dateTime="2022-02-08" title="February 8th, 2022">
                Feb. 8, 2022
              </time>
            </p>
          </div>
          <div className="inline-flex items-center p-2 ">
            <PencilSquareIcon height={24} className="mx-2  text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600" />
            <TrashIcon height={24} className="mx-2  text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600" />
          </div>
        </footer>
        <p className="text-gray-500 dark:text-gray-400">
          Very straight-to-point article. Really worth time reading. Thank you!
          But tools are just the instruments for the UX designers. The knowledge
          of the design tools are as important as the creation of the design
          strategy.
        </p>
      </article>
    </div>
  );
};

export default CommectSection;
