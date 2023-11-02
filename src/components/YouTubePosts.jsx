import React, { useState, useEffect } from "react";
import { List } from "../components/List";
import Iframe from "../components/Iframe";

const YouTubePosts = () => {
    const videoIDs = [
        'wdlxBhxKCB8', 'ReatjIrst8w', 'kCas1McY4Rc'
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

    // Function to generate YouTube video iframes
    const generateYouTubeIframes = () => {
        return videoIDs.map((videoId, index) => (
            <iframe
                className="h-[600px] sm:h-auto m-4 object-cover rounded-[26px] w-full"
                key={index}
                src={`https://www.youtube.com/embed/${videoId}?si=O_9l_Xa9S8tUFBc0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        ));
    };


    return (
        <div className="bg-blue-500_0a flex flex-1 flex-col items-center justify-end p-[19px] rounded-[30px] w-full" >
            {
                loading ? (
                    <h1> Loading...</h1 >
                ) : (
                    <div className="overflow-y-auto overflow-x-hidden h-[600px] items-center justify-start mt-[5px] w-[96%] md:w-full">

                        {/* Render YouTube videos if videoIDs array is not empty */}
                        {videoIDs.length > 0 && generateYouTubeIframes()}

                        {/* Render the list of posts */}
                        <List items={posts} className={"flex flex-col gap-2.5 items-center w-full"} orientation="vertical" />

                    </div>


                )}
        </div >
    );
};

export default YouTubePosts;