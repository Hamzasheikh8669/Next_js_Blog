import Link from "next/link";
import { posts, Post } from "../../data/posts";
import { notFound } from "next/navigation";
import { isNewPost } from "../../utils/dateUtils";

export default function Category({ params }: { params: { category: string } }) {
  const validCategories = ["ai", "full-stack", "blockchain"];

  if (!validCategories.includes(params.category)) {
    notFound();
  }

  const categoryPosts = posts.filter(
    (post) => post.category === params.category
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 capitalize">
        {params.category.replace("-", " ")} Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
          >
            <Link href={`/post/${post.id}`} className="block h-full">
              <div className="p-6 flex flex-col h-full relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-white relative z-10 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 flex-grow group-hover:text-gray-200 relative z-10 transition-colors duration-300">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4 relative z-10">
                  <span className="capitalize group-hover:text-gray-300 transition-colors duration-300">
                    {post.category.replace("-", " ")}
                  </span>
                  <span className="group-hover:text-gray-300 transition-colors duration-300">
                    {post.date}
                  </span>
                </div>
                <div className="flex justify-between items-center relative z-10">
                  <span className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                    {post.readTime} min read
                  </span>
                  {isNewPost(post.date) && (
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      New
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
