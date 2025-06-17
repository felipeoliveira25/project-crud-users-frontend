'use client'
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { toast } from "react-toastify"

// Função para decodificar JWT sem bibliotecas externas
const decodeJWT = (token) => {
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

// Função para verificar se o token expirou
const isTokenExpired = (token) => {
  if (!token) return true
  
  const decoded = decodeJWT(token)
  if (!decoded || !decoded.exp) return true
  
  const currentTime = Math.floor(Date.now() / 1000)
  return decoded.exp < currentTime
}


// Hook mais simples para casos básicos
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