import React, { useEffect } from "react";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import About from "../../components/About/About";

const AboutUs = (props) => {
    useEffect(() => {
        document.title = import.meta.env.VITE_BASE_TITLE + " | " + props.title;
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, []);

    return (
        <>
            <Breadcrumb title='درباره ما' />
            <About />
        </>
    )
}

export default AboutUs