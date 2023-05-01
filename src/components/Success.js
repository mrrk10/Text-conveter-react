import React from 'react'

const Success = ({alert}) => {
  return (
    <>
    {alert &&
    
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{alert}</strong>
    </div>}
      </>
  
  )
}

export default Success
