import React from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
    return (
        <div>
            <h1>Event</h1>
            <Link to="/forum">Forum</Link>
        </div>
    );
}

export default Events;