import React from 'react';
import LogoWrapper from './LogoWrapper'

const Home = () => {
  return <div id="main" className="index">
    <LogoWrapper />
    <div className="columns">
      <div>
        <h2>Who are we?</h2>
        <p>
          We are a group of passionate Javascript developers practicing our craft in the
					cold, frozen wonders of Winnipeg. We love the web, sharing our knowledge
					with others and learning new things from one another. So don't be shy, stop by one
					of our meetups we would &lt;3 to have you there.
				</p>
      </div>
      <div>
        <h2>What is Javascript?</h2>
        <p>
          Javascript is one of the most popular programming languages in the world. It started
					as a simple way to validate data entered on web forms. It since has grown to be the
					scripting language of choice not just for the web, but for many software platforms
					ranging from pdfs to servers (with Node.js) and even databases (like MongoDB). The expressive
					nature of the language, its simplicity and light weight were a big factor in its popularity.
				</p>
      </div>
      <div>
        <h2>Join us</h2>
        <p>
          Javascript was born as a web language. The web is all about sharing and a strong community.
					We like to build upon that tradition and help one another build better applications.
					Of course, we cannot do that without your help! We need you to come to our meetups,
					present, share, teach and learn.
				</p>
        <div id="mc_embed_signup">
          <form
            id="mc-embedded-subscribe-form"
            action="http://winnipegjs.us6.list-manage.com/subscribe/post?u=d8f30ceb631a0c2f28fff29dd&amp;id=59794fe157"
            method="post"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          // novalidate="novalidate"
          >
            <label htmlFor="mce-EMAIL">Subscribe to our mailing list</label>
            <input id="mce-EMAIL" type="email" value="" name="EMAIL" className="email" placeholder="email address" required="required" onChange={() => { console.log('change') }} />
            <div className="clear">
              <input id="mc-embedded-subscribe" type="submit" value="Subscribe" name="subscribe" className="button" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>;
}

export default Home;