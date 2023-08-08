import React, { ReactElement } from "react";
import "./App.css";
import { TTZButton } from "./TTZButton";
import { Link } from "react-router-dom";

export function StarterPage(): ReactElement {
  return (
    <div className="starter-page">
      <header className="App-header">Enchant items in Lineage 2</header>
      <div className="get-started">
        <Link to={"/enchant"}>
          <TTZButton variant="outlined">Get started</TTZButton>
        </Link>
        <Link to={"/info"}>
          <TTZButton variant="outlined">Info</TTZButton>
        </Link>
      </div>
    </div>
  );
}
