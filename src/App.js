import logo from "./logo.svg";
import "./App.scss";

import HeroSection from "../src/components/HeroSection";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className='App'>
      <Container>
        <HeroSection />
      </Container>
    </div>
  );
}

export default App;
