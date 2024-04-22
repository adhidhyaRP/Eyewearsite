import { useState } from 'react'
import './App.css'

function App() {
 const[original,change] =  useState('')

  return (
     <div className='mainbg'>
      <div className='navigationbar'>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <svg className='sun' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg>
    <a class="navbar-brand" href="#"><h2 >Sunny Eye Wear</h2></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">FRAMES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">LENSES</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">PRICING</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">REVIEWS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">LOCATIONS</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div> 
<div className='content'>
 
    
  <img src="https://www.reallusion.com/ContentStore/iClone/pack/Modern_Glasses/images/Main_page_1250x700_mobile.jpg" alt="" />
  <div className='tocenter'>
  <div className='imageinsidemail'>
  <h1>Ready to get started? SIGN UP now</h1> 
  <div> <form action="">
  <input type="email"  required/>
  <button onClick={()=>{change('Form submission sucessful')}}>SIGNUP</button>
  </form>
 
  </div>
  <p>{original}</p>
  </div> 
  </div>
</div>
<div className='writingcontent'><h1>This is the future of <br></br> premium eyewear</h1></div>
<div className='secondcontent'>
  
  <div className='circles'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sunglasses" viewBox="0 0 16 16">
  <path d="M3 5a2 2 0 0 0-2 2v.5H.5a.5.5 0 0 0 0 1H1V9a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3 1 1 0 1 1 2 0 3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-.5h.5a.5.5 0 0 0 0-1H15V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-1.888 1.338A2 2 0 0 0 8 6a2 2 0 0 0-1.112.338A2 2 0 0 0 5 5zm0 1h.941c.264 0 .348.356.112.474l-.457.228a2 2 0 0 0-.894.894l-.228.457C2.356 8.289 2 8.205 2 7.94V7a1 1 0 0 1 1-1"/>
</svg><h3 style={{textAlign:'center'}}>Made from scratch</h3>
<p style={{textAlign:'center'}}>Each pair is crafted for one person at a time from the highest quality and metal</p>

</div>
  <div className='circles'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> <h3 style={{textAlign:'center'}}> Perfect ,guaranteed</h3>
<p style={{textAlign:'center'}}>We guarantee your sunny lenses glasses will fit perfectly look great</p>
</div>
  <div className='circles'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-rulers" viewBox="0 0 16 16">
  <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1z"/>
</svg><h3 style={{textAlign:'center'}}>Designed for you</h3>
<p style={{textAlign:'center'}}>Select your style ,choose your color,fine-tune the shape and preview it with our vitrual</p>
 </div>
  <div className='circles'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-arms-up" viewBox="0 0 16 16">
  <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
  <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/>
</svg><h3 style={{textAlign:'center'}}>Measured for you </h3>
<p style={{textAlign:'center'}}>Use our IOS app to scan your face and capture over 20,000 3D measurements</p>
 
 </div>

</div>
<div className='fiveimages'>
    <img className='img1' src="https://th.bing.com/th/id/OIP.UU0_2ZQtPaRMW9Y1zj8u5gHaLH?w=123&h=184&c=7&r=0&o=5&pid=1.7" alt="" />
<img className='img2'src="https://th.bing.com/th/id/OIP.sT4KAYaEuHtHoMMcu8PwQAHaKp?w=142&h=204&c=7&r=0&o=5&pid=1.7" alt="" />
<img className='img3' src="https://th.bing.com/th/id/OIP.q62q4ZYJtCjNzhCElTyoQQHaLH?w=115&h=194&c=7&r=0&o=5&pid=1.7" alt="" />
<img className='img4'src="https://th.bing.com/th/id/OIP.FDuZP8plLkTi72VM_Ub4lwHaJ3?w=131&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
<img className='img5'src="https://th.bing.com/th/id/OIP.hjgJ5Co-JhrNnxV88OLouQHaIa?w=143&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
</div>
    </div>
  )
}

export default App

