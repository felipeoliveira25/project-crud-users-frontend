'use client'
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { toast } from "react-toastify"

const decodeJWT = (token: string) => {
  try {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    )
    return JSON.parse(jsonPayload)
  } catch (error) {
    console.error('Erro ao decodificar token:', error)
    return null
  }
}

const isTokenExpired = (token: string) => {
  if (!token) return true
  
  const decoded = decodeJWT(token)
  if (!decoded || !decoded.exp) return true
  
  const currentTime = Math.floor(Date.now() / 1000)
  return decoded.exp < currentTime
}


export const useValidateToken = () => {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('authToken')

    if (!token) {
      toast.error('Você precisa estar logado!')
      router.push('/login')
      return
    }

    if (isTokenExpired(token)) {
      localStorage.removeItem('authToken')
      toast.error('Sua sessão expirou. Faça login novamente.')
      router.push('/login')
    }
  }, [router])
}