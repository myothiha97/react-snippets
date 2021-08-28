import React from "react";
import RightSideBar from "./components/right-sidebar/right-sidebar.component";
import "./App.scss";
import WorkGrid from "./sections/workGrid/workGrid.component";

function App() {
  return (
    <div className="App">
      {/* <div className="sidebar-wrapper">
        <RightSideBar></RightSideBar>
       
      </div> */}
      <WorkGrid></WorkGrid>
    </div>
  );
}

export default App;
