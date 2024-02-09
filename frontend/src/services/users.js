import axios from "axios";
//* Backend 'dist' integration
const baseUrl = "/users"

//? Front 'json-server' development 
//? const baseUrl = "http://localhost:3001/users"

const getUsers = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const register = async (newUser) => {
  //* const response = await axios.post(`${baseUrl}/register`, newUser)
  const response = await axios.post(baseUrl, newUser)
  return response.data
}

export default { getUsers, register }