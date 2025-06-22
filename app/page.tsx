'use client'
import { Building2, Mail, Lock } from "lucide-react"
import { useState  } from "react"
import { useRouter } from "next/navigation";
export default function Home() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const router = useRouter();

// verifier si l'email est valide sinon mettre a jour le state error
  // regex pour valider l'email
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError("Veuillez saisir une adresse email valide.");
      return;
    }
    setError("");
    router.push('/dashboard');
  };



  return (
<div className="hidden lg:flex bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 relative overflow-hidden min-h-screen w-full items-center justify-center">
 
<div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-lg rounded-2xl w-[30%] h-[70%] border border-white/20 shadow-2xl p-8">
  <Building2 className="h-16 w-16 mb-6 text-white/90" />
    <h1 className="text-4xl font-bold mb-4 leading-tight">
            Welcome
    </h1>
<div className="relative w-full mb-4">
  <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-1 ml-1">
    Email
  </label>
  <Mail className="absolute left-4 top-12 -translate-y-1/2 h-6 w-6 text-white/70 pointer-events-none" />
  <input
    id="email"
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter your email"
    className="w-full h-12 pl-12 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
  />
</div>
<div className="relative w-full mb-4">
  <label htmlFor="password" className="block text-white/80 text-sm font-medium mb-1 ml-1">
    Password
  </label>
  <Lock className="absolute left-4 top-12 -translate-y-1/2 h-6 w-6 text-white/70 pointer-events-none" />
  <input
    id="password"
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Enter your password"
    className="w-full h-12 pl-12 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
  />
</div>
{error && (
            <div className="text-red-400 text-sm mb-2 ml-1">{error}</div>
          )}
<button
  type="submit"
  onClick={handleSubmit}
  className="w-full flex items-center justify-center gap-2 h-12 mt-2 bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold rounded-lg hover:bg-white/30 transition duration-200"
>
  Se connecter
</button>


</div>

</div>


  )
}