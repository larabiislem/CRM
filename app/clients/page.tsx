'use client'

import { Search, Clock, User, Mail, Calendar, DollarSign, BadgeCheck } from 'lucide-react'
import { useState } from 'react'
import clients from '@/data/clients.json'
import ClientCard from '@/composants/ClientCard'

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredClients = clients.filter(client => 
    client.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.company?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="ml-72 p-8">
      <div className="flex flex-col space-y-2 mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Clients
        </h1>
        <p className="text-gray-400">
          Gestion de votre portefeuille clients • {filteredClients.length} clients
        </p>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-4" />
      </div>

      <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 mb-8 shadow-lg">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Rechercher par nom, email ou entreprise..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      <div className="space-y-4 mt-6">
        {filteredClients.length > 0 ? (
          filteredClients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))
        ) : (
          <p className="text-gray-500 italic">Aucun client trouvé.</p>
        )}
      </div>

       
      </div>
    </div>
  )
}


/*
'use client'

import { useState } from "react"
import clients from "@/data/clients.json"
import ClientCard from "@/composants/ClientCard"

export default function ClientList() {
  const [search, setSearch] = useState("")
// traitement des client filtré pour la recherche
// si on fait pas la recherche on affiche tous les clients
// on utilise un useState pour stocker le terme de recherchee
  const filteredClients = clients.filter((client) =>
    `${client.firstName} ${client.lastName}`.toLowerCase().includes(search.toLowerCase()) ||
    client.email.toLowerCase().includes(search.toLowerCase()) ||
    client.company?.toLowerCase().includes(search.toLowerCase())
  )
// j'ai utiliser un composant ClientCard pour afficher les données de chaque client
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
    

    
    </div>
  )
}


  <div className="space-y-4">
        {filteredClients.length > 0 ? (
          filteredClients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))
        ) : (
          <p className="text-gray-500 italic">Aucun client trouvé.</p>
        )}
      </div>

*/