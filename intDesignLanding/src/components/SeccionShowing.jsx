import imgShow from '../assets/interior.jpg'
export default function SeccionShowing() {
  return (
    <div className='interiorShowing'>
        <div><img src={imgShow} alt="Interior design concept" /></div>
        <div className='textos'>
            <h3 className='heading'>Start making your dream space</h3>
            <p>In every project we strive to capture our clients&rsquo; essence and translate into a unique design.  </p>
            <p>The combination of colors,textures and decorative elements create a warm and personalized atmosphere that caters to their needs an tastes.   </p>
        </div>
    </div>
  )
}
