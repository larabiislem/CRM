import { User, Mail, BadgeCheck, Calendar, DollarSign } from "lucide-react"

type Client = {
  id: string
  firstName: string
  lastName: string
  email: string
  status: string
  company?: string
  position?: string
  createdAt: string
  revenue?: number
}

export default function ClientCard({ client }: { client: Client }) {
  return (
    <div className="p-4 rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors duration-300">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
            <User className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-medium text-white flex items-center gap-2">
              {client.firstName} {client.lastName}
              {client.status === "vip" && (
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
              {new Date(client.createdAt).toLocaleDateString("fr-FR")}
            </span>
          </div>
          {client.revenue && (
            <div className="flex items-center justify-end gap-2 mt-2 text-sm text-green-400">
              <DollarSign className="h-4 w-4" />
              <span>{client.revenue.toLocaleString("fr-FR")} €</span>
            </div>
          )}
          <div
            className={`mt-2 text-xs px-2 py-1 rounded-full inline-flex items-center ${
              client.status === "active"
                ? "bg-green-900/50 text-green-400"
                : client.status === "vip"
                ? "bg-purple-900/50 text-purple-400"
                : client.status === "prospect"
                ? "bg-blue-900/50 text-blue-400"
                : "bg-gray-700 text-gray-400"
            }`}
          >
            {client.status}
          </div>
        </div>
      </div>
    </div>
  )
}
