import { useRouter } from "next/router";
import React from "react";
// import { useNavigate } from "react-router-dom";
import image from "../../Assets/phil-hearing-IYfp2Ixe9nM-unsplash.jpg";

export default function BlogCard({
  id,
  title,
  description,
  author,
  coverImage,
  date,
}) {
  const navigate = useRouter();
  const handleBlog = () => {
    const urlRegex = /\s/g;
    const url_title = title.toLowerCase().replace(urlRegex, "-");
    navigate.push(`/BlogDetail/${id}/${url_title}`);
  };
  return (
    <div
      onClick={handleBlog}
      class="overflow-hidden shadow-lg rounded-lg h-full  w-full cursor-pointer m-auto"
    >
      <a class="w-full block h-full">
        <img
          alt="blog photo"
          src={coverImage ? coverImage : image}
          class="max-h-[250px] w-full object-cover"
        />
        <div class="bg-white dark:bg-gray-800 w-full p-4">
          {/* <p class="text-indigo-500 text-md font-medium">Video</p> */}
          <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
            {title}
          </p>
          <p class="text-gray-400 dark:text-gray-300 font-light text-md">
            {description?.slice(0, 40)}
          </p>
          <div class="flex items-center mt-4">
            <a href="#" class="block relative" accessKey="profile">
              <img
                alt="profil"
                src={coverImage}
                class="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div class="flex flex-col justify-between ml-4 text-sm">
              <p class="text-gray-800 dark:text-white">{author}</p>
              <p class="text-gray-400 dark:text-gray-300">
                {new Date(date).toUTCString().slice(5, 16)} - 6 min read
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
