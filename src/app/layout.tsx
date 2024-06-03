export const metadata = {
  title: 'Oren Refrigeração',
  description: 'Página com links de redirecionamento!',
}
import { ReactNode } from "react"
import "../styles/globals.css"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </head>
      <body className="bg-zinc-100">{children}</body>
    </html>
  )
}
