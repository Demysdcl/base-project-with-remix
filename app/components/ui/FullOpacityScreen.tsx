import React from 'react'

interface FullOpacityScreenProps {
  children: React.ReactNode
}

const FullOpacityScreen: React.FC<FullOpacityScreenProps> = ({ children }) => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
      {children}
    </div>
  )
}

export default FullOpacityScreen
