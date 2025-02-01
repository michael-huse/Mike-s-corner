import "./App.css";
import Header from "./header/Header";
import parkDudes from "./assets/parkDudes.jpg";
import Card from "./Card";
import ProfileCard from "./ProfileCard";
import { useState } from "react";

function App() {
  const liElements = [
    { text: "Favorites", href: "favoritter.html" },
    { text: "Projects", href: "prosjekter.html" },
    { text: "Journal", href: "journal.html" },
    { text: "Lillemann", href: "lillemann.html" },
    { text: "Fotoalbum", href: "fotoalbum.html" },
  ];

  const [activeContent, setActiveContent] = useState("Favorites");
 

  return (
    <>
      <div className="container">
        <Header />

        <div class="menu-container">
          <ul className="menu">
            {liElements.map((item, i) => {
              return (
                <Card
                  key={i}
                  text={item.text}
                  link={item.href}
                  activeContent={activeContent}
                  setActiveContent={setActiveContent}
                />
              );
            })}
          </ul>

          <div className="content">
            <h1>{activeContent}</h1>
            <p>Click on a menu item to view the content</p>
          </div>

          <ProfileCard
            image={parkDudes}
            username="@MichaelHuse"
            link="https://www.youtube.com/watch?v=8arORYpDsIo"
          />
        </div>
      </div>
    </>
  );
}

export default App;
