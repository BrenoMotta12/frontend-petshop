import axios from 'axios'
import React from 'react'

const Api = axios.create({
    baseURL: "http://127.0.0.1:8000/animal/"
})
export default Api

