import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import ReactMarkdown from "react-markdown";
import { MoveLeft } from "lucide-react";
import remarkGfm from "remark-gfm";

interface Post {
    _id: string;
    title: string;
    content: string;
    category: string;
    createdAt: string;
    image: string;
}

const API_URL = import.meta.env.VITE_API_URL;

const BlogPost = () => {

    const { id } = useParams<{ id: string }>();

    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [post, setPost] = useState<Post>();

    const navigate = useNavigate();

    useEffect(() => {
        if (!id) return;
        const fetchPost = async () => {
            setIsLoading(true);

            try {
                const response = await fetch(`${API_URL}/api/post/${id}`);
                const post = await response.json() as Post;
                setPost(post);
            } catch (error: any) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (isLoading) {
        return <div>Loading Posts...</div>
    }

    if (error) {
        return <div>Something went wrong! Please try agian.</div>
    }

    if (!post) return <div>Post not found.</div>;

    return (
        <div className="bg-white dark:bg-[#171717] p-6 rounded-2xl mx-auto my-2 text-left">
            <img src={post.image} className="mx-auto mt-2 mb-6"/>
            <h2 className="text-3xl my-2 text-center dark:text-white">{post.title}</h2>
            <div className="prose max-w-none dark:prose-invert py-4">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content.replace(/\\n/g, "\n")}</ReactMarkdown>
            </div>
            <div className="flex gap-2">
                <MoveLeft size={20} className="my-auto"></MoveLeft>
                <button onClick={() => navigate(-1)} className="underline text-blue-400 cursor-pointer">Back</button>
            </div>
        </div>
    )
}

export default BlogPost
