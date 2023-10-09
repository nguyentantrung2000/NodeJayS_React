import React from "react";
// components
import Header from "../../components/header";
import SideRight from "../../components/sideRight";

export default function Home() {
    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="body">
                <div 
                className="side-right"
                style={{width: '30%'}}
                >
                    <SideRight />
                </div>
            </div>
        </div>
    );
}

