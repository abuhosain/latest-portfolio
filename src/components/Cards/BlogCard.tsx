import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface IBlog {
  _id: string;
  title: string;
  content: string;
  author: string;
  tags: string[];
  coverImage: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogCard = ({ blog }: { blog: IBlog }) => {
  return (
    <div
      key={blog.title}
      className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
    >
      {/* Author Name */}
      <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <span className="ml-3 text-lg font-medium text-gray-700 dark:text-gray-200">
          {blog.author}
        </span>
      </div>

      {/* Fixed Image */}
      <div className="relative w-full h-[200px] overflow-hidden rounded-t-lg">
        <Image
          alt={`${blog.author}'s cover image`}
          src={blog.coverImage || "/default-avatar.png"} // Fallback image
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Blog Title and Description */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          {blog.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
          {blog.content}
        </p>
      </div>

      {/* View Details Button */}
      <div className="p-4 mt-auto">
        <Link
          href={`/blog/${blog._id}`}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          View Details
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2"
            fill="none"
            viewBox="0 0 14 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5h12m0 0L9 1m4 4L9 9"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
