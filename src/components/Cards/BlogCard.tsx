import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface IBlog {
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
      className="bg-white dark:bg-black border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
    >
      {/* Author Name and Cover Image */}
      <div className="flex items-center p-4 border-b">
        <span className="ml-3 text-lg font-medium text-gray-700 dark:text-white">
          {blog.author}
        </span>
      </div>
      <Image
        alt={`${blog.author}'s cover image`}
        className="rounded-full"
        height={100}
        width={300}
        src={blog.coverImage || "/default-avatar.png"} // Fallback to default avatar
      />
      <hr className="border w-full" />
      {/* Blog Title */}
      <div className="p-5">
        <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
          {blog.title}
        </h3>
      </div>

      {/* View Details Button */}
      <div className="p-4 mt-auto">
        <Link
          href={`/blog/${encodeURIComponent(blog.title)}`}
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
