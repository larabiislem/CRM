import { notFound } from 'next/navigation';
import clients from '@/data/clients.json';
import { Clock, Mail, Phone, Briefcase, Tag, Activity, DollarSign, User } from 'lucide-react';

import { PageProps } from 'next'; // Import PageProps from next

// utiliser pageprop pour définir le type des paramètres de la page
export default async function ClientPage({ params }: PageProps<{ id: string }>) {
  const { id } = await params; // Await params to resolve id
  const client = clients.find((c) => c.id === id);

  if (!client) {
    return notFound();
  }

    // formater la date de création du client
  const createdAt = new Date(client.createdAt).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // formater la date du dernier contact
  const lastContact = client.lastContact
    ? new Date(client.lastContact).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : 'Aucun contact récent';

  return (
    <div className="ml-72 p-8">
      <div className="flex flex-col space-y-2 mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Fiche Client
            </h1>
            <p className="text-gray-400 mt-1">
              Détails du client •{' '}
              <span className="text-purple-300">
                {client.firstName} {client.lastName}
              </span>
            </p>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                <User className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-white">
                {client.firstName} {client.lastName}
              </h2>
              <span className="ml-auto px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-900 to-pink-900 text-purple-100">
                {client.status.toUpperCase()}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-purple-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">{client.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-purple-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Téléphone</p>
                  <p className="text-white">{client.phone}</p>
                </div>
              </div>

              {client.company && (
                <div className="flex items-start gap-3">
                  <Briefcase className="h-5 w-5 text-purple-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-400">Entreprise</p>
                    <p className="text-white">{client.company}</p>
                  </div>
                </div>
              )}

              {client.position && (
                <div className="flex items-start gap-3">
                  <Tag className="h-5 w-5 text-purple-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-400">Poste</p>
                    <p className="text-white">{client.position}</p>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-purple-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Client depuis</p>
                  <p className="text-white">{createdAt}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Activity className="h-5 w-5 text-purple-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Dernier contact</p>
                  <p className="text-white">{lastContact}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Activity className="h-5 w-5 text-purple-400" />
              Activités récentes
            </h2>

            <div className="space-y-4">
              {client.activities.map((activity, index) => (
                <div key={index} className="border-l-2 border-purple-500 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-white">{activity.type}</h3>
                    <span className="text-xs text-gray-400">
                      {new Date(activity.date).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mt-1">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {client.tags && client.tags.length > 0 && (
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Tag className="h-5 w-5 text-purple-400" />
                Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                {client.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-900 to-pink-900 text-purple-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {client.revenue && (
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-purple-400" />
                Revenu généré
              </h2>
              <p className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                {client.revenue.toLocaleString('fr-FR')} €
              </p>
            </div>
          )}

          {client.notes && (
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-purple-400">#</span>
                Notes
              </h2>
              <p className="text-gray-300">{client.notes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}