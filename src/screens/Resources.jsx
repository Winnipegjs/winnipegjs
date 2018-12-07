import React from 'react';

const Resources = () => {
  return (
    <div id="main" className="resources">
      <h1>Resources</h1>

      <h2 className="section js">JavaScript</h2>

      <h2>Books</h2>
      <ul className="books">
        <li>
          <a href="http://www.amazon.ca/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742">
            <img src="/images/goodparts.gif" alt="JS good parts" />
          </a>
          <h3>
            <a href="http://www.amazon.ca/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742">
              JavaScript: The Good Parts
            </a>
          </h3>
          <span>
            This great JavaScript book written by Douglas Crockford himself is a
            must read for every JavaScript Programmer.
          </span>
        </li>
      </ul>

      <h2>Articles</h2>
      <ul className="articles">
        <li>Nothing, yet.</li>
      </ul>

      <h2>Videos</h2>
      <ul className="videos">
        <li>
          "JavaScript: The Good Parts"
          <ul>
            <li>
              <a href="http://www.livestream.com/etsy/video?clipId=pla_1463e546-47ed-4a93-b59a-bd52b236e8b8">
                http://www.livestream.com/etsy/video?clipId=pla_1463e546-47ed-4a93-b59a-bd52b236e8b8
              </a>
            </li>
            <li>
              <a href="http://www.youtube.com/watch?v=hQVTIJBZook">
                http://www.youtube.com/watch?v=hQVTIJBZook
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <h2>Other Links</h2>
      <ul className="otherlinks">
        <li>
          <a href="http://javascript.crockford.com/">
            Douglas Crockford - JavaScript
          </a>
        </li>
      </ul>

      <h2 className="section node">Node.js</h2>

      <h2>Books</h2>
      <ul className="books">
        <li>Nothing, yet.</li>
      </ul>

      <h2>Articles</h2>
      <ul className="articles">
        <li>Nothing, yet.</li>
      </ul>

      <h2>Videos</h2>
      <ul className="videos">
        <li>Nothing, yet.</li>
      </ul>

      <h2>Other Links</h2>
      <ul className="otherlinks">
        <li>
          <a href="http://nodejs.org/api/index.html">Documentation</a>
        </li>
      </ul>
    </div>
  );
};

export default Resources;
