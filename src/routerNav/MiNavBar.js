import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";


const navItems = [{ label: 'Alta artista', path: "/Formalta" },
{ label: 'Home', path: "/" },
{ label: 'Card', path: "/edicion" },
{ label: 'Listado', path: "/listado" },
];

export default function MiNavBar(){
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Person's
                </Typography>
                {navItems.map((item) => (
                    <Button color="inherit" >
                        <NavLink style={{ color: 'white' }} to={item.path}>{item.label}</NavLink>
                    </Button>
                ))}
            </Toolbar>
        </AppBar>
    );
}

