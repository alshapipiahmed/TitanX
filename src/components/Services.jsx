function Services() {

    const services = [

        {
            icon: "🏋️",
            title: "أجهزة احترافية",
            text: "أحدث أجهزة ومعدات اللياقة البدنية لتوفير تجربة تدريب احترافية وآمنة."
        },

        {
            icon: "🔥",
            title: "مدربون محترفون",
            text: "فريق من المدربين المتخصصين لمساعدتك على تحقيق أهدافك بأفضل طريقة."
        },

        {
            icon: "🥗",
            title: "التغذية الرياضية",
            text: "خطط غذائية مخصصة تساعدك على بناء العضلات وحرق الدهون وتحسين صحتك."
        },

        {
            icon: "🥊",
            title: "تمارين جماعية",
            text: "حصص جماعية متنوعة وممتعة تناسب مختلف المستويات والأهداف."
        },

        {
            icon: "💪",
            title: "تدريب شخصي",
            text: "جلسات تدريب فردية مصممة حسب جسمك ومستواك وهدفك الرياضي."
        },

        {
            icon: "🧘",
            title: "استشفاء ولياقة",
            text: "مساحات وخدمات تساعدك على الاستشفاء والمحافظة على نشاطك وصحتك."
        }

    ];


    return (

        <section
            id="services"
            className="section"
        >

            <div className="container">

                <div className="section-title">

                    <span>
                        WHY TITAN X
                    </span>

                    <h2>
                        كل ما تحتاجه
                        <br />
                        <strong>لتصبح أقوى</strong>
                    </h2>

                    <p>
                        بيئة احترافية ومتكاملة تساعدك
                        على الوصول إلى أفضل نسخة منك.
                    </p>

                </div>


                <div className="services-grid">

                    {services.map((service) => (

                        <article
                            className="service-card"
                            key={service.title}
                        >

                            <div className="service-icon">
                                {service.icon}
                            </div>

                            <h3>
                                {service.title}
                            </h3>

                            <p>
                                {service.text}
                            </p>

                            <div className="service-arrow">
                                ←
                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Services;