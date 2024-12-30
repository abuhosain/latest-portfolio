import { useGetAllBlog } from "../../hooks/blog.hook";
import AnimatedText from "../AnimatedText";
import BlogCard from "../Cards/BlogCard";

const Blogs = () => {
  const { data, isPending } = useGetAllBlog();

  // Slice the data to show only 6 blogs
  const blogsToShow = data?.data.slice(0, 6);

  return (
    <div className="container mx-auto h-full">
      <div className="my-5">
        <AnimatedText text="My Latest Blogs" textStyles="h2 mb-2" />
      </div>
      {isPending ? (
        <p>Loading...</p> // Display loading state while fetching data
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogsToShow?.map((blog, index) => (
            <BlogCard key={`${blog?._id}-${index}`} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
