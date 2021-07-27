import React from 'react'

function Contact(){

return(
  <div id="contact">
      <h3>Contact.</h3>
      <hr/>
      <p>Do you want us to style your home? Fill out the form and fill me in with the details :) We love meeting new people!</p>
      <form>
          <p>
              <label for="name">Name</label><br/>
              <input id="name" type="text"/>
          </p>
          <p>
              <label for="email">eMail</label><br/>
              <input id="email" type="email"/>
          </p>
          <p>
              <label for="message">Message</label><br/>
              <input id="Message" type="text"/>
          </p>
          <button>Send Message</button>
      </form>
  </div>
)

}

export default Contact
