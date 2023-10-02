// import './globals.css'
import type { Metadata } from 'next'
import {PropsWithChildren} from "react";

export const metadata: Metadata = {
  title: 'Test Layout',
  description: 'Generated by create next app',
}

export default function TestLayout({ children }: PropsWithChildren) {
  // Array.from({ length: 12_234 }).forEach(value => console.log(value))

  return (
    <div>
      <h2>TestLayout</h2>
      <main>{children}</main>
    </div>
  )
}

