function renderString() {
    let someId = document.getElementById("someId");

    someId.innerHTML = 'Awesome possum';
}

document.addEventListener('DOMContentLoaded', function () {
    renderString();
});