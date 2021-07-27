import React from 'react'

function Packages(){

return(
  <div id="prices">
      <h2>Packages.</h2>
      <hr/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed. Vulputate enim nulla aliquet porttitor lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed. Vulputate enim nulla aliquet porttitor lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed. Vulputate enim nulla aliquet porttitor lacus.</p>
      <div className="package">
          <ul>
              <li className="name">Basic</li>
              <li>Floorplanning</li>
              <li>10 hours support</li>
              <li>Photography</li>
              <li>20% furniture discount</li>
              <li>Good deals</li>
              <li>
                  <p className="price">7 Euro</p>
                  <p className="time">Per day</p>
              </li>
              <li><button>Sign Up</button></li>
          </ul>
      </div>
      <div className="package pro">
          <ul>
              <li className="name">Pro</li>
              <li>Floorplanning</li>
              <li>10 hours support</li>
              <li>Photography</li>
              <li>20% furniture discount</li>
              <li>Good deals</li>
              <li>
                  <p className="price">15 Euro</p>
                  <p className="time">Per day</p>
              </li>
              <li><button>Sign Up</button></li>
          </ul>
      </div>
  </div>
)

}

export default Packages
