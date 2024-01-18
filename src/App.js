import logo from "./logo.svg";
import "./App.scss";

import HeroSection from "../src/components/HeroSection";
import Header from "./components/Header";
import MenuOverlay from "./components/MenuOverlay";
import { useState } from "react";
import { Container } from "react-bootstrap";

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className='App'>
      <Container>
        <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <HeroSection />
      </Container>
    </div>
  );
}

export default App;
