import {useState} from 'react'
import './App.css'
import {Typography, Button, Box, Stack} from "@mui/material";

function App() {
    const [count, setCount] = useState(0)

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            width="100%"
        >
            <Stack spacing={2} alignItems="center">
                <Typography variant="h4">Hello Test 2</Typography>

                <Button
                    variant="outlined"
                    onClick={() => setCount((count) => count + 1)}
                >
                    Count is {count}
                </Button>
            </Stack>
        </Box>
    )
}

export default App
