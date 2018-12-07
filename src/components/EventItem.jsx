import React from 'react';

const EventItem = ({ title, dateTime, description }) => {
  return (
    <li>
      <h2>{title}</h2>
      <time dateTime={dateTime}>{description}</time>
    </li>
  );
};

export default EventItem;
