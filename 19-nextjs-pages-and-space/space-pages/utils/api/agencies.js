import { BASE_URL } from './base.js'

// we're going to use the search parameter in the url
// to search for a given agency.
const getAgencies = ({search}) => {
  let url = `${BASE_URL}/agencies?featured=true` // no search
  if (search) {
    url = `${BASE_URL}/agencies?search=${search}`
  }

  return fetch(url)
      .then((response)=> {
          return response.json()
      }).then((data)=>{
          return data
      })
}

const getAgency = (id) => {
    return fetch(`${BASE_URL}/agencies/${id}/`)
        .then((response)=> {
            return response.json()
        }).then((data)=>{
            return data
        })
}

export { getAgencies, getAgency }