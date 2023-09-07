import React from 'react'

const ReviewProfile = ({icon,name,}) => {
  return (
    <div className="review-profile">
    <div className="review-image ms-3">
       <img src={icon} alt="icon"  />
     </div>
     <h6>{name}</h6>
    </div>
  )
}

export default ReviewProfile
