import React from 'react'
import { SplitText, ScrollTrigger, gsap } from 'gsap/all'

gsap.registerPlugin(SplitText, ScrollTrigger);

const App = () => {
  return (
    <div className='h-screen flex-center'>
      <p className=''>Hello</p>
    </div>
  )
}

export default App