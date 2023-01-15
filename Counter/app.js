function Counter(element, value) {
    console.log(element, value);
}

const firtsCounter = new Counter(getElement(".first-counter"), 1);
const secondCounter = new Counter(getElement(".second-counter"), 20);

function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    }
    throw new Error(
        `Please check "${selection}" selector, no such element exists`
    );
}