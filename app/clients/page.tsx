'use client'

import { Search, User, Mail, Calendar, DollarSign, BadgeCheck } from 'lucide-react'
import { useState } from 'react'
import clients from '@/data/clients.json'

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState('')
// traitement des client filtré pour la recherche
// si on fait pas la recherche on affiche tous les clients
// on utilise un useState pour stocker le terme de recherchee
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

     
        <div className="mt-6 space-y-4">
          {filteredClients.map(client => (
            <div key={client.id} className="p-4 rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors duration-300">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white flex items-center gap-2">
                      {client.firstName} {client.lastName}
                      {client.status === 'vip' && (
                        <BadgeCheck className="h-4 w-4 text-purple-400" />
                      )}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-400">
                      <Mail className="h-4 w-4" />
                      <span>{client.email}</span>
                    </div>
                    {client.company && (
                      <div className="text-sm text-gray-300 mt-1">
                        {client.company} • {client.position}
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center justify-end gap-2 text-xs text-gray-400">
                    <Calendar className="h-3 w-3" />
                    <span>
                      {new Date(client.createdAt).toLocaleDateString('fr-FR')}
                    </span>
                  </div>
                  {client.revenue && (
                    <div className="flex items-center justify-end gap-2 mt-2 text-sm text-green-400">
                      <DollarSign className="h-4 w-4" />
                      <span>{client.revenue.toLocaleString('fr-FR')}€</span>
                    </div>
                  )}
                  <div className={`mt-2 text-xs px-2 py-1 rounded-full inline-flex items-center ${
                    client.status === 'active' ? 'bg-green-900/50 text-green-400' :
                    client.status === 'vip' ? 'bg-purple-900/50 text-purple-400' :
                    client.status === 'prospect' ? 'bg-blue-900/50 text-blue-400' :
                    'bg-gray-700 text-gray-400'
                  }`}>
                    {client.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredClients.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            Aucun client trouvé pour "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  )
}