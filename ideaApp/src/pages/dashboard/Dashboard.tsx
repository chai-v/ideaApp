import React from "react";

interface Alert {
  id: number;
  message: string;
  date: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
}

const alerts: Alert[] = [
  { id: 1, message: "Name reacted to your post", date: "2024-05-01" },
  { id: 2, message: "You have a new message", date: "2024-05-02" },
  { id: 3, message: "Updated your profile", date: "2024-05-03" },
];

const posts: Post[] = [
  { id: 1, title: "First Post", content: "This is the content of the first post.", date: "2024-04-25" },
  { id: 2, title: "Second Post", content: "This is the content of the second post.", date: "2024-04-26" },
  { id: 3, title: "Third Post", content: "This is the content of the third post.", date: "2024-04-27" },
];

const Dashboard: React.FC = () => {
  return (
    <div className="p-10">
      <h1 className="text-darkpurple font-bold text-xl mb-4">My Alerts</h1>
      <div className="mb-8">
        {alerts.map((alert) => (
          <div key={alert.id} className="mb-2 p-4 bg-purple text-cream rounded-md shadow-md">
            <p className="font-semibold">{alert.message}</p>
            <p className="text-sm text-gray-600">{alert.date}</p>
          </div>
        ))}
      </div>

      <h1 className="text-darkpurple font-bold text-xl mb-4">My Posts</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id} className="mb-4 p-4 bg-purple text-cream rounded-md shadow-md">
            <h2 className="font-bold text-lg">{post.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{post.date}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
