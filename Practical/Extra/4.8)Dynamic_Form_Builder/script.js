function createForm() {
  let numElements = parseInt(prompt("Enter number of form elements:"));

  if (isNaN(numElements) || numElements <= 0) {
    alert("Please enter a valid number greater than 0.");
    return;
  }

  let formContainer = document.getElementById("formContainer");
  let allTypes = ["text","number","checkbox","button","email","radio","password","date","time","color","datetime-local","file","hidden","image","month","range","reset","search","tel","url","week"];

  for (let i = 1; i <= numElements; i++) {
    let elementType = prompt(
      `Enter type of element for field ${i} (${allTypes.join(" / ")}):`
    ).toLowerCase();

    if (allTypes.includes(elementType)) {
      let element;
      if (elementType === "button") {
        element = createButton();
      } else if (elementType === "checkbox") {
        element = createCheckboxWithSubLabel();
      } else if (elementType === "radio") {
        element = createRadioWithSubLabel();
      } else {
        element = createInput(elementType);
      }

      let label = document.createElement("label");
      label.innerText = `${elementType} :- `;
      label.appendChild(element);

      formContainer.appendChild(label);
      formContainer.appendChild(document.createElement("br"));
    } else {
      alert(
        `Invalid element type "${elementType}" entered. Skipping this field.`
      );
      i--;
    }
  }
}

function createInput(type) {
  let input = document.createElement("input");
  input.setAttribute("type", type);
  return input;
}

function createButton() {
  let button = document.createElement("button");
  button.innerText = "Submit";
  return button;
}

function createInputWithSubLabel(type) {
  let container = document.createElement("div");

  let input = document.createElement("input");
  input.setAttribute("type", type);

  let subLabel = prompt(`Enter sub-label for ${type}:`);
  if (subLabel) {
    let subLabelElement = document.createElement("span");
    subLabelElement.innerText = subLabel;
    container.appendChild(subLabelElement);
  }
  container.appendChild(input);
  
  return container;
}

function createCheckboxWithSubLabel() {
  return createInputWithSubLabel("checkbox");
}

function createRadioWithSubLabel() {
  return createInputWithSubLabel("radio");
}
createForm();