import './globals.css'
import type { Metadata } from 'next'
import {PropsWithChildren} from "react";

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <h2>root layout</h2>
        <div>{children}</div>
      </body>
    </html>
  )
}
