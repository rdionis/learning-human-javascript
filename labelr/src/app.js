import _ from "lodash";

const component = () => {
    const element = document.createElement("h1");
    
    // Lodash, now imported by this script
    element.innerHTML = _.join(["Hello", "Ampersand by Raquel"], " ");

    return element
}

document.body.appendChild(component())