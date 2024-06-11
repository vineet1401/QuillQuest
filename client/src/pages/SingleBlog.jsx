import { useState } from "react";
import RecentBlog from "../components/RecentBlog";
import UserFollowCard from "../components/UserFollowCard";
import CommectSection from "../components/CommentSection";

export default function SingleBlog() {
  return (
    <div className=" py-6 bg-white dark:bg-gray-900">
      {/* Your content */}
      <div className="grid md:grid-cols-3 grid-cols-1 max-w-7xl px-2 mx-auto">
        <div className=" col-span-1 md:col-span-2 h-max w-full px-3">
          <h1 className="text-center my-4 text-3xl md:text-5xl capitalize font-semibold px-4 text-black dark:text-white">This is title of the blog</h1>
          <img
            className="w-3/4 mx-auto"
            src="https://images.unsplash.com/photo-1574169208507-84376144848b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <div>
            <p className="py-2 my-2 px-4 text-xl text-gray-900 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda beatae amet dolor maiores cum labore officiis! Cum corrupti ea voluptates asperiores necessitatibus assumenda harum maxime ad! Aut laudantium unde ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis sunt esse aperiam atque nihil iure excepturi eum quod. Id, nesciunt magni! Sint facilis perferendis totam inventore illum minus ea necessitatibus!</p>
            <p className="py-2 my-2 px-4 text-xl text-gray-900 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda beatae amet dolor maiores cum labore officiis! Cum corrupti ea voluptates asperiores necessitatibus assumenda harum maxime ad! Aut laudantium unde ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis sunt esse aperiam atque nihil iure excepturi eum quod. Id, nesciunt magni! Sint facilis perferendis totam inventore illum minus ea necessitatibus!</p>
            <p className="py-2 my-2 px-4 text-xl text-gray-900 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda beatae amet dolor maiores cum labore officiis! Cum corrupti ea voluptates asperiores necessitatibus assumenda harum maxime ad! Aut laudantium unde ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis sunt esse aperiam atque nihil iure excepturi eum quod. Id, nesciunt magni! Sint facilis perferendis totam inventore illum minus ea necessitatibus!</p>
            <p className="py-2 my-2 px-4 text-xl text-gray-900 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda beatae amet dolor maiores cum labore officiis! Cum corrupti ea voluptates asperiores necessitatibus assumenda harum maxime ad! Aut laudantium unde ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis sunt esse aperiam atque nihil iure excepturi eum quod. Id, nesciunt magni! Sint facilis perferendis totam inventore illum minus ea necessitatibus!</p>
          </div>
          <CommectSection />
        </div>

        <div>
          <div className="relative mt-3 flex py-4 px-3 bg-gray-100 dark:bg-gray-800 rounded-lg flex-col gap-2">
            <UserFollowCard />
          </div>
          <div>
            <h1 className="text-center my-4 text-2xl md:text-4xl uppercase font-bold px-4 text-black dark:text-white">Recent Blog</h1>
            <div>
              <RecentBlog />
              <RecentBlog />
              <RecentBlog />
              <RecentBlog />
            </div>
          </div>
        </div>
        {/* <CategoryBar category={category} /> */}
      </div>
    </div>
  );
}
