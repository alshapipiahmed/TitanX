function Footer() {

    const scrollTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };


    return (

        <footer>

            <div className="container">

                <div className="footer-content">


                    <div className="footer-brand">

                        <button
                            className="footer-logo"
                            onClick={scrollTop}
                        >

                            TITAN
                            <span> X</span>

                        </button>

                        <p>

                            قوتك تبدأ من قرارك.
                            ونحن هنا لنساعدك.

                        </p>

                    </div>


                    <div className="footer-links">

                        <button
                            onClick={() =>
                                document
                                    .getElementById("home")
                                    ?.scrollIntoView({
                                        behavior: "smooth"
                                    })
                            }
                        >
                            الرئيسية
                        </button>

                        <button
                            onClick={() =>
                                document
                                    .getElementById("services")
                                    ?.scrollIntoView({
                                        behavior: "smooth"
                                    })
                            }
                        >
                            الخدمات
                        </button>

                        <button
                            onClick={() =>
                                document
                                    .getElementById("pricing")
                                    ?.scrollIntoView({
                                        behavior: "smooth"
                                    })
                            }
                        >
                            الاشتراكات
                        </button>

                        <button
                            onClick={() =>
                                document
                                    .getElementById("contact")
                                    ?.scrollIntoView({
                                        behavior: "smooth"
                                    })
                            }
                        >
                            تواصل معنا
                        </button>

                    </div>


                    <button
                        className="back-top"
                        onClick={scrollTop}
                    >
                        ↑
                    </button>

                </div>


                <div className="footer-bottom">

                    <p>

                        © 2026
                        <strong>
                            TITAN X GYM
                        </strong>

                        — جميع الحقوق محفوظة

                    </p>

                    <p>
                        Built with React ⚡
                    </p>

                </div>

            </div>

        </footer>

    );

}

export default Footer;