import type { IUser } from "../../types/types"
import { Link } from "react-router"
import { Card } from "@mui/material"
import { CardContent } from "@mui/material"
import { Box } from "@mui/material"
import { Avatar } from "@mui/material"
import { Typography } from "@mui/material"



interface Props {
    user: IUser
}

export const UserCard = ({user}:Props) => {
    return (
        <div>
            <Link to={`/users/${user.id}`}>
                <Card sx={{ mb: 2, width: 300 }}>
                    <CardContent>
                        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }} >
                            <Avatar src={user.image} sx={{ width: 60, height: 60 }} />
                            <Box>
                                <Typography>
                                    {user.firstName}{user.lastName}
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