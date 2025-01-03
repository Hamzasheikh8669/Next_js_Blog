"use client";

import { useState } from "react";

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "John Doe",
      content: "Great article! Very informative.",
      date: "2023-07-28",
    },
    {
      id: 2,
      author: "Jane Smith",
      content: "I learned a lot from this. Thanks for sharing!",
      date: "2023-07-29",
    },
  ]);
  const [newComment, setNewComment] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() && author.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: author.trim(),
        content: newComment.trim(),
        date: new Date().toISOString().split("T")[0],
      };
      setComments([...comments, comment]);
      setNewComment("");
      setAuthor("");
    }
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <div className="space-y-4 mb-8">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{comment.author}</span>
              <span className="text-sm text-gray-500">{comment.date}</span>
            </div>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="author" className="block mb-2 font-medium">
            Your Name
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="comment" className="block mb-2 font-medium">
            Your Comment
          </label>
          <textarea
            id="comment"
            rows={4}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
}
