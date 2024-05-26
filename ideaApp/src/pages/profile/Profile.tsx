import React from 'react';

interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
    tags: string[];
  }

interface ProfileProps {
    username: string;
    email: string;
    bio: string;
    profileImage: string;
    posts: Post[];
}

const Profile: React.FC<ProfileProps> = ({ username, email, bio, profileImage, posts }) => {
    return (
        <div className="p-4">
            <div className="flex items-center">
                <img src={profileImage} alt="Profile" className="w-20 h-20 rounded-full mr-4" />
                <div>
                    <h1 className="text-xl font-bold">{username}</h1>
                    <p className="text-gray-600">{email}</p>
                </div>
            </div>
            <div className="mt-4">
                <h2 className="text-lg font-bold mb-2">About Me</h2>
                <p>{bio}</p>
            </div>
            <div className="mt-8 flex flex-col gap-4">
                <h2 className="text-xl font-bold mb-2">My Posts</h2>
                {posts.map((post) => (
                    <div key={post.id} className="p-6 bg-purple text-cream rounded-md shadow-md">
                        <h2 className="font-bold text-lg mb-2">{post.title}</h2>
                        <p className="text-sm  mb-4">{post.date} by {username}</p>
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
}

// Sample user data
const sampleUserData = {
    username: "randomGuy",
    email: "random@example.com",
    bio: "I'm a software engineer with a passion for coding.",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    posts: [
        { id: 1, title: "First Post", content: "This is the content of the first post.", author: "John Doe", date: "2024-04-25", tags: ["Research"] },
        { id: 2, title: "Second Post", content: "This is the content of the second post.", author: "Jane Smith", date: "2024-04-26", tags: ["Project"] },
        { id: 3, title: "Third Post", content: "This is the content of the third post.", author: "Alice Johnson", date: "2024-04-27", tags: ["Start up"] },
    ]
};

const ProfilePage: React.FC = () => {
    return (
        <div className='p-10'>
            <h1 className="text-3xl font-bold mb-4">Profile</h1>
            <Profile {...sampleUserData} />
        </div>
    );
}

export default ProfilePage;
