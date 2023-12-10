import React from "react";
import { AppContext } from "../App/AppProvider";

export default function WelcomeMessage() {
    return (
        <AppContext.Consumer>
            {({ firstVisit }) =>
                firstVisit ? (
                    <div>
                        Welcome to CryptoDash! Please select your favourite coins.{' '}
                    </div>
                ) : null
            }
        </AppContext.Consumer>
    );
}
