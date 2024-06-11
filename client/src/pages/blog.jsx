// import React from 'react'
import { useParams } from "react-router-dom";
import CategoryBar from "../components/CategoryBar";
import ContentDiv from "../components/ContentDiv";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    to: "/blog/all/2",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", to: "/blog/all/2" },
    image: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog2.jpg",
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      to: "/blog/all/2",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    to: "/blog/all/2",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", to: "/blog/all/2" },
    image: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog2.jpg",
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      to: "/blog/all/2",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    to: "/blog/all/2",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", to: "/blog/all/2" },
    image: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog2.jpg",
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      to: "/blog/all/2",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    to: "/blog/all/2",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", to: "/blog/all/2" },
    image: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog2.jpg",
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      to: "/blog/all/2",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    to: "/blog/all/2",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", to: "/blog/all/2" },
    image: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog2.jpg",
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      to: "/blog/all/2",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    to: "/blog/all/2",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", to: "/blog/all/2" },
    image: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog2.jpg",
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      to: "/blog/all/2",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];
const category = [
  { name: "History", to: "/blog/history" },
  { name: "General Knowledge", to: "/blog/general-knowledge" },
  { name: "Technology", to: "/blog/technology" },
  { name: "Current Affair", to: "/blog/current-affairs" },
  { name: "Entertainment", to: "/blog/entertainment" },
];

const Blog = () => {
  const { categoryName } = useParams();
  console.log("category", categoryName);
  return (
    <div className=" px-2  py-6 dark:bg-gray-900 bg-white">
      {/* Your content */}
      <div className="grid lg:grid-cols-3 max-w-7xl mx-auto md:grid-cols-1 ">
        <div className="lg:col-span-2">
          <h1 className="text-4xl inline font-bold tracking-tight text-gray-200 md:text-5xl uppercase absolute z-10 px-5">
            {categoryName}
          </h1>
          <img
            className=" lg:px-2 mx-auto px-2 w-full relative "
            src="https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww"
            // src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog2.jpg"
            alt=""
          />
        </div>
        <CategoryBar category={category} />
      </div>

      <section className="mt-5 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl uppercase">
          Recent Blogs
        </h2>
        <div className=" max-w-7xl mx-auto py-10 px-2 grid grid-cols-1  lg:grid-cols-2 gap-5">
          <ContentDiv posts={posts} />
        </div>
      </section>
    </div>
  );
};

export default Blog;
