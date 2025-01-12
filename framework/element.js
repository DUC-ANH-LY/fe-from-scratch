
// const nestedFunction = a => (b,c) => a + b + c;

// console.log(nestedFunction(1)(2,3)); // 6

// const nestedFunction = a => (string,...args) => [...string, ...args]

// console.log(nestedFunction(1)`test ${1+2} ${1 == '1' ? 'yes' : 'no'}`); // [ 'test ', ' ', '', 3, 'yes' ]


const createElement = tagName => (strings, ...args) => ({
    type: tagName, // this will be useful for the next chapter
    template: strings.reduce(
      (acc, currentString, index) => acc + currentString + (args[index] || ""),
      ""
    )
  });
  
  const div = createElement("div");
  const p = createElement("p");

  console.log(p);
  
  
  const firstName = "Marvin";
  const lastName = "Frachet";
  
//   const template = div`Hello ${firstName} ${lastName} !`;
  const { template } = p`Hello ${firstName} ${lastName} !`;
  console.log(template);