import React from "react";
import { HeartIcon } from "@heroicons/react/16/solid";
import UserInfo from "./UserInfo";
 
const UserFollowCard = () => {
  return (
    <>
      <UserInfo />
      <p className="text-center line-clamp-3 text-black dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos
        voluptatem dolore perferendis ullam molestias vitae corporis dolorem
        quod asperiores.
      </p>
      <button className=" bg-green-400 rounded-xl mx-auto px-4 py-2 flex items-center gap-4 font-bold text-lg">
        <HeartIcon color="white" className="h-8" />
        Follow
      </button>
    </>
  );
};

export default UserFollowCard;
