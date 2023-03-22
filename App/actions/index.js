var state = {
};

function load() {
    state.name = "Home Page";
    framework.interpolate(state);
    hideGoodDay();
    framework.dataBind(state);
}

function changeMyName() {
    state.name = "Anindyo";
    framework.interpolate(state);
}

function showGoodDay() {
    state.isGoodDayShown = true;
    framework.bindIf(state);
}

function hideGoodDay() {
    state.isGoodDayShown = false;
    framework.bindIf(state);
}