import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const API_URL = "http://localhost:3000/api";

interface Post {
    _id: string;
    title: string;
    content: string;
    category: string;
}

const Blog = () => {
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);

            try {
                const response = await fetch(`${API_URL}/posts`);
                const posts = await response.json() as Post[];
                setPosts(posts);
            } catch (error: any) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Something went wrong! Please try agian.</div>
    }

    return (
        <div className="w-full bg-white">
            <ul>
                {posts.map((post) => (
                    <li key={post._id}>
                        <h2>{post.title}</h2>
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Blog
