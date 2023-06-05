import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/homepage";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import Eventlist from "./Components/eventlist";
import Signup from "./Components/signup";
import Signin from "./Components/signin";
import Chruchlist from "./Components/chruchlist";
import Eventpost from "./Components/eventpost";
import Chruchregistration from "./Components/chruchregistration";
import Chruchdetailsmodify from "./Components/chruch_details_modify";
import Resetpassword from "./Components/reset_password";

AOS.init({
  disable: "mobile",
});
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/eventlist" element={<Eventlist />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/chruchlist" element={<Chruchlist />} />
          <Route path="/eventpost" element={<Eventpost />} />
          <Route path="/chruchregistration" element={<Chruchregistration />} />
          <Route
            path="/chruchdetailsmodify"
            element={<Chruchdetailsmodify />}
          />
          <Route path="/resetpassword" element={<Resetpassword />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
