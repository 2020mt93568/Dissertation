// My Shiny new JS Framework to rule the Runtime, Multi-Page Applications World! 
var framework = {
    // Call the initialize function to get an observable Proxy to the state for the page.
    // Any change to the state variable also rerenders the changes to HTML.
    initialize: function () {
        var _state = {};
        var state = new Proxy(_state, {
            set: function(target, prop, value) {
              Reflect.set(target, prop, value);
              this.update(_state);
            }.bind(this)
          });
        this.update(_state);
        return state;
    },
    update: function(state) {
        this.interpolate(state);
        this.bindIf(state);
        this.dataBind(state);
    },
    // Does String Interpolation b/w JS and HTML Template.
    interpolate: function (state) {
        for (var interpolateElement of document.getElementsByTagName("interpolate")) {
            var content = document.createTextNode(state[interpolateElement.getAttribute("value")] || "");
            if (interpolateElement.hasChildNodes()) {
                interpolateElement.replaceChild(content, interpolateElement.childNodes[0]);
            }
            interpolateElement.appendChild(content);
        }
    },
    // Does conditional render of Nodes in HTML Template dynamically based on the value is JS.
    bindIf: function (state) {
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
    },
    //  Does Data Binding b/w HTML Template and JS.
    dataBind: function (state) {
        for (var dataBindElement of document.querySelectorAll("[data-bind]")) {
            dataBindElement.addEventListener("input", function() {
                state[dataBindElement.getAttribute("data-bind")] = dataBindElement.value;
                this.interpolate(state);
            }.bind(this));
        }
    },
};