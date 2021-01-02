import React from 'react';
import Card from 'react-bootstrap/Card'

// PostCard should take a "loggedIn" boolean state as a prop or from the redux store and render certain features as enabled or disabled thusly. 
// PostCard should take a single "Post" with the post itself, which should contain: user-who-posted's username, link to their profile page (?), 

function PostCard () {
    return (
        <Card> 
            Hello from the PostCard
        </Card>
    )
}

export default PostCard;