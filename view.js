let panel = document.createElement("div");
function renderpanel() {
  getTrail(function(trail) {
    panel.innerHTML = ""
    for (let entry of trail) {
    let link = document.createElement("a");   
    link.href = entry.url;                     
    link.textContent = entry.title; 
    let deleteHeader = document.createElement("button")
    deleteHeader.textContent = "×"
    panel.appendChild(link)
    panel.appendChild(deleteHeader)
    deleteHeader.addEventListener('click', function() {
    removeHeader(entry.title, undefined)})
    let list = document.createElement("ul")
    for (let x of entry.points) {
      let point = document.createElement("li")
      let deletepoint = document.createElement("button")
      deletepoint.textContent = "×"
      point.textContent = x
      point.appendChild(deletepoint)      
      deletepoint.addEventListener('click', function() {
      removePoint(entry.title, x, undefined)
})
      list.appendChild(point)
    }
    panel.appendChild(list)
    }
  panel.scrollTo({ top: panel.scrollHeight, behavior: 'smooth' });
})}


if (nameSpaceTruthVal === false && isHomepage === false){
  document.body.appendChild(panel)
  renderpanel()
  chrome.storage.onChanged.addListener(function(changes, area) {
  if (changes.wikiTrail) {
    renderpanel()}
})
}

panel.id = "wikireader-panel"