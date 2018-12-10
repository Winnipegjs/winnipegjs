import React from 'react';
import EventItem from '../components/EventItem';
import events from './event_list.json';

const Events = () => {
  return (
    <div id="main" className="events">
      <h1>Events</h1>
      <p>
        If you have any suggestion do not hesitate to contact us at{' '}
        <a
          target="_blank"
          href="http://twitter.com/winnipegjs"
          rel="noopener noreferrer"
        >
          @winnipegjs
        </a>{' '}
        or by email <a href="mailto:us@winnipegjs.org">us@winnipegjs.org</a>.
      </p>

      <ul className="events-list">
        {events.reverse().map((event, i) => (
          <EventItem key={i} event={event} />
        ))}
      </ul>
    </div>
  );
};

export default Events;
