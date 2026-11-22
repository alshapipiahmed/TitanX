function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({
        behavior: "smooth"
    });
}

function Hero() {

    return (

        <section
            className="hero"
            id="home"
        >

            <div className="hero-background">
                <div className="hero-glow"></div>
                <div className="hero-grid"></div>
            </div>


            <div className="container">

                <div className="hero-content">

                    <div className="hero-badge">

                        <span>●</span>

                        PREMIUM FITNESS CLUB

                    </div>


                    <h1>

                        اصنع
                        <span> قوتك</span>

                        <br />

                        وابنِ
                        <span> مستقبلك</span>

                    </h1>


                    <p>

                        في TITAN X نحول طموحك إلى واقع.
                        أحدث المعدات، أفضل المدربين،
                        وبرامج تدريب مصممة لتوصلك إلى هدفك.

                    </p>


                    <div className="hero-buttons">

                        <button
                            className="btn"
                            onClick={() =>
                                scrollToSection("pricing")
                            }
                        >

                            🔥 ابدأ رحلتك

                        </button>


                        <button
                            className="btn btn-outline"
                            onClick={() =>
                                scrollToSection("services")
                            }
                        >

                            اكتشف النادي
                            <span>←</span>

                        </button>

                    </div>


                    <div className="hero-mini-stats">

                        <div>

                            <strong>500+</strong>

                            <span>عضو سعيد</span>

                        </div>


                        <div>

                            <strong>20+</strong>

                            <span>مدرب محترف</span>

                        </div>


                        <div>

                            <strong>24/7</strong>

                            <span>مفتوح</span>

                        </div>

                    </div>

                </div>


                <div className="hero-visual">

                    <div className="hero-circle">

                        <div className="hero-circle-inner">

                            <span>
                                TITAN
                            </span>

                            <strong>
                                X
                            </strong>

                            <small>
                                FITNESS
                            </small>

                        </div>

                    </div>


                </div>

            </div>

        </section>

    );

}

export default Hero;
