// app/layout.tsx
import './globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Spotless Touch',
  description: 'a web app to show and communicate with Spotless Touch LLC',
}

// You can make this a server component or a client component.
// If you plan to use client-side interactivity in this layout (like toggling mobile menus),
// you can add `use client` at the top. For a simple static layout, it's fine as-is.

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gray-200 p-4">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-xl font-bold">My App</div>
            <ul className="flex space-x-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="max-w-7xl mx-auto py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
