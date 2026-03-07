import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { BASE_URL } from "../../contacts"
import type { IUser } from "../../types/types"

export const UserDetailsPage = () => {
    const { id } = useParams()
    const [user, setUser] = useState<IUser | null>(null)

    useEffect(() => {
        const getUser = async() => {
            try {
                const response = await fetch(`${BASE_URL}/users/${id}`)

                if (!response.ok) {
                    throw new Error('failed to get user')
                }

                const data = await response.json()
                setUser(data)
            } catch (error) {
                console.log(error)
            }
        }

        getUser()
    }, [id])

    return (
        <div>
            {user ? (
                <div>
                    <h1>
                        {user.firstName} {user.lastName}
                    </h1>

                    <img src={user.image} alt={user.firstName} />

                    <p>id: {user.id}</p>
                    <p>age: {user.age}</p>
                    <p>gender: {user.gender}</p>
                    <p>birth date: {user.birthDate}</p>
                    <p>email: {user.email}</p>
                    <p>phone: {user.phone}</p>
                    <p>blood group: {user.bloodGroup}</p>
                    <p>height: {user.height}</p>
                    <p>weight: {user.weight}</p>
                    <p>city: {user.address?.city}</p>
                    <p>country: {user.address?.country}</p>
                </div>
            ) : (
                <div>loading...</div>
            )}
        </div>
    )
}