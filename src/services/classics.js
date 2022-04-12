import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_API_URL}/api/classics/`

export const getAll = async () => {
  try {
    const res = await fetch(`${BASE_URL}`)
    return await res.json()
  } catch (error) {
    throw error
  }
}

export const getOne = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}${id}`)
    return await res.json()
  } catch (err) {
    throw err
  }
}

export const create = async (classic) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(classic)
    })
    return await res.json()

  } catch (err) {
    throw err
  }
}

export const update = async (classic) => {
  try {
    const res = await fetch(`${BASE_URL}${classic.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()
          }`
      },
      body: JSON.stringify(classic)
    })
    return await res.json()
  } catch (err) {
    throw err
  }
}

export const deleteOne = async (id) => {

}