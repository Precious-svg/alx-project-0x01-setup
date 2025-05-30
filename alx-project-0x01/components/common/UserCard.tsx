// components/common/UserCard.tsx
import React from 'react'
import { UserProps } from '@/interfaces'

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
      <p className="text-gray-600 mb-1">
        <strong>Username:</strong> {user.username}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Email:</strong> {user.email}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Phone:</strong> {user.phone}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{user.website}</a>
      </p>
      <div className="mt-3 text-sm text-gray-500">
        <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
        <p><strong>Company:</strong> {user.company.name} - "{user.company.catchPhrase}"</p>
      </div>
    </div>
  )
}

export default UserCard
