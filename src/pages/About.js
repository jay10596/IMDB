import React from "react";
import Detail from "../components/Detail";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About(props) {
    // This only works in the component that's mentioned in the router. This command will not work in the child components which is why we will catch the id here and pass it as props in the child component.
    let id = props.match.params.id

    return(
        <div>
            <Navbar />

            <Detail id={id} />

            <Footer />
        </div>
    )
}

export default About