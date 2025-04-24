import {BASE_URL} from './base.js'

const login = async ({email, password}) => {
  const response = await fetch(`${BASE_URL}/login/`, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email,
        password
    })
  })

  if (!response.ok) {
      throw new Error("Login creditials not good.")
  }
  const data = await response.json();
  return data
}

export { login }
