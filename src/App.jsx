import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Searchinventory from "./Pages/Inventory/Searchinventory";
import Contact from "./Pages/Contact/Contact";
import Careers from "./Pages/Careers/Careers";
import JobsList from "./Pages/Careers/JobsList ";
import JobDetails from "./Pages/Careers/JobDetails";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Searchinventory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/jobslist" element={<JobsList />} />
        <Route path="/jobsdetail/:id" element={<JobDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
