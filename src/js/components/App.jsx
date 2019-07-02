import React from "react";
import HomeSection from './HomeSection';
import DigitalMarketing from './DigitalMarketing/DigitalMarketing';
import {Route} from 'react-router-dom';
import SEO from "./DigitalMarketing/SEO/SEO";
import SEM from "./DigitalMarketing/SEM/SEM";
import SocialMedia from './DigitalMarketing/SocialMedia/SocialMedia';
import Website from './Website/Website';

function App() {
  return (
    <div>
      <Route exact path='/' component={HomeSection} />
      <Route exact path='/DigitalMarketing' component={DigitalMarketing} />
      <Route exact path='/SEO' component={SEO} />
      <Route exact path='/SEM' component={SEM} />
      <Route exact path='/SocialMedia' component={SocialMedia} />
      <Route exact path='/Website' component={Website} />
    </div>
  );
}
export default App;
