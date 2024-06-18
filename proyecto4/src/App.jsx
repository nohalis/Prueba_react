import React, { useState } from "react";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import MiApi from "./assets/components/MiApi";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <Header query={query} setQuery={setQuery} />
      <main style={{ padding: "20px", minHeight: "80vh" }}>
        <MiApi query={query} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
