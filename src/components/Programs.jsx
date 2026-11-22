function Programs() {

    const programs = [

        {
            number: "01",
            icon: "💪",
            title: "بناء العضلات",
            text: "برنامج تدريبي متكامل لزيادة الكتلة العضلية والقوة البدنية."
        },

        {
            number: "02",
            icon: "🔥",
            title: "خسارة الدهون",
            text: "تمارين عالية الكفاءة تساعدك على حرق الدهون وتحسين شكل الجسم."
        },

        {
            number: "03",
            icon: "⚡",
            title: "اللياقة البدنية",
            text: "برنامج متوازن لتحسين التحمل والمرونة والقوة والطاقة."
        }

    ];


    return (

        <section
            id="programs"
            className="programs-section section"
        >

            <div className="container">

                <div className="section-title">

                    <span>
                        TRAINING PROGRAMS
                    </span>

                    <h2>
                        برنامجك يبدأ
                        <strong> من هنا</strong>
                    </h2>

                    <p>
                        اختر هدفك ودعنا نساعدك على تحقيقه.
                    </p>

                </div>


                <div className="programs-grid">

                    {programs.map((program) => (

                        <article
                            className="program-card"
                            key={program.number}
                        >

                            <div className="program-number">
                                {program.number}
                            </div>

                            <div className="program-icon">
                                {program.icon}
                            </div>

                            <h3>
                                {program.title}
                            </h3>

                            <p>
                                {program.text}
                            </p>

                            <button
                                className="program-button"
                                onClick={() =>
                                    document
                                        .getElementById("pricing")
                                        ?.scrollIntoView({
                                            behavior: "smooth"
                                        })
                                }
                            >

                                ابدأ البرنامج
                                <span>←</span>

                            </button>

                        </article>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Programs;