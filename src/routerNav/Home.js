
import { Typography } from "@mui/material";
import MiNavBar from "./MiNavBar";


export default function Home() {
    return (
        <>
        <MiNavBar />
        <Typography  variant="h2" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,fontFamily: 'sans-serif' ,color:'blue', marginTop:'10vh'}}>Bienvenido a mi proyecto de react</Typography>
    </>
    );
}