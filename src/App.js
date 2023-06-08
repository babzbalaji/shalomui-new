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
import Userinfo from "./Components/user_info";
import Allchruchlist from "./Components/all_chruch_list";
import UserProfileBanner from "./Components/user_profile_banner";
import Chruchregistration_2 from "./Components/chruchregistration_2";

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
            path="/chruchregistration_2"
            element={<Chruchregistration_2 />}
          />
          <Route
            path="/chruchdetailsmodify"
            element={<Chruchdetailsmodify />}
          />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/userinfo" element={<Userinfo />} />
          <Route path="/allchruchlist" element={<Allchruchlist />} />
          <Route path="/userprofilebanner" element={<UserProfileBanner />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
