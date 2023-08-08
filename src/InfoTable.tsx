import React, { ReactElement } from "react";
import "./App.css";
import wphys from "./img/wphys.jpg";
import wmagi from "./img/wmagi.jpg";
import armnorm from "./img/armnorm.jpg";
import armfull from "./img/armfull.jpg";
import { TTZButton } from "./TTZButton";
import { Link } from "react-router-dom";

export function InfoTable(): ReactElement {
  return (
    <div className="info-page">
      <header className="App-header">Enchant rates on L2ES Valakas</header>
      <article className="info-article">
        <div className="rates">
          <div className="flex-column rates-listed">
            Weapon physical <img alt="rates physical" src={wphys} />
          </div>
          <div className="flex-column rates-listed">
            Weapon magical <img alt="rates magical" src={wmagi} />
          </div>
          <div className="flex-column rates-listed">
            Armor, accessory <img alt="rates armor" src={armnorm} />
          </div>
          <div className="flex-column rates-listed">
            Full body armor
            <img alt="rates fullbody" src={armfull} />
          </div>
        </div>

        <Link to="/">
          <TTZButton variant="outlined">Go back</TTZButton>
        </Link>
      </article>
    </div>
  );
}
