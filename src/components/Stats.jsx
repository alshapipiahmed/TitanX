function Stats() {

    const stats = [

        {
            number: "500+",
            title: "عضو نشط",
            icon: "👥"
        },

        {
            number: "20+",
            title: "مدرب محترف",
            icon: "🏋️"
        },

        {
            number: "10+",
            title: "سنوات خبرة",
            icon: "🏆"
        },

        {
            number: "24/7",
            title: "مفتوح طوال اليوم",
            icon: "⚡"
        }

    ];


    return (

        <section className="stats-section">

            <div className="container">

                <div className="stats-grid">

                    {stats.map((stat) => (

                        <div
                            className="stat"
                            key={stat.title}
                        >

                            <div className="stat-icon">
                                {stat.icon}
                            </div>

                            <div>

                                <h2>
                                    {stat.number}
                                </h2>

                                <p>
                                    {stat.title}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Stats;