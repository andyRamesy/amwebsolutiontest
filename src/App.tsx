import { useState } from "react";
import "./App.css";
import Layout from "./layout/Layout";
import SideBar from "./components/SideBar/SideBar";
import Main from "./components/Main/Main";

function App() {
  return (
    <Layout>
      <SideBar />
      <Main />
    </Layout>
  );
}

export default App;
