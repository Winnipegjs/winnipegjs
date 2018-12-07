import React from 'react';
import EventItem from '../components/EventItem';

const events = [
  {
    title: 'Seventh Meetup: Creating, Automating and Testing',
    dateTime: '2014-09-22 18:00',
    description: '6:00pm Mon, September 22nd, 2014 @ Canadian Tire Data Centre',
  },
  {
    title:
      'Sixth Meetup: Microsoft &lt;3 Javascript &amp; Introduction to Angular and Breeze',
    dateTime: '2014-06-18 17:30',
    description: '5:30pm Wed, June 18th, 2014 @ SkullSpace',
  },
  {
    title: 'Fifth Meetup: A New Vision',
    dateTime: '2014-05-12 19:00',
    description: '7:00pm Mon, May 12th, 2014 @ Canadian Tire Data Centre',
  },
  {
    title: 'Fourth Meetup: Introduction to CoffeeScript',
    dateTime: '2013-02-20 18:00',
    description: '6:00pm Wed, February 20th, 2013 @ UofM SmartPark - 2nd floor',
  },
  {
    title: 'Third Meetup: Phonegap - Cross Platform Mobile Development',
    dateTime: '2012-11-21 18:00',
    description: '6:00pm Wed, November 21st, 2012 @ UofM SmartPark - 2nd floor',
  },
  {
    title: 'Second Meetup: Test Driven Development',
    dateTime: '2012-10-30 18:00',
    description: '6:00pm Tue, October 30th, 2012 @ UofM SmartPark - 2nd floor',
  },
  {
    title: 'First Meetup: Intro to Node.js',
    dateTime: '2012-09-26 18:00',
    description:
      '6:00pm Wed, September 26th, 2012 @ UofM SmartPark - 2nd floor',
  },
];

const Events = () => {
  return (
    <div id="main" className="events">
      <h1>Events</h1>
      <p>
        If you have any suggestion do not hesitate to contact us at
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
        {events.map((e, i) => (
          <EventItem
            key={i}
            title={e.title}
            description={e.description}
            dateTime={e.dateTime}
          />
        ))}
      </ul>
    </div>
  );
};

export default Events;
