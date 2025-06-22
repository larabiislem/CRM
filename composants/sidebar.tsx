'use client'

import Link from "next/link"
import { LayoutDashboard, Users, UserPlus, Building2 } from "lucide-react"
import { usePathname } from "next/navigation"

type SidebarLinkProps = {
  href: string
  icon: React.ReactNode
  label: string
  currentPath: string
}

export default function Sidebar() {
  const currentPath = usePathname()
// avoir le chemain courant pour appliquer les styles actifs
  return (
    <div className="h-screen w-72 bg-gradient-to-b from-gray-900 to-gray-800 border-r border-gray-700 p-6 fixed shadow-2xl flex flex-col">
      
    <div className="flex flex-col items-center mb-10 group">
      <Building2 className="h-16 w-16 mb-4 text-purple-400 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110" />
        <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-500">
          Mon CRM
        </h2>
        <div className="mt-2 h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:w-24 transition-all duration-300" />
      </div>

      <nav className="flex-1 space-y-3 overflow-y-auto">
        <SidebarLink 
          href="/dashboard" 
          icon={<LayoutDashboard className="h-5 w-5" />} 
          label="Dashboard" 
          currentPath={currentPath} 
        />
        <SidebarLink 
          href="/clients" 
          icon={<Users className="h-5 w-5" />} 
          label="Clients" 
          currentPath={currentPath} 
        />
        <SidebarLink 
          href="/clients/new" 
          icon={<UserPlus className="h-5 w-5" />} 
          label="Ajouter un client" 
          currentPath={currentPath} 
        />
      </nav>

      <div className="mt-auto pt-6 border-t border-gray-700">
        <div className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer">
          © {new Date().getFullYear()} Mon CRM
        </div>
      </div>
    </div>
  )
}

function SidebarLink({ href, icon, label, currentPath }: SidebarLinkProps) {
  // pour apliquer les stiles de la page active
  // on compare le chemin actuel avec le href du lien
  // si ils sont égaux, on applique les styles actifs
  const isActive = currentPath === href

  return (
    <Link
      href={href}
      className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 border-l-4 border-purple-400 shadow-lg'
          : 'hover:bg-gray-800/50 hover:pl-6'
      }`}
    >
      <div className={`p-2 rounded-lg ${
        isActive 
          ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white'
          : 'bg-gray-700 text-gray-300 group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-white'
      }`}>
        {icon}
      </div>
      <span className={`font-medium ${
        isActive 
          ? 'text-white font-semibold'
          : 'text-gray-300 hover:text-white'
      }`}>
        {label}
      </span>
      {isActive && (
        <div className="ml-auto h-2 w-2 bg-purple-400 rounded-full animate-pulse" />
      )}
    </Link>
  )
}