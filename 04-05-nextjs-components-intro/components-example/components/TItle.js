// I want you to create a component
// called Title that takes a single prop
// using obj destructuring called text
// I want use default export and import in pages/index.js
export default function Title({text}) {
  // note this should wrap the text in an h1 in the jsx.
  return <h1>{text}</h1>
}