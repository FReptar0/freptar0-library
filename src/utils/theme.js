import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weights: [400, 500, 700],
    display: 'swap',
    subsets: ['latin-ext'],
})

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
        secondary: {
            main: '#f48fb1',
        },
        error: {
            main: '#f44336',
        },
        warning: {
            main: '#ff9800',
        },
        info: {
            main: '#2196f3',
        },
        success: {
            main: '#4caf50',
        },
    },
});

export default theme;