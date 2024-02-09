import axios from "axios";

const url = '/login'

const login = async (newLogin) => {
  try {
    const response = await axios.post(url, newLogin)
    return response.data
  } catch (error) {
    throw new Error({ error: error.message })
  }
}

export default login