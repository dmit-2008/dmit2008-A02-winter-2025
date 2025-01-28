const SIMPSON_CHARACTERS = [
	"Homer Simpson",
	"Bart Simpson",
	"Marge Simpson",
	"Mr. Burns",
	"Lisa Simpson",
	"Apu Nahasapeemapetilon",
	"Sideshow Bob",
	"Milhouse Van Houten",
	"Ned Flanders",
]

// I want you to use map to loop over the characters
// define a key
// if you'd like try to use the style object to change
// the color of the text.

export default function SimpsonsCharacters({color}) {
  if (!color) {
    color = "pink"
  }

  // I can pass in a color to change the color the text
  // style is a prop that takes an object that essentially
  // gives you the ability to change any css
  return <ul style={{
    color: color
  }}>
    {SIMPSON_CHARACTERS.map((character, index)=> {
      // return a list of JSX items
      return <li key={index} className="mb-1">
        {character}
      </li>
    })}
  </ul>
}