import { Lato } from 'next/font/google';
import './globals.css'

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ["400","700"],
})


export const metadata = {
  title: 'Quicks',
  description: 'Quicks for simpul',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.variable}>{children}</body>
    </html>
  )
}
