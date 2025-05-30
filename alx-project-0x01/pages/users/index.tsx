// pages/users/index.tsx
import { useState } from 'react'
import { GetStaticProps } from 'next'
import UserCard from '@/components/common/UserCard'
import UserModal from '@/components/common/UserModal'
import { UserProps, UserData } from '@/interfaces'

interface UsersPageProps {
  posts: UserProps[]
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [users, setUsers] = useState<UserData[]>(posts)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddUser = (newUser: UserData) => {
    setUsers(prev => [...prev, newUser])
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Users</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add User
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddUser={handleAddUser}
      />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const posts = await response.json()

  return {
    props: {
      posts,
    },
  }
}

export default Users
