import React from 'react'

const user = {
  name: 'Gosia Gaweł',
  imageUrl: 'https://i.imgur.com/ePiAbEL.jpeg',
  imageSize: 90,
}

function Users() {
  return (
    <>
      <h5>{user.name}</h5>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  )
}

export default Users
