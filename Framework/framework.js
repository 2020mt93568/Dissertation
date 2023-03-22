function interpolate(state) {
    for (var interpolateElement of document.getElementsByTagName("interpolate")) {
        var content = document.createTextNode(state[interpolateElement.getAttribute("value")] || "");
        if (interpolateElement.hasChildNodes()) {
            interpolateElement.replaceChild(content, interpolateElement.childNodes[0]);
        }
        interpolateElement.appendChild(content);
    }
}

function bindIf(state) {
    for (var bindIfElement of document.getElementsByTagName("bindIf")) {

        var bindIfElementValue = bindIfElement.getAttribute("value");
        var isBindIfElementShown;

        if (bindIfElementValue.charAt(0) == "!") {
            isBindIfElementShown = !state[bindIfElementValue.substring(1)];
        } else {
            isBindIfElementShown = state[bindIfElementValue];
        }

        if (isBindIfElementShown) {
            bindIfElement.style.display = "initial";
        } else {
            bindIfElement.style.display = "none";
        }
    }
}

function dataBind(state) {
    for(var dataBindElement of document.querySelectorAll("[data-bind]")) {
        dataBindElement.addEventListener("input", () => {
            state[dataBindElement.getAttribute("data-bind")] = dataBindElement.value;
            interpolate(state);
        });
    }
}

var framework = {
    interpolate: interpolate,
    bindIf: bindIf,
    dataBind: dataBind
};