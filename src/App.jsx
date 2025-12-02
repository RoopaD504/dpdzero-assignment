import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar/Navbar";
import { Footer } from "./components/common/Footer";
import { heroData } from "./components/constants/heroConstants";
import { Hero } from "./components/common/Hero/Hero";
import Destinations from "./pages/Destinations";
import WorkInProgress from "./components/common/Progress/WorkInProgress";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero
                image={heroData.hampi.image}
                title={heroData.hampi.title}
                subtitle={heroData.hampi.subtitle}
              />
              <Destinations />
            </>
          }
        />

        <Route path="/where-to-go" element={<WorkInProgress />} />
        <Route path="/whats-new" element={<WorkInProgress />} />
        <Route path="/business" element={<WorkInProgress />} />
        <Route path="/Login" element={<WorkInProgress />} />


        <Route path="*" element={<WorkInProgress />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
