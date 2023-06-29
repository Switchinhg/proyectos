import star from '/star.svg'
export default function Reviews() {
  return (
    <section className="reviews">
        <h3 className='title'>People and businesses love Elegance Interiors</h3>
        <p className='undertitle'>Check out a few of our customer stories</p>
        <div className='container'>
            <div className='review'>
                <div className='stars'>
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                </div>
                    <p className='text'>I am thrilled with the exceptional interior design work done by Elegance Interiors. They transformed my living space into a stylish and functional oasis. The attention to detail and choice of materials were impeccable. Highly recommended!</p>
                    <p className='reviewer'>Sarah D</p>
            </div>
            <div className='review'>
                <div className='stars'>
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                </div>
                    <p className='text'>Working with the interior design team was a dream come true. They truly understood my vision and brought it to life with their creativity and expertise. The result was a stunning space that exceeded my expectations. I couldn&lsquo;t be happier!</p>
                    <p className='reviewer'>John T</p>
            </div>
            <div className='review'>
                <div className='stars'>
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                </div>
                    <p className='text'>The interior designers at Elegance Interiors are truly gifted. They have an incredible ability to blend functionality and style seamlessly. They transformed my outdated office into a modern and inspiring workspace. I am incredibly grateful for their exceptional work.</p>
                    <p className='reviewer'>Mark H</p>
            </div>
            <div className='review'>
                <div className='stars'>
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                </div>
                    <p className='text'>Working with Elegance Interiors was a pleasure. Their professionalism and expertise exceeded our expectations. They beautifully captured our vision, creating a space that perfectly represents our brand. Highly recommended.</p>
                    <p className='reviewer'>Laura S</p>
            </div>
            <div className='review'>
                <div className='stars'>
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                </div>
                    <p className='text'>We collaborated with Elegance Interiors and were impressed by their attention to detail and design expertise. Their seamless integration with our construction work resulted in a stunning building. Commendable professionalism and commitment to excellence.</p>
                    <p className='reviewer'>Cynthia L</p>
            </div>
        </div>
    </section>
  )
}
