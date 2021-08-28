import React from "react";
import RightSideBar from "./components/right-sidebar/right-sidebar.component";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="sidebar-wrapper">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
}

export default App;
