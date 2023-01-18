function CreateDivWithPTag(identity) {
  let div, p;
  return {
    create: () => {
      // Create a div element
      div = document.createElement("div");
      // Create a p element
      p = document.createElement("p");
      // Append the p element to the div
      div.appendChild(p);
      // Append the div to the body
      document.body.appendChild(div);
    },
    update: () => {
      if (identity) {
        p.textContent = "You are " + identity;
      } else {
        p.textContent = "who are you?";
      }
    },
  };
}

export default CreateDivWithPTag;
