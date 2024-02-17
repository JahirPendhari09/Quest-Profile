import React from 'react'

const BadgesCard = ({badgeId,imageUrl,openModal}) => {

  return <img src={imageUrl} alt="Badges-image" onClick={()=> openModal(badgeId)}/>

}

export default BadgesCard
