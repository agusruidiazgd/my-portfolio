import React from 'react'
import Header from './Header'
import mixpanel from 'mixpanel-browser'
import Main from './Main'

const Home = () => {
  mixpanel.track('Sign Up', {
    source: "Pat's affiliate site",
    'Opted out of email': true,
  });

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default Home