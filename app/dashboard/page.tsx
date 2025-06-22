// import icons
import { DollarSign, TrendingUp, UserPlus, Users } from "lucide-react"
// import cart cmposant
import Card from "@/composants/cart"

import ClientsMiniInfo from "@/composants/clients_mini_info"
// import client data
import clients from "@/data/clients.json"

export default function Dashboard() {
  // status data ( important kpi for the dashboard)
  const stats = [
    {
      name: "Total Clients",
      value: 110,
      icon: Users,
      change: "+12%",
      changeType: "positive" as const,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      description: `${24} actifs • ${12} VIP`,
    },
    {
      name: "Nouveaux ce mois",
      value: 1,
      icon: UserPlus,
      change: "+8%",
      changeType: "positive" as const,
      color: "from-emerald-500 to-green-500",
      bgColor: "from-emerald-50 to-green-50",
      description: "Croissance mensuelle",
    },
    {
      name: "Chiffre d'affaires",
      value: `${1000}k€`,
      icon: DollarSign,
      change: "+15%",
      changeType: "positive" as const,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      description: "Revenus générés",
    },
    {
      name: "Taux de conversion",
      value: "23%",
      icon: TrendingUp,
      change: "+2.1%",
      changeType: "positive" as const,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      description: "Prospects → Clients",
    },
  ]

  return (
    <div className="ml-72 p-8">
      <div className="flex flex-col space-y-2 mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-gray-400 mt-1">
              Vue d'ensemble •{" "}
              <span className="text-purple-300">
                {new Date().toLocaleDateString("fr-FR", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </p>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-4" />
      </div>

 
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <Card
            key={item.name}
            name={item.name}
            value={item.value}
            icon={item.icon}
            change={item.change}
            changeType={item.changeType}
            color={item.color}
            bgColor={item.bgColor}
            description={item.description}
          />
        ))}
      </div>

      <div>
        <div className=" flex mt-8 mb-4">

        <div className="flex-1">
          <ClientsMiniInfo clients={clients} />
        </div>
      </div>
      </div>
    </div>
  )
}