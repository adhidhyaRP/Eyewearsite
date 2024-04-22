// HeroSection.js
import React, { useState } from 'react';

function HeroSection() {
  const [original, change] = useState('');

  return (
    <div className='content'>
      <img src="https://www.reallusion.com/ContentStore/iClone/pack/Modern_Glasses/images/Main_page_1250x700_mobile.jpg" alt="" />
      <div className='tocenter'>
        <div className='imageinsidemail'>
          <h1>Ready to get started? SIGN UP now</h1>
          <div>
            <form action="">
              <input type="email" required />
              <button onClick={() => { change('Form submission successful') }}>SIGNUP</button>
            </form>
          </div>
          <p>{original}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
