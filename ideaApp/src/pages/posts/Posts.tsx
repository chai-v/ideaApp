import React, { useState } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
}

const posts: Post[] = [
  { id: 1, title: "First Post", content: "This is the content of the first post.", author: "John Doe", date: "2024-04-25", tags: ["Research"] },
  { id: 2, title: "Second Post", content: "This is the content of the second post.", author: "Jane Smith", date: "2024-04-26", tags: ["Project"] },
  { id: 3, title: "Third Post", content: "This is the content of the third post.", author: "Alice Johnson", date: "2024-04-27", tags: ["Start up"] },
];

const uniqueTags = Array.from(new Set(posts.flatMap(post => post.tags)));

const Posts: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  const handleTagChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const tag = event.target.value;
    setSelectedTag(tag);

    if (tag === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(post =>
        post.tags.includes(tag)
      );
      setFilteredPosts(filtered);
    }
  };

  return (
    <div className="p-10 bg-slate-100 min-h-screen">
      <h1 className="text-darkpurple font-bold text-2xl mb-6">Posts</h1>
      
      <select 
        value={selectedTag} 
        onChange={handleTagChange} 
        className="w-full mb-6 p-2 border border-gray-300 rounded"
      >
        <option value="">All Tags</option>
        {uniqueTags.map(tag => (
          <option key={tag} value={tag}>{tag}</option>
        ))}
      </select>
      
      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <div key={post.id} className="p-6 bg-purple text-cream rounded-md shadow-md">
            <h2 className="font-bold text-xl mb-2">{post.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{post.date} by {post.author}</p>
            <p>{post.content}</p>
            <div className="flex space-x-2 mt-4">
              {post.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-cream text-purple rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
