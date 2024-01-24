import React from 'react'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

export default function Master({ children }) {
  return (
    <div>
      <>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </>
    </div>
  )
}
