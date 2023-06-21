import imgShow from '/interior.jpg'
export default function SeccionShowing() {
  return (
    <div className='interiorShowing'>
        <div><img src={imgShow} alt="Interior design concept" /></div>
        <div className='textos'>

            <h3 className='heading'>Start making your dream space</h3>
            <div className='infoTextos'>
              <p>In every project we strive to capture our clients&rsquo; 
                  essence and translate into a unique design.</p>

              <p>The combination of colors,textures and decorative
                  elements create a warm and personalized atmosphere
                    that caters to their needs an tastes.</p>
            </div>

        </div>

            <ul className='info'>
              <li className='infoDiv'>
                  <div>
                    <p className='number'>1</p>
                  </div>
                   <p className='infotext'> We focus on <strong>creating spaces</strong> that are <strong>practical</strong> and efficient, optimizing the use of every square meter.</p>
              </li>
              <li className='infoDiv'>
                  <div>
                    <p className='number'>2</p>
                  </div>
                 <p className='infotext'> We develop a <strong>unique design</strong> that reflects our client&rsquo;s personality, preferences and lifestyle.</p>

              </li>
              <li className='infoDiv'>
                  <div>
                    <p className='number'>3</p>
                  </div>
                  <p className='infotext'> We aim to create a <strong>harmonious</strong> and <strong>sophisticated</strong> ambient <strong>paying attention</strong> to the selection of furniture, lighting and accessories. </p>
              </li>
            </ul>

    </div>
  )
}
