// index.js
import * as React from "react"
import { useState } from "react"
import CatsPage from "./CatsPage";
import DogsPage from "./DogsPage";

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}
const buttonsStyled = {

}

const allElements = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}

const IndexPage = () => {
    const [showH1, setShowH1] = useState(true);
    const [showCatsPage, setShowCatsPage] = useState(false);
    const [showDogsPage, setShowDogsPage] = useState(false);

    return (
        <main style={pageStyles}>
            <div className={allElements}>
                {showH1}
                <div className={buttonsStyled}>
                    <button onClick={() => { setShowCatsPage(!showCatsPage); setShowDogsPage(false); setShowH1(false); }}>Cats</button>
                    <button onClick={() => { setShowDogsPage(!showDogsPage); setShowCatsPage(false); setShowH1(false); }}>Dogs</button>
                    {showCatsPage && <CatsPage cats="This is the Cats Page content" />}
                    {showDogsPage && <DogsPage dogs="This is the Dogs Page content" />}
                </div>
            </div>
        </main>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>