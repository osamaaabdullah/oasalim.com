import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

interface Post {
    _id: string;
    title: string;
    content: string;
    category: string;
    createdAt: string;
    image: string;
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
        return <div>Loading Posts...</div>
    }

    if (error) {
        return <div>Something went wrong! Please try agian.</div>
    }

    function plainText(markdown: string) {
        return markdown.replace(/\\n/g, "\n").replace(/[#*_>`~-]/g, "");
    }

    return (
        <div className="bg-white dark:bg-[#171717] p-6 rounded-2xl mx-auto my-2">
            <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-6">
                {posts.map((post) => (
                    <li key={post._id}>
                        <div className="text-justify mt-3 flex flex-col xl:flex-row gap-3">
                            <div className="flex-1">
                                <img src={post.image} alt="image" className="w-full rounded-xl" />
                            </div>
                            <div className="flex flex-col flex-2 justify-between">
                                <div className="mt-1">
                                    <Link to={post._id}>
                                        <h2 className="text-left text-2xl hover:underline hover:opacity-80">{post.title}</h2>
                                    </Link>
                                    <div className="flex gap-2">
                                        <p className="text-white bg-[#171717] dark:bg-white dark:text-black p-1 px-2 rounded-xl w-fit text-sm my-2">{new Date(post.createdAt).toLocaleDateString("en-CA", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}</p>
                                        <p className="bg-[#F2F2F2] dark:bg-[#292929] dark:text-white p-1 px-2 rounded-xl w-fit text-sm my-2">{post.category}</p>
                                    </div>
                                </div>
                                <div>
                                    <p>{post.content.length > 400 ? plainText(post.content.replace(/\\n/g, "\n").slice(0, 300)) + "..." : plainText(post.content.replace(/\\n/g, "\n"))}</p>
                                    <Link to={post._id}>
                                        <p className="underline text-blue-400">Read More</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Blog
