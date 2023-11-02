import React, { useState, useEffect } from "react";
import { List } from "../components/List";
import Iframe from "../components/Iframe";

const Posts = () => {

    const videoIDs = [
        'wdlxBhxKCB8', 'ReatjIrst8w', 'kCas1McY4Rc'
    ];

    // These are the post IDs from Instagram
    const InstaPostIds = [
        'CzF-amPJ0N-', 'CzF5G9-pI11', 'CzEIMuBM-oM'
    ];

    const combinedContent = [];

    // Combine video and Instagram post IDs alternatively
    for (let i = 0; i < Math.max(videoIDs.length, InstaPostIds.length); i++) {
        if (i < videoIDs.length) {
            combinedContent.push({ type: "youtube", id: videoIDs[i] });
        }
        if (i < InstaPostIds.length) {
            combinedContent.push({ type: "instagram", id: InstaPostIds[i] });
        }
    }

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [path, setPath] = useState(window.location.pathname);

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
    const generateYouTubeIframe = (videoId, index) => (
        <Iframe
            className="h-[600px] sm:h-auto m-4 object-cover rounded-[26px] w-full"
            key={index}
            src={`https://www.youtube.com/embed/${videoId}?si=O_9l_Xa9S8tUFBc0`}
            title="YouTube video player"
            datatype="youtube"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></Iframe>
    );

    // App.get("/youtube", (req, res) => {
    //     document.querySelectorAll("iframe").forEach((iframe) => {
    //         if (iframe.dataset.type !== "youtube") {
    //             iframe.style.display = "none";
    //         }
    //     }
    // });

    // Function to generate Instagram post iframes
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
                    {/* Map through the combined content array and return iframes */}
                    {combinedContent.map((item, index) => (
                        item.type === "youtube"
                            ? generateYouTubeIframe(item.id, index)
                            : generateInstagramIframe(item.id, index)

                    )
                    )}
                    {/* {
                        (() => {
                            switch (path) {
                                case "/youtube":
                                    combinedContent.map((item, index) => (
                                        item.type === "youtube"
                                            ? generateYouTubeIframe(item.id, index)
                                            : ""

                                    ));
                                    break;
                                case "/instagram":
                                    combinedContent.map((item, index) => (
                                        item.type === "instagram"
                                            ? ""
                                            : generateInstagramIframe(item.id, index)

                                    ));
                                    break;
                                case "":
                                    combinedContent.map((item, index) => (
                                        item.type === "youtube"
                                            ? generateYouTubeIframe(item.id, index)
                                            : generateInstagramIframe(item.id, index)

                                    ));
                                    break;
                            }
                        }).call(this)
                    } */}
                </div>
            )}
        </div>
    );
};

export default Posts;
