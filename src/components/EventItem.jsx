import React from 'react';

const EventItem = ({ event }) => {
  return (
    <li>
      <h1>{event.name}</h1>
      <h2>{`${event.venue.name} - ${event.local_date}/${event.local_time}`}</h2>
      {event.link && <a href={event.link}>See event on meetup.com</a>}
    </li>
  );
};

export default EventItem;
