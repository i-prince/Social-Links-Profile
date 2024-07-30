import './App.css'

function App() {
  return (
    <div className='body'>
      <div className='profile'>
        <img src='public/avatar-jessica.jpeg' alt='Jessica Randal' className='profile-image'></img>
      </div>
    
      <h2 className='profile-name'>
        Jessica Randal
      </h2>
    
      <h3 className='profile-location'>
        London, United Kingdom
      </h3>

      <p className='profile-bio'>
        "Front-end developer and avid reader"
      </p>

      <div className='profile-buttons'>
        <button className='button'>Github</button>
        <button className='button'>Frontend Mentor</button>
        <button className='button'>Linkedin</button>
        <button className='button'>Twitter</button>
        <button className='button'>Instagram</button>
      </div>

    </div>
  )
}

export default App
