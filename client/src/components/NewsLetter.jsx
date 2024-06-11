import React from "react";

const NewsLetter = () => {
  return (
    <div className="max-w-xl lg:max-w-lg p-3 mx-auto">
      <h2 className="text-3xl font-bold tracking-tight font-serif sm:text-4xl">
        Subscribe to our newsletter.
      </h2>
      <p className="mt-4 text-lg leading-8 text-gray-700">
        Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit
        quis. Duis tempor incididunt dolore.
      </p>
      <div className="mt-6 flex max-w-md gap-x-4">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="min-w-0 flex-auto rounded-md border-0  px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black  sm:text-sm sm:leading-6"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
