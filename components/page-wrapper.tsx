'use client'

import { useState, useEffect } from 'react'
import type React from "react"
import { AnimatePresence } from 'framer-motion'
import { Loader } from "@/components/loader"

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500) // Adjust the duration as needed

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>
      <main className={`flex-grow transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </main>
    </>
  )
}
