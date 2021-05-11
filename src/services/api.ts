import axios from 'axios'

export const centralAPI = axios.create({
  baseURL: 'http://localhost:8000'
})

export const api = axios.create({
  baseURL: 'http://localhost:8000'
})
