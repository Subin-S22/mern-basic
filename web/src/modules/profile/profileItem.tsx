import React from 'react'

const ProfileItem: React.FC = () => {
  return (
    <div>
      <div>
        <img width={70} height={100} src="https://cdn.pixabay.com/photo/2022/01/11/19/43/avocado-6931344__340.jpg" />
      </div>
      <div>
        <div>profile name</div>
        <div>profile bio</div>
      </div>
    </div>
  )
}

export default ProfileItem;