import { useState, useEffect } from "react";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("home");

    const links = [
        {
            name: "الرئيسية",
            id: "home"
        },
        {
            name: "الخدمات",
            id: "services"
        },
        {
            name: "البرامج",
            id: "programs"
        },
        {
            name: "الاشتراكات",
            id: "pricing"
        },
        {
            name: "تواصل معنا",
            id: "contact"
        }
    ];


    useEffect(() => {

        const handleScroll = () => {

            const scrollPosition =
                window.scrollY + 150;

            links.forEach((link) => {

                const section =
                    document.getElementById(link.id);

                if (!section) return;

                const top = section.offsetTop;
                const height = section.offsetHeight;

                if (
                    scrollPosition >= top &&
                    scrollPosition < top + height
                ) {
                    setActive(link.id);
                }

            });

        };


        window.addEventListener(
            "scroll",
            handleScroll
        );


        return () => {

            window.removeEventListener(
                "scroll",
                handleScroll
            );

        };

    }, []);


    const handleNavigation = (id) => {

        setMenuOpen(false);

        const section =
            document.getElementById(id);

        if (section) {

            section.scrollIntoView({
                behavior: "smooth"
            });

        }

    };


    return (

        <header className="navbar">

            <div className="container">

                <nav>

                    <button
                        className="logo"
                        onClick={() =>
                            handleNavigation("home")
                        }
                    >

                        TITAN
                        <span> X</span>

                    </button>


                    <button
                        className="menu-button"
                        onClick={() =>
                            setMenuOpen(!menuOpen)
                        }
                        aria-label="فتح القائمة"
                    >

                        {menuOpen ? "✕" : "☰"}

                    </button>


                    <ul
                        className={
                            `nav-links ${
                                menuOpen ? "active" : ""
                            }`
                        }
                    >

                        {links.map((link) => (

                            <li key={link.id}>

                                <button
                                    className={
                                        active === link.id
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        handleNavigation(
                                            link.id
                                        )
                                    }
                                >

                                    {link.name}

                                </button>

                            </li>

                        ))}

                    </ul>

                </nav>

            </div>

        </header>

    );

}

export default Navbar;