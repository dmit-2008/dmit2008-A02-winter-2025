// everything in the pages/api/ folder is backend endpoints.


export default function handler(req, res) {
  // a list of quotes
  const QUOTE_LIST = [
    {
      "author": "Marcus Aurelius",
      "quote": "Whatever happens to you has been waiting to happen since the beginning of time."
    },
    {
      "author": "Seneca",
      "quote": "A gift consists not in what is done or given, but in the intention of the giver or doer."
    },
    {
      "quote": "I am not a demon. I am a lizard, a shark, a heat-seeking panther. I want to be Bob Denver on acid playing the accordion.",
      "author": "The wise nicholas cage"
    },
    {
      "author": "Nassim Nicholas Taleb",
      "quote": "Intelligence consists in ignoring things that are irrelevant."
    },
    {
      "author": "Robert Greene",
      "quote": "Understand: people will constantly attack you in life. One of their main weapons will be to instill in you doubts about yourself. They will often disguise this as their objective opinion, but invariably it has a political purpose – they want to keep you down."
    }
  ]
  // get a random quote from that list

  // return that quote

  // we're returning every request to /api/random_quote
  // with states of 200 and the json of the argument
  res.status(200).json({ name: 'John Doe' })
}
