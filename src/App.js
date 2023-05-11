import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Eventlist from "./Components/Eventlist";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/eventlist" element={<Eventlist />} />
          {/* <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/churchlist" element={<ChurchList />} /> */}
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
