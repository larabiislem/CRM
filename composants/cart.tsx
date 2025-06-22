// import icons
import { ArrowUpRight } from "lucide-react"

interface CardProps {
  name: string
  value: string | number
  icon: React.ComponentType<{ className?: string }>
  change?: string
  changeType?: "positive" | "negative"
  color: string
  bgColor: string
  description: string
  className?: string
  children?: React.ReactNode
}

export default function Card({
  name,
  value,
  icon: Icon,
  change,
  changeType = "positive",
  color,
  bgColor,
  description,
  className = "",
  children
}: CardProps) {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${bgColor} opacity-10`} />
      <div className="relative p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-400">{name}</p>
            <p className="text-3xl font-bold text-white">{value}</p>
            <p className="text-xs text-gray-500">{description}</p>
            {change && (
              <div className="flex items-center space-x-1">
                <ArrowUpRight className={`h-4 w-4 ${
                  changeType === "positive" ? "text-green-400" : "text-red-400"
                }`} />
                <span className={`text-sm font-medium ${
                  changeType === "positive" ? "text-green-400" : "text-red-400"
                }`}>
                  {change}
                </span>
                <span className="text-sm text-gray-500">vs mois dernier</span>
              </div>
            )}
          </div>
          <div className={`p-3 rounded-2xl bg-gradient-to-r ${color} shadow-lg`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}