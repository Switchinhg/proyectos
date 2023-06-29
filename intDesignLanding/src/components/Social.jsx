import img1 from '/interiorsocial.jpg'
import img2 from '/interiorsocial2.jpg'
import img3 from '/interiorsocial3.jpg'
export default function Social() {
  return (
    <section className="social">
        <div>
            <h3 className="title"> Follow Us on social</h3>
            <p className="undertitle">For the latest news and interior design tips</p>
        </div>
        <div className="images">
            <img src={img1} alt="Interior design 1" />
            <img src={img2} alt="interior design 2" />
            <img src={img3} alt="interior design 3" />
        </div>

    </section>
  )
}
