import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import { StarBackground } from '../components/StarBackground'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-hidden'>
     {/* Theme Toggle */}
     <ThemeToggle/>
     {/* Background Effects */}
    <StarBackground/>
     {/* NavBar */}

     {/* Main Content */}

     {/* Footer */}

    </div>
  )
}

export default Home
