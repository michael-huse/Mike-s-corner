import './App.css'
import Header from './header/Header'

function App() {
  return (
    <>
      <div className="container">

       <Header/>


       <div class="menu-container">
      <ul class="menu" id="menuItems">
        <li><a href="favoritter.html">Favorites</a></li>
        <li><a href="prosjekter.html">Projects</a></li>
        <li><a href="journal.html">Journal</a></li>
        <li><a href="lillemann.html">Lillemann</a></li>
        <li><a href="fotoalbum.html">Fotoalbum</a></li>
      </ul>
      <div id="root"></div>
    </div>
  </div>
  <img src="/images/countryroad.jpeg" alt="Stay hungry, stay foolish - Whole Earth catalogue epilog" />

  <p class="me">@MichaelHuse</p>

  <ul><a href="https://www.youtube.com/watch?v=8arORYpDsIo" title="Here comes the boom">-Klikk her</a></ul>

  <button type="button">Join newsletter</button>

  <div class="grey">
    <h2>html</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>

  <h3 id="section-css">CSS</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <a href="#">Jump to top</a>

  
    </>
  )
}

export default App
