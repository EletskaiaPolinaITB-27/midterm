import { Avatar, Card, CardContent, Typography, Box } from "@mui/material"
import { Link } from "react-router"
import type { IUser } from "../../types/types"

interface Props {
    user: IUser
}
export const UserCard = ({user}:Props) => {
    return (
        <div>
            <Link to={`/users/${user.id}`}>
                <Card sx={{ mb: 2, width: 300 }}>
                    <CardContent>
                        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                            <Avatar src={user.image} sx={{ width: 60, height: 60 }} />


                            <Box>
                                <Typography>
                                    {user.firstName} {user.lastName}
                                </Typography>

                                <Typography>
                                    age: {user.age}
                                </Typography>

                                <Typography>
                                    city: {user.address?.city}
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Link>
        </div>
    )
}