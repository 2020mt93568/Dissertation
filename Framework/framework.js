function interpolate(interpolateObject) {
    for (var interpolateElement of document.getElementsByTagName("interpolate")) {
        var content = document.createTextNode(interpolateObject[interpolateElement.getAttribute("value")]);
        if (interpolateElement.hasChildNodes()) {
            interpolateElement.replaceChild(content, interpolateElement.childNodes[0]);
        }
        interpolateElement.appendChild(content)
    }
}

function bindIf(bindIfObject) {
    for (var bindIfElement of document.getElementsByTagName("bindIf")) {
        var bindIfElementValue = bindIfElement.getAttribute("value");
        var isBindIfElementShown;
        if (bindIfElementValue.charAt(0) == "!") {
            isBindIfElementShown = !bindIfObject[bindIfElementValue.substring(1)];
        } else {
            isBindIfElementShown = bindIfObject[bindIfElementValue]
        }
        if (isBindIfElementShown) {
            bindIfElement.style.display = "initial";
        } else {
            bindIfElement.style.display = "none";
        }
    }
}