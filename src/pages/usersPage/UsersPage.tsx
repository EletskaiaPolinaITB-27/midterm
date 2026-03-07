import { useEffect, useState } from "react"
import { Box } from "@mui/material"
import { BASE_URL } from "../../contacts"
import type { IUser } from "../../types/types"
import { SearchInput } from "../../components/SearchInput/SearchInput"
import { Filters } from "../../Filters/Filters"
import { UserCard } from "../../UserCard/UserCard"

export const UsersPage = () => {

    const [users, setUsers] = useState<IUser[]>([])
    const [filteredUsers, setFilteredUsers] = useState<IUser[]>([])
    const [searchValue, setSearchValue] = useState('')
    const [countryValue, setCountryValue] = useState('')
    const [ageValue, setAgeValue] = useState<number[]>([0, 100])
    const [countries, setCountries] = useState<string[]>([])

    useEffect(() => {

        const getUsers = async () => {

            try {

                let response

                if (searchValue.trim()) {
                    response = await fetch(`${BASE_URL}/users/search?q=${searchValue}`)
                } else {
                    response = await fetch(`${BASE_URL}/users?limit=30`)
                }

                if (!response.ok) {
                    throw new Error("failed to get users")
                }

                const data = await response.json()

                setUsers(data.users)

            } catch (error) {
                console.log(error)
            }

        }

        getUsers()

    }, [searchValue])

    useEffect(() => {

        const countryList = users.map((user) => user.address?.country).filter(Boolean) as string[]

        const uniqueCountries = Array.from(new Set(countryList))

        setCountries(uniqueCountries)

    }, [users])

    useEffect(() => {

        const result = users.filter((user) => {

            const byCountry = countryValue
                ? user.address?.country === countryValue
                : true

            const byAge = user.age >= ageValue[0] && user.age <= ageValue[1]

            return byCountry && byAge

        })

        setFilteredUsers(result)

    }, [users, countryValue, ageValue])

    return (
        <Box sx={{ p: 4 }}>

            <SearchInput
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <Filters
                countries={countries}
                countryValue={countryValue}
                setCountryValue={setCountryValue}
                ageValue={ageValue}
                setAgeValue={setAgeValue}
            />

            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    mt: 3
                }}
            >

                {filteredUsers.map((user) => (

                    <Box key={user.id} sx={{ width: 300 }}>
                        <UserCard user={user} />
                    </Box>

                ))}

            </Box>

        </Box>
    )
}