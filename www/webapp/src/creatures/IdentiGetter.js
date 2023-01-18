const IdentiGetter = (state) => {
  let div, input;

  const styles = {
    div: {
      padding: "5px",
      "border-radius": "2px",
      border: "1px solid",
    },
    input: {
      "font-size": "20px",
      "border-radius": "2px",
      border: "1px solid",
      padding: "5px 10px",
      "text-align": "center",
    },
  };

  return {
    create: () => {
      // Create the div element
      div = document.createElement("div");

      // Create the input field
      input = document.createElement("input");

      // Append the input element to the div
      div.appendChild(input);

      // Apply the styles to the div, p and input elements
      Object.keys(styles).forEach((style) => {
        if (style === "div") {
          Object.keys(styles[style]).forEach((prop) => {
            div.style[prop] = styles[style][prop];
          });
        }
        if (style === "input") {
          Object.keys(styles[style]).forEach((prop) => {
            input.style[prop] = styles[style][prop];
          });
        }
      });

      // Listen for changes to the input field's value
      input.addEventListener("input", (e) => {
        // Update the p tag's text
        const tVal = e.target.value;
        state.identity = tVal;
      });

      // Append the div to the body
      document.body.appendChild(div);
    },
  };
};

export default IdentiGetter;
