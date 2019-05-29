// @flow

import React from 'react';
import Headers from "../common/Headers.jsx";
import cdn, {Images} from "../utils/cdn.js";
import url from "../utils/url.js";
import Section from "../enums/Section.js";


//get press links
const pressLinks = JSON.parse(_.unescape(window.PRESS_LINKS))

class PressController extends React.PureComponent<{||}, State> {
  constructor(): void {
    super();
    this.state = {}
  }



  _renderHeader(): React$Node {
    const title: string = "DemocracyLab | Press";
    const description: string = "Read external articles and blog posts describing DemocracyLab's work."

    return (
        <Headers
          title={title}
          description={description}
        />
      );
    }

    _renderTitle(): React$Node {
      return (
        <div className="press-title" style={cdn.bgImage('PressBG.jpg')}>
          <div class="press-bounded-content">
            <h1>Press</h1>
            <p>For press opportunities, please contact hello@democracylab.org</p>
          </div>
        </div>
      )
    }

    _renderStats(): React$Node {
      return (
        <div className="press-stats" style={cdn.bgImage('OurVisionBGoverlay.jpg')}>
          <div class="press-bounded-content">
            <p>Statistics go here</p>
          </div>
       </div>
      )
    }
    _renderNews(): React$Node {
      return (
        <div className="press-in-news">
        <h2>In the news</h2>
        {pressLinks.map((item, i) => {
          return (
            <div className="press-presslink" key={i}>
              <p>{item.date}</p>
              <h4><a href={item.href} alt={item.source + ' - ' + item.title}>{item.title}</a></h4>
            </div>
          )})}
        </div>
      )
    }

   render(): $React$Node {
     return (
       <React.Fragment>
         {this._renderHeader()}
         <div className="container-fluid pl-0 pr-0 press-root">
           {this._renderTitle()}
           {this._renderStats()}
         </div>
         <div className="container pl-0 pr-0 press-root">
           {this._renderNews()}
         </div>
     </React.Fragment>
     )
   }
}

export default PressController;