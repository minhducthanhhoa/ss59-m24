import React from 'react'
import spinnerImage from './loading.gif';
export default function Loading() {
  return (
    <div>
         <div style={{ textAlign: 'center', padding: '20px' }}>
      <img src={spinnerImage} alt="Loading..." style={{ width: '50px' }} />
    </div>
    </div>
  )
}
