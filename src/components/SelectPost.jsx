import React from 'react';
import Posts from './Posts';
import InstaPosts from './InstaPosts';
import YouTubePosts from './YouTubePosts';

function SelectPost() {

    switch (window.location.pathname) {
        case '/instagram':
            return <InstaPosts />;

        case '/youtube':
            return < YouTubePosts />

        default:
            return <Posts />;
    }
}

export default SelectPost;
