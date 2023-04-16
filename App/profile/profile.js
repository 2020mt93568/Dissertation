var state = framework.initialize();

function load() {
    state.name = "Profile Page";
    state.isGoodDayShown = false;
}

function changeMyName() {
    state.name = "Anindyo";
}

function showGoodDay() {
    state.isGoodDayShown = true;
}

function hideGoodDay() {
    state.isGoodDayShown = false;
}