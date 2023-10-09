import React from "react";
// css
import "./configs/style.css";
import { Grid } from "@mui/material";
import { red } from "@mui/material/colors";

export default function SideRight() {
    return (
        <Grid container 
            direction="column"
        >
            <Grid item xs={4}>
                <div className="header-sideRight">
                    <h4>
                        Projects
                    </h4>
                    <span>
                        All project
                    </span>
                </div>
            </Grid>
            <Grid 
            container rowSpacing={1} 
            olumnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid style={{backgroundColor: 'red', height:'150px'}} item xs={6}>
                    <span>hahaha</span>
                </Grid>
                <Grid style={{ backgroundColor: 'yellow', height: '150px' }} item xs={6}>
                    <span>hahaha</span>
                </Grid>
                <Grid style={{ backgroundColor: 'blue', height: '150px' }} item xs={6}>
                    <span>hahaha</span>
                </Grid>
                <Grid style={{ backgroundColor: 'green', height: '150px' }} item xs={6}>
                    <span>hahaha</span>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <div className="header-sideRight">
                    <h4>
                        Tags
                    </h4>
                    <span>
                        All tags
                    </span>
                </div>
            </Grid>
        </Grid>
    )
}