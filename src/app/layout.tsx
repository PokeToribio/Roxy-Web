'use client';
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import React, { ReactNode } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="es-ES">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <div className="flex flex-col min-h-[100dvh]">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
