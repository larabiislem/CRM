'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Mail, Phone, Briefcase, Tag, DollarSign, Plus } from 'lucide-react';

export default function AddClientPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    revenue: '',
    status: 'active',
    tags: [] as string[],
    notes: '',
  });
  const [newTag, setNewTag] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   alert('Client ajouté avec succès !');
    router.push('/clients');
  };

  const handleAddTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, newTag.trim()],
      });
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  return (
    <div className="ml-72 p-8">
      <div className="flex flex-col space-y-2 mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Ajouter un client
            </h1>
            <p className="text-gray-400 mt-1">
              Création •{' '}
              <span className="text-purple-300">
                {new Date().toLocaleDateString('fr-FR', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </p>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-4" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg space-y-4">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <User className="h-5 w-5 text-purple-400" />
              Informations personnelles
            </h2>

            <div className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-400 mb-1">
                  Prénom
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-400 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg space-y-4">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-purple-400" />
              Informations professionnelles
            </h2>

            <div className="space-y-4">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-1">
                  Entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-400 mb-1">
                  Poste
                </label>
                <input
                  type="text"
                  id="position"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="revenue" className="block text-sm font-medium text-gray-400 mb-1">
                  Revenu généré (€)
                </label>
                <input
                  type="number"
                  id="revenue"
                  value={formData.revenue}
                  onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-400 mb-1">
                  Statut
                </label>
                <select
                  id="status"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="active">Actif</option>
                  <option value="prospect">Prospect</option>
                  <option value="vip">VIP</option>
                  <option value="inactive">Inactif</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Tag className="h-5 w-5 text-purple-400" />
            Tags
          </h2>

          <div className="flex flex-wrap gap-2 mb-4">
            {formData.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-900 to-pink-900 text-purple-100"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="text-purple-200 hover:text-white"
                >
             
                </button>
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder="Ajouter un tag"
              className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg flex items-center gap-1 hover:from-purple-600 hover:to-pink-600 transition-colors"
            >
              <Plus className="h-4 w-4" />
              Ajouter
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-purple-400">#</span>
            Notes
          </h2>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[100px]"
            placeholder="Ajoutez des notes sur ce client..."
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.push('/clients')}
            className="px-6 py-2 border border-gray-600 rounded-lg text-white hover:bg-gray-700 transition-colors"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Ajouter le client
          </button>
        </div>
      </form>
    </div>
  );
}