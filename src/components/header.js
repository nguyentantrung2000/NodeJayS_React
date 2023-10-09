import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div style={{display: "flex", flexDirection:'row'}}>
                        <h5 color="inherit">Login</h5>
                        <h5 color="inherit">Login</h5>
                        <h5 color="inherit">Login</h5>
                        <h5 color="inherit">Login</h5>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}