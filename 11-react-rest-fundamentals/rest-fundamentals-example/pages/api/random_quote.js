// everything in the pages/api/ folder is backend endpoints.


export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
