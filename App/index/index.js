var state = framework.initialize();

function load() {
    state.name = "Home Page";
    state.isGoodDayShown = false;
}

function changeMyName() {
    state.name = "Anindyo";
}

function changeToPageName() {
    state.name = "Home Page";
}

function showGoodDay() {
    state.isGoodDayShown = true;
}

function hideGoodDay() {
    state.isGoodDayShown = false;
}