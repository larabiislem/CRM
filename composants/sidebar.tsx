// components/Sidebar.jsx
'use client'

import Link from "next/link"
import { Home, Users, Settings } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gradient-to-b from-blue-800 to-indigo-900 text-white p-6 fixed">
      <h2 className="text-2xl font-bold mb-8">Mon CRM</h2>
      <nav className="space-y-4">
        <Link href="/" className="flex items-center gap-3 hover:text-gray-300">
          <Home className="h-5 w-5" />
          Accueil
        </Link>
        <Link href="/dashboard" className="flex items-center gap-3 hover:text-gray-300">
          <Users className="h-5 w-5" />
          Tableau de bord
        </Link>
        <Link href="/settings" className="flex items-center gap-3 hover:text-gray-300">
          <Settings className="h-5 w-5" />
          Paramètres
        </Link>
      </nav>
    </div>
  )
}
