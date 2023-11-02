import React, { useState, useEffect } from "react";
import { List } from "../components/List";
import Iframe from "../components/Iframe";

const InstaPosts = () => {
    // These are the post IDs from Instagram
    const InstaPostIds = [
        'CzF-amPJ0N-', 'CzF5G9-pI11', 'CzEIMuBM-oM'
    ];

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const posts = await res.json();
            setPosts(posts);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    const generateInstagramIframe = (postId, index) => (
        <Iframe
            className="h-[600px] sm:h-auto m-4 object-cover rounded-[26px] w-full"
            key={index}
            src={`https://www.instagram.com/p/${postId}/embed`}
            title="Instagram post"
            frameBorder="0"
            datatype="instagram"
        ></Iframe>
    );

    return (
        <div className="bg-blue-500_0a flex flex-1 flex-col items-center justify-end p-[19px] rounded-[30px] w-full">
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div className="overflow-y-auto overflow-x-hidden h-[600px] items-center justify-start mt-[5px] w-[96%] md:w-full">
                    {/* Render Instagram posts if InstaPostIds array is not empty */}
                    {InstaPostIds.length > 0 && InstaPostIds.map((postId, index) => generateInstagramIframe(postId, index))}

                    {/* Render the list of Instagram posts */}
                    <List items={posts} className={"flex flex-col gap-2.5 items-center w-full"} orientation="vertical" />
                </div>
            )}
        </div>
    );
};

export default InstaPosts;