import React, { useState } from "react";
import PublishBlog from "../pages/PublishBlog";

const PublishBlogButton = () => {
  const [publishBlog, togglePublishBlog] = useState(false);

  return (
    <>
      <div>
        <a
          href="#"
          aria-current="page"
          onClick={() => togglePublishBlog(!publishBlog)}
          className="items-center block w-max hover:bg-indigo-500 bg-indigo-600 p-4 text-sm font-semibold text-white  cursor-pointer rounded-2xl mt-6"
        >
          Publish Your Own Blog
        </a>
      </div>
      <PublishBlog publishBlog={publishBlog} togglePublishBlog={togglePublishBlog} />
    </>
  );
};

export default PublishBlogButton;
