// I want you folks to create a components
// called conceptlist that takes children as prop
// that wrap the children in an ol like in the index
// export default
// use this component in the index.js
export default function ConceptList({children}) {
  // we're just wrapping all of the children in an ordered list.
  return <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    {children}
  </ol>
}


// Once done I want you to create a concept item component
// is just a list item that takes a single called idea.