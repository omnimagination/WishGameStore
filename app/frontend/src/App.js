"import React from \"react\";
import \"./App.css\";
import { BrowserRouter, Routes, Route } from \"react-router-dom\";

// Layout Components
import Navbar from \"./components/layout/Navbar\";
import Footer from \"./components/layout/Footer\";

// Pages
import HomePage from \"./pages/Home/HomePage\";
import StorePage from \"./pages/Store/StorePage\";
import GamePassPage from \"./pages/GamePass/GamePassPage\";
import DealsPage from \"./pages/Deals/DealsPage\";
import HowItWorksPage from \"./pages/HowItWorks/HowItWorksPage\";
import FAQPage from \"./pages/FAQ/FAQPage\";
import AboutPage from \"./pages/About/AboutPage\";
import ContactPage from \"./pages/Contact/ContactPage\";

function App() {
  return (
    <div className=\"App min-h-screen bg-[#0a0a0f]\">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path=\"/\" element={<HomePage />} />
            <Route path=\"/store\" element={<StorePage />} />
            <Route path=\"/gamepass\" element={<GamePassPage />} />
            <Route path=\"/deals\" element={<DealsPage />} />
            <Route path=\"/how-it-works\" element={<HowItWorksPage />} />
            <Route path=\"/faq\" element={<FAQPage />} />
            <Route path=\"/about\" element={<AboutPage />} />
            <Route path=\"/contact\" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
"
