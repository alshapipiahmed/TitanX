import { useState } from "react";

function Contact() {

    const [form, setForm] = useState({

        name: "",
        email: "",
        phone: "",
        message: ""

    });


    const [sent, setSent] =
        useState(false);


    const handleChange = (e) => {

        const {
            name,
            value
        } = e.target;


        setForm((previous) => ({

            ...previous,

            [name]: value

        }));

    };


    const handleSubmit = (e) => {

        e.preventDefault();


        if (
            !form.name.trim() ||
            !form.email.trim() ||
            !form.phone.trim() ||
            !form.message.trim()
        ) {

            alert(
                "⚠️ الرجاء تعبئة جميع الحقول"
            );

            return;

        }


        setSent(true);


        setForm({

            name: "",
            email: "",
            phone: "",
            message: ""

        });


        setTimeout(() => {

            setSent(false);

        }, 5000);

    };


    return (

        <section
            id="contact"
            className="contact-section section"
        >

            <div className="container">

                <div className="contact-wrapper">


                    <div className="contact-info">

                        <span className="contact-label">
                            CONTACT TITAN X
                        </span>


                        <h2>

                            جاهز تصبح

                            <strong>
                                TITAN؟
                            </strong>

                        </h2>


                        <p>

                            لا تنتظر الوقت المناسب.
                            ابدأ اليوم وتواصل معنا
                            لمعرفة المزيد عن النادي
                            والاشتراكات.

                        </p>


                        <div className="contact-details">

                            <div className="contact-detail">

                                <span>📍</span>

                                <div>

                                    <strong>
                                        العنوان
                                    </strong>

                                    <p>
                                        صنعاء، شارع الدائري، قبل فتحة شارع صخر من الجهة الجنوبية
                                    </p>

                                </div>

                            </div>


                            <div className="contact-detail">

                                <span>📞</span>

                                <div>

                                    <strong>
                                        الهاتف
                                    </strong>

                                    <p>
                                        784 263 442
                                    </p>

                                </div>

                            </div>


                            <div className="contact-detail">

                                <span>✉️</span>

                                <div>

                                    <strong>
                                        البريد الإلكتروني
                                    </strong>

                                    <p>
                                        info@titanx.com
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >

                        <div className="form-header">

                            <h3>
                                أرسل لنا رسالة
                            </h3>

                            <p>
                                سنقوم بالتواصل معك قريباً.
                            </p>

                        </div>


                        <div className="form-group">

                            <label>
                                الاسم
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="أدخل اسمك"
                            />

                        </div>


                        <div className="form-group">

                            <label>
                                البريد الإلكتروني
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="example@email.com"
                            />

                        </div>


                        <div className="form-group">

                            <label>
                                رقم الهاتف
                            </label>

                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="784 263 442"
                            />

                        </div>


                        <div className="form-group">

                            <label>
                                رسالتك
                            </label>

                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="اكتب رسالتك هنا..."
                            ></textarea>

                        </div>


                        <button
                            type="submit"
                            className="btn submit-button"
                        >

                            إرسال الرسالة
                            <span>←</span>

                        </button>


                        {sent && (

                            <div className="success-message">

                                <span>
                                    ✓
                                </span>

                                تم إرسال رسالتك بنجاح!

                            </div>

                        )}

                    </form>

                </div>

            </div>

        </section>

    );

}

export default Contact;
