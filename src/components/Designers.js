import React from 'react'
import team1 from './images/team1.jpg'
import team2 from './images/team2.jpg'
import team3 from './images/team3.jpg'

function Designers(){

return(
  <div id="designers">
      <h2>Designers.</h2>
      <hr/>
      <p>The best team in the world.</p>
      <p>
          We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p><b>Our designers are thoughtfully chosen</b>:</p>
      <div id="designers">
          <div className="member">
              <img src={team2} alt="John"/>
              <div className="description">
                  <h3>John Doe</h3>
                  <p className="position">CEO & Founder</p>
                  <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
              </div>
          </div>
          <div className="member">
              <img src={team1}/>
              <div className="description">
                  <h3>Jane Doe</h3>
                  <p className="position">Designer</p>
                  <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
              </div>
          </div>
          <div className="member">
              <img src={team3}/>
              <div className="description">
                  <h3>Mike Ross</h3>
                  <p className="position">Architect</p>
                  <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
              </div>
          </div>
      </div>
  </div>
)

}

export default Designers
