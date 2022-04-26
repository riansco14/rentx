import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
    useEffect
} from 'react'
import { database } from '../databases';
import api from '../services/api';

import { User as ModelUser } from '../databases/model/User'

interface User {
    id: string
    user_id: string
    email: string
    name: string
    driver_license: string
    avatar: string
    token: string
}


interface LoginCredentials {
    email: string
    password: string
}


interface AuthContextData {
    usuario: User
    login: (usuarioData: LoginCredentials) => Promise<void>
    logout: () => Promise<void>
    updateUser: (user: User) => Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
    children: ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
    const [data, setData] = useState<User>({} as User)

    useEffect(() => {
        async function loadUsuarioData() {
            const userCollection = database.get<ModelUser>('users')
            const response = await userCollection.query().fetch()
            if (response.length > 0) {
                const userData = response[0]._raw as unknown as User

                api.defaults.headers.authorization = `Bearer ${userData.token}`;

                setData({
                    ...userData,
                    nome: userData.name,
                    numeroCNH: userData.driver_license,
                })
            }
        }
        loadUsuarioData()
    }, [])

    async function login({ email, password }: LoginCredentials) {
        try {
            const response = await api.post('/sessions', {
                email: email,
                password: password
            })

            const { token, user: { avatar, email: emailResponse, name, id, driver_license } } = response.data

            api.defaults.headers.Authorization = `Bearer ${token}`;

            const userCollections = database.get<ModelUser>('users')
            await database.write(async () => {
                await userCollections.create((newUser) => {
                    newUser.user_id = id
                    newUser.email = emailResponse
                    newUser.name = name
                    newUser.driver_license = driver_license
                    newUser.avatar = avatar
                    newUser.token = token
                })
            })
            setData({
                id,
                user_id: '',
                email: emailResponse,
                nome: name,
                numeroCNH: driver_license,
                avatar,
                token,
            })
        } catch (error) {
            throw new Error(error)
        }
    }

    async function logout() {
        try {
            const usersCollection = database.get<ModelUser>('users')

            await database.write(
                async () => {
                    const userSelected = usersCollection.find(data.id)
                    await (await userSelected).destroyPermanently()
                    setData({} as User)
                }
            )
        } catch (error) {
            throw new Error(error)
        }
    }

    async function updateUser(user: User) {
        console.log("USER",user)
        try {
            const userCollections = database.get<ModelUser>('users')
            await database.write(async () => {
                const userSelected = await userCollections.find(data.id)
                await userSelected.update((userData) => {
                    userData.name = user.name
                    userData.driver_license = user.driver_license
                    userData.avatar = user.avatar || ""
                })
                setData(user)
            })
        } catch (error) {
            throw new Error()
        }
    }

    return <AuthContext.Provider value={{ usuario: data, login, logout, updateUser }}>{children}</AuthContext.Provider>
}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext)
    return context
}

export { AuthProvider, useAuth }


