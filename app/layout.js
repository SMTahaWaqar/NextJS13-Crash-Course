import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'NextJs 13 Course',
  description: 'Web development tutorial',
  keywords: 'web development, programming'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  )
}
