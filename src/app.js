/* eslint-disable */
//import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
domain = () => {
  let pronoun = ["the", "our", "her", "his", "their", "my"];
  let adj = ["great", "big", "hair", "saucy", "black", "purple", "fresh"];

  let noun = [
    "jogger",
    "racoon",
    "dog",
    "peguin",
    "hotdog",
    "hotpocket",
    "ketchup"
  ];
  let siteType = [".org", ".com", ".gov", ".tv"];
  //let generateDomainName = () => {
  for (let i = 0; i < pronoun.length; i++)
    for (let a = 0; a < adj.length; a++)
      for (let b = 0; b < noun.length; b++)
        for (let c = 0; c < siteType.length; c++)
          console.log(pronoun[i] + adj[a] + noun[b] + siteType[c]);
};
//};
console.log(domain());
