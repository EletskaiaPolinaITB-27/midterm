import { Box, FormControl, InputLabel, MenuItem, Select, Slider, Typography } from "@mui/material"

interface Props {
    countries: string[],
    countryValue: string,
    setCountryValue: (value: string) => void,
    ageValue: number[],
    setAgeValue: (value: number[]) => void
}
export const Filters = ({countries, countryValue, setCountryValue, ageValue, setAgeValue}:Props) => {
    return (
        <Box>
            <FormControl sx={{ minWidth: 220 }}>
                <InputLabel>country</InputLabel>

                <Select
                    label="country"
                    value={countryValue}
                    onChange={(e) => setCountryValue(e.target.value)}>
                    <MenuItem value="">all</MenuItem>


                    {countries.map((country) => (
                        <MenuItem key={country} value={country}>
                            {country}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Box sx={{ mt: 2, width: 250 }}>
                <Typography>
                    age: {ageValue[0]} - {ageValue[1]}
                </Typography>

                <Slider
                    value={ageValue}
                    onChange={(_, value) => setAgeValue(value as number[])}
                    valueLabelDisplay="auto"
                    min={0}
                    max={100} />
            </Box>
        </Box>
    )
}