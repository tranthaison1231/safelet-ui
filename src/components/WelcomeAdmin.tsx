import React from 'react'

export default function WelcomeAdmin() {
  const data = {
    email: 'Mindev@gmail.com',
    name: 'MinDev',
    national: 'Vietnam'
  }
  return (
    <div className="pb-8 border-b border-red-300">
      <h2 className="mb-4 text-2xl font-medium">Hey, Admin</h2>
      <div className="flex items-center justify-between p-5 rounded-md bg-gradient-to-r from-red-300 from-30% to-white border border-red-300 ">
        <p className="text-xl text-red-700">Latest Registration Users</p>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Just now:</span>
            <span className="font-bold">{data.name}</span>
          </div>
          <span className="font-bold">{data.email}</span>
          <div className="flex items-center gap-2">
            <span className="text-red-600">From:</span>
            <span className="font-bold">{data.national}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
