import React from 'react';
import { Clock, Mail, User, Calendar, DollarSign, BadgeCheck, Circle } from 'lucide-react';

interface Client {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  revenue?: number;
  status: string;
  company?: string;
}

interface ClientCardProps {
  client: Client;
}

function ClientCard({ client }: ClientCardProps) {
  const statusColors = {
    active: 'text-green-500',
    vip: 'text-purple-500',
    prospect: 'text-blue-500',
    inactive: 'text-gray-500'
  };

  const statusIcons = {
    active: <Circle className="h-3 w-3 fill-current" />,
    vip: <BadgeCheck className="h-4 w-4" />,
    prospect: <Circle className="h-3 w-3" />,
    inactive: <Circle className="h-3 w-3" />
  };

  return (
    <div className="p-4 rounded-lg border border-gray-700 bg-gray-800/50 hover:bg-gray-800 transition-colors duration-300">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-gray-400" />
            <h3 className="font-medium text-white">
              {client.firstName} {client.lastName}
            </h3>
            <span className={`flex items-center gap-1 text-xs ${statusColors[client.status as keyof typeof statusColors]}`}>
              {statusIcons[client.status as keyof typeof statusIcons]}
              {client.status}
            </span>
          </div>
          
          <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
            <Mail className="h-4 w-4" />
            <span>{client.email}</span>
          </div>

          {client.company && (
            <div className="text-sm text-gray-400 mt-1">
              {client.company}
            </div>
          )}
        </div>

        <div className="text-right">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Calendar className="h-3 w-3" />
            <span>
              {new Date(client.createdAt).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              })}
            </span>
          </div>

          {client.revenue && (
            <div className="flex items-center gap-2 mt-2 text-sm text-green-400">
              <DollarSign className="h-4 w-4" />
              <span>{client.revenue.toLocaleString('fr-FR')}€</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ClientsMiniInfo({ clients }: { clients: Client[] }) {
  // Trier les clients par date de création (les plus récents en premier)
  const recentClients = [...clients]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-lg font-medium text-white">
        <Clock className="h-5 w-5 text-purple-400" />
        <h2>Clients récents</h2>
      </div>

      <div className="space-y-3">
        {recentClients.map(client => (
          <ClientCard key={client.id} client={client} />
        ))}
      </div>
    </div>
  );
}