import { h, render } from "preact";
import { byeIE } from "./byeie";
/** @jsx h */

byeIE()
let host = "https://data.irozhlas.cz";
if (window.location.hostname === "localhost") {
  host = "http://localhost";
}

function isRed(val) {
  if (val === "") {
    return "red";
  }
};

function onLoad(e) {
  const data = JSON.parse(e.target.response);
  render((
    <div id="anketa">
      {data.map(el => (
        <div className="respondent">
          <img className="portret" src={`${host}/ctk-anketa/img/${el.f}`} alt={el.jm} />
          <div className="bio">
            <div className="jmeno">{`${el.j} ${el.p}`}</div>
            <div className="strana">{el.s}</div>
          </div>
          <div className={`${isRed(el.o1)} odpoved`}>{el.o1 || "bez odpovědi"}</div>
        </div>
      ))}
    </div>
  ), document.getElementById("anketa-wrapper"));
}

let r = new XMLHttpRequest()
r.addEventListener("load", onLoad)
r.open("GET", host + "/ctk-anketa/data/data.json")
r.send()

