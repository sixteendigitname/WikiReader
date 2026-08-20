let nameSpaces = ["Talk:", "Category:", "User:", "Wikipedia:", "Special:", "Help:"]
let nameSpaceTruthVal = nameSpaces.some(matchNameSpace)
let isHomepage = (location.pathname === "/" || location.pathname === "/wiki/Main_Page")

function matchNameSpace(prefix){
  let toBeMatched = location.pathname.slice(6)
  if (toBeMatched.startsWith(prefix)){
    return true}
    else{return false}
}

if (nameSpaceTruthVal === false && isHomepage === false){
let header;
  if (document.title.endsWith(" - Wikipedia")){
    header = document.title.slice(0, -12)
  } else {
  header = document.title;
}

document.addEventListener('mouseup', (event) => {
    let selectedText = window.getSelection().toString();
  if (window.getSelection().toString() != "") {
    addPoint(header, location.href, selectedText, undefined)}
})}



