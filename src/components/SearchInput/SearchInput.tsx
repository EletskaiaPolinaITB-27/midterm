import { TextField } from "@mui/material"

interface Props {
    searchValue: string,
    setSearchValue: (value: string) => void
}
export const SearchInput = ({searchValue, setSearchValue}:Props) => {
    return (
        <div>
            <TextField
                label="search user"
                variant="outlined"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)} />
        </div>
    )
}