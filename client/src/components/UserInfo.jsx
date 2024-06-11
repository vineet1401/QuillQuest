import React from 'react'

const UserInfo = () => {
  return (
    <div className="text-sm leading-6 flex justify-center items-center gap-x-4">
    <img
      src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
      alt=""
      className="h-10 w-10 rounded-full bg-gray-50"
    />
    <span>
      <p className="font-semibold text-xl text-black dark:text-white">
        <a href="">
          Vineet Sakpal
        </a>
      </p>
      <p className="text-gray-700 dark:text-gray-200">Full Stack Developer </p>
    </span>
  </div>
  )
}

export default UserInfo
