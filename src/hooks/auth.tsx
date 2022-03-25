import React, {
    createContext,
    useState,
    useContext,
    ReactNode
} from 'react'
import api from '../services/api';

interface User {
    id: string
    email: string
    nome: string
    numeroCNH: string
    avatar: string
}

interface AuthState {
    token: string
    usuario: User
}

interface LoginCredentials {
    email: string
    password: string
}


interface AuthContextData {
    usuario: User
    login: (usuarioData: LoginCredentials) => Promise<void>
    //logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
    children: ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
    const [data, setData] = useState<AuthState>({} as AuthState)

    async function login({ email, password }: LoginCredentials) {
        const response = await api.post('/sessions', {
            email: email,
            password: password
        })

        const { token, user: { avatar, email: emailResponse, name, id, driver_license } } = response.data

        api.defaults.headers.Authorization = `Bearer ${token}`;
        setData({
            token, usuario:
            {
                id,
                email: emailResponse,
                nome: name,
                numeroCNH: driver_license,
                avatar
            }
        })

    }

    return <AuthContext.Provider value={{ usuario: data.usuario, login }}>{children}</AuthContext.Provider>
}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext)
    return context
}

export { AuthProvider, useAuth }


