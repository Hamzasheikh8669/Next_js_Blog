import { posts } from "../../data/posts";
import { notFound } from "next/navigation";
import Comments from "../../components/Comments";

export default function Post({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex justify-between items-center text-gray-500 mb-6">
        <span className="capitalize">{post.category.replace("-", " ")}</span>
        <span>{post.date}</span>
      </div>
      <div className="mb-8 text-gray-600">
        <span>{post.readTime} min read</span>
        <span className="mx-2">•</span>
        <span>By {post.author}</span>
      </div>
      <p className="text-xl text-gray-700 mb-8 font-semibold">{post.excerpt}</p>
      <div className="prose max-w-none mb-12">
        {post.content.split("\n\n").map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
      <Comments />
    </article>
  );
}
