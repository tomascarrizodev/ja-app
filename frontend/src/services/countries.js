import axios from 'axios'

const apiKey = import.meta.env.VITE_COUNTRY_KEY
const url = import.meta.env.VITE_COUNTRY_URL

const config = {
  method: 'GET',
  url,
  headers: {
    'X-CSCAPI-KEY': apiKey
  }
}

const getCountries = async () => {
  const response = await axios(config)
  return response.data
}

const getStates = async (iso2) => {
  const response = await axios({ ...config, url: `${url}/${iso2}/states` })
  return response.data
}

const getCities = async (country, state) => {
  const response = await axios({  ...config, url: `${url}/${country}/states/${state}/cities` })
  return response.data
}

export default { getCountries, getStates, getCities }