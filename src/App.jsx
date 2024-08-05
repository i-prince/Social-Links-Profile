import './App.css'

function App() {
  return (
    <div className='body'>
      <div className='profile'>
        <img src='https://lh3.googleusercontent.com/a/ACg8ocJ7k_AIB0TdaDM86rOFHt48wgpHekPuryYqpJEV3BV8_MVtmvMt=s288-c-no' alt='Mola Tonny' className='profile-image'></img>
      </div>
    
      <h2 className='profile-name'>
        Mola Tonny
      </h2>
    
      <h3 className='profile-location'>
        Nairobi, Kenya
      </h3>

      <p className='profile-bio'>
        "Front-end Engineer and ICT Administrator"
      </p>

      <div className='profile-buttons'>
        <a href='https://github.com/i-prince'><button className='button'>Github</button></a>
        <a href='https://www.linkedin.com/in/mola-brother-tonny/'><button className='button'>Linkedin</button></a>
        <a href='https://molatonny.hashnode.dev/'><button className='button'>Hashnode</button></a>
        <a href='https://dev.to/i-prince'><button className='button'>Dev.to</button></a>
        <a href='https://x.com/mola_tonny'><button className='button'>Twitter</button></a>
      </div>

    </div>
  )
}

export default App
