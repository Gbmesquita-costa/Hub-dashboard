import React from "react"

import { BrowserRouter as Router } from "react-router-dom"
import { Context } from "./context/hook"

import MainRoutes from "./routes/routes";

function App() {
  console.log("Olรก ๐, seja bem vindo(a) ao meu projeto amigo(a) desenvolvedor(a) ๐")

  return (
    <Router>
        <Context>
          <MainRoutes/>
        </Context>
    </Router>
  );
}

export default App;
