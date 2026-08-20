function getTrail(callback) {
    chrome.storage.local.get({wikiTrail: []}, function(data) {callback(data.wikiTrail)})
}

function addPoint(title, url, text, callback) {
    getTrail(function(trail) {
        let currentHeader = trail.findIndex(findHeader)
        if (currentHeader === -1) {
            trail.push({title: title, url: url, points: [text]})
        }
        else {
            trail.push(trail[currentHeader])
            trail.splice(currentHeader, 1)
            trail[trail.length - 1].points.push(text) }
        chrome.storage.local.set({wikiTrail: trail}, function () {if (callback) {callback(trail)}})
        function findHeader(value, index, array) {
            if (value.title === title){
                return true
            }
            else {
                return false}
        
        }
    }
)}

function removePoint(title, pointText, callback) {
    getTrail(function(trail) {
        let currentHeader = trail.findIndex(findHeader)
        let index = trail[currentHeader].points.indexOf(pointText)
        trail[currentHeader].points.splice(index,1)
        if (trail[currentHeader].points.length === 0){
            trail.splice(currentHeader, 1)
        }
        function findHeader(value, index, array) {
            if (value.title === title) {
                return true
            } else {
                return false
            }
        }
        chrome.storage.local.set({wikiTrail: trail}, function() { if (callback) callback(trail) })
    })
}


function addHeader(title, url, callback) {
    getTrail(function(trail){
            let currentHeader = trail.findIndex(findHeader)
            if (currentHeader === -1) {
                trail.push({title: title, points: [], url: url})
            }
            else {
                trail.push(trail[currentHeader])
                trail.splice(currentHeader, 1)
            }
            chrome.storage.local.set({wikiTrail: trail}, function () {if (callback) {callback(trail)}})
            function findHeader(value, index, array) {
            if (value.title === title){
                return true
            }
            else {
                return false}
        }
    })
}

function removeHeader(title, callback){
    getTrail(function(trail){
        let currentHeader = trail.findIndex(findHeader)
        function findHeader (value, index, array) {
            if (value.title === title){
                return true
            }
            else {
                return false
            }
        }
        trail.splice(currentHeader, 1)
        chrome.storage.local.set({wikiTrail: trail}, function() { if (callback) callback(trail) })
    })
}
