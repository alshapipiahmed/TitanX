import mapPhotoOne from "../assets/titan-x-map-1.jpg";
import mapPhotoTwo from "../assets/titan-x-map-2.jpg";
import mapPhotoThree from "../assets/titan-x-map-3.jpg";

const mapsUrl =
    "https://maps.app.goo.gl/pHUSKfZpu5v46AiU9";

function Gallery() {
    const images = [
        {
            src: mapPhotoOne,
            title: "داخل Titan X",
            description: "صورة من صفحة النادي على Google Maps"
        },
        {
            src: mapPhotoTwo,
            title: "أجواء النادي",
            description: "صورة من موقع Titan X في صنعاء"
        },
        {
            src: mapPhotoThree,
            title: "تجربة التدريب",
            description: "صورة من صور النادي على Google Maps"
        }
    ];

    return (
        <section className="gallery-section section" id="gallery">
            <div className="container">
                <div className="section-title">
                    <span>OUR GYM</span>
                    <h2>
                        جولة داخل <strong>النادي</strong>
                    </h2>
                    <p>
                        تعرّف على أجواء Titan X من خلال الصور المضافة
                        من صفحة النادي على Google Maps.
                    </p>
                </div>

                <div className="gallery-grid">
                    {images.map((image) => (
                        <article className="gallery-card" key={image.title}>
                            <img src={image.src} alt={image.title} />
                            <div className="gallery-caption">
                                <h3>{image.title}</h3>
                                <p>{image.description}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <a
                    className="gallery-map-link"
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    📍 شاهد الموقع والمزيد من الصور على Google Maps ←
                </a>
            </div>
        </section>
    );
}

export default Gallery;
