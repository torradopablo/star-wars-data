import React from 'react'
import { Endpoints } from '../config/endpoints.config'

function Test() {
  return (
    <div className='text-white'>{Endpoints.apiUrl}</div>
  )
}

export default Test