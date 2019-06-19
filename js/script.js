import { h, render } from "preact";
import { byeIE } from "./byeie";
/** @jsx h */
byeIE()

let host = "https://data.irozhlas.cz";
if (window.location.hostname === "localhost") {
  host = "http://localhost";
}

function onLoad(e) {
  const data = JSON.parse(e.target.response);
  render((
    <div id="anketa">
      {data.map(el => (
        <div className="respondent">
          <img className="portret" src={`${host}/ctk-anketa/img/${el.f}`} alt={el.jm} />
          <div className="bio">
            <div className="jmeno">{`${el.p}`}</div>
            <div className="strana">{el.s}</div>
          </div>
          <div className="odpoved">{el.o1 || "bez odpovědi"}</div>
        </div>
      ))}
    </div>
  ), document.getElementById("anketa-wrapper"));
}

let r = new XMLHttpRequest()
r.addEventListener("load", onLoad)
r.open("GET", host + "/ctk-anketa/data/data.json")
r.send()

