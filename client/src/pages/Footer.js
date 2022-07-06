import React from "react";
import { LogoGithubIcon } from '@primer/octicons-react';


const style = {
    backgroundColor: "green",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "50px",
    width: "100%", 
    textSize: "10px"
};

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row-align">
                    
                        <a href="https://github.com/Moonman9/nerd_wallet" target="_blank">
                            <LogoGithubIcon size="small" aria-label="GitHub" />
                        </a>
                            <p>
                                @2022 developed by Michael Ramos, Zachary Lopez, Evin White
                            </p>
                    
                </div> 
            </div>
        </div>
    );
}

