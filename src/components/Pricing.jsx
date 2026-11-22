import { useState } from "react";

function Pricing() {

    const [selectedPlan, setSelectedPlan] =
        useState(null);


    const plans = [

        {
            name: "BASIC",
            arabicName: "الأساسية",
            price: "9,000 ريال",
            period: "شهرياً",
            features: [
                "دخول النادي",
                "جميع الأجهزة",
                "غرف تبديل الملابس",
                "مواقف السيارات"
            ]
        },

        {
            name: "PREMIUM",
            arabicName: "المميزة",
            price: "15,000 ريال",
            period: "شهرياً",
            popular: true,
            features: [
                "دخول غير محدود",
                "جميع الأجهزة",
                "مدرب شخصي",
                "خطة غذائية",
                "حصص جماعية"
            ]
        },

        {
            name: "VIP",
            arabicName: "كبار الشخصيات",
            price: "30,000 ريال",
            period: "شهرياً",
            features: [
                "جميع مميزات Premium",
                "مدرب خاص",
                "متابعة أسبوعية",
                "خطة غذائية متقدمة",
                "أولوية الحجز"
            ]
        }

    ];


    return (

        <section
            id="pricing"
            className="section"
        >

            <div className="container">

                <div className="section-title">

                    <span>
                        MEMBERSHIP
                    </span>

                    <h2>
                        اختر خطتك
                        <strong> وابدأ الآن</strong>
                    </h2>

                    <p>
                        خطط مرنة تناسب احتياجاتك وأهدافك.
                    </p>

                </div>


                <div className="pricing-grid">

                    {plans.map((plan) => (

                        <article
                            className={
                                `price-card ${
                                    plan.popular
                                        ? "popular"
                                        : ""
                                }`
                            }
                            key={plan.name}
                        >

                            {plan.popular && (

                                <div className="popular-badge">
                                    ⭐ الأكثر طلباً
                                </div>

                            )}


                            <div className="plan-name">
                                {plan.name}
                            </div>

                            <h3>
                                {plan.arabicName}
                            </h3>

                            <div className="price">

                                {plan.price}

                                <small>
                                    / {plan.period}
                                </small>

                            </div>


                            <ul>

                                {plan.features.map(
                                    (feature) => (

                                        <li key={feature}>

                                            <span>✓</span>

                                            {feature}

                                        </li>

                                    )
                                )}

                            </ul>


                            <button
                                className="btn price-button"
                                onClick={() =>
                                    setSelectedPlan(plan)
                                }
                            >

                                اختر هذه الخطة

                            </button>

                        </article>

                    ))}

                </div>

            </div>


            {selectedPlan && (

                <div
                    className="modal-overlay"
                    onClick={(e) => {

                        if (
                            e.target ===
                            e.currentTarget
                        ) {
                            setSelectedPlan(null);
                        }

                    }}
                >

                    <div className="modal">

                        <button
                            className="modal-close"
                            onClick={() =>
                                setSelectedPlan(null)
                            }
                        >
                            ✕
                        </button>


                        <div className="modal-icon">
                            🔥
                        </div>


                        <h2>
                            TITAN X
                        </h2>


                        <p>
                            لقد اخترت خطة
                        </p>


                        <h3>
                            {selectedPlan.arabicName}
                        </h3>


                        <div className="modal-price">
                            {selectedPlan.price}
                            <small>
                                / {selectedPlan.period}
                            </small>
                        </div>


                        <p className="modal-description">

                            اضغط على الزر أدناه
                            للتواصل معنا وإكمال
                            عملية التسجيل.

                        </p>


                        <a
                            href="#contact"
                            className="btn"
                            onClick={() =>
                                setSelectedPlan(null)
                            }
                        >
                            تواصل معنا
                        </a>

                    </div>

                </div>

            )}

        </section>

    );

}

export default Pricing;
