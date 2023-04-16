var state = framework.initialize();

function load() {
    state.isDebugShown = false;
    state.message = "";
}

function login() {
    if(state.username == "username" && state.password == "password") {
        state.message = "Login successful!";
    } else {
        state.message = "Login failed! Please check username and password!";
    }
}

function showDebug() {
    state.isDebugShown = true;
}

function hideDebug() {
    state.isDebugShown = false;
}