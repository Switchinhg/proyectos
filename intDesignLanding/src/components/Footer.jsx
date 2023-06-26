import logo from '/logo.png'
export default function Footer() {
  return (
      <footer className="footer">
        <svg className="position" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0F2027" fillOpacity="1" d="M0,192L26.7,186.7C53.3,181,107,171,160,186.7C213.3,203,267,245,320,261.3C373.3,277,427,267,480,245.3C533.3,224,587,192,640,186.7C693.3,181,747,203,800,213.3C853.3,224,907,224,960,213.3C1013.3,203,1067,181,1120,154.7C1173.3,128,1227,96,1280,80C1333.3,64,1387,64,1413,64L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
        
        <div className="actualFooter">
            <div className="business">
                <div className='separador'>
                    <img className='logo' src={logo} alt="Elegance interiors Logo" />
                    <p >Elegance Interiors</p>
                </div>
                <p style={{paddingLeft:'1rem'}}>We transform spaces with elegance.</p>
            </div>
            <div className="dots">
                <div className="insideDot">
                    <div>   
                            <p className="title">Design Services</p>
                            <ul>
                                <li>Residential</li>
                                <li>Commercial</li>
                                <li>Consulting</li>
                                <li>Renovation</li>
                                <li>Remodeling</li>
                                <li>Lighting </li>
                                <li>furniture </li>
                            </ul>
                    </div>
                    <div>   
                            <p className="title">Projects</p>
                            <ul>
                                <li>Modern living.</li>
                                <li>Functional kitchen.</li>
                                <li>Elegant bedroom.</li>
                                <li>Commercial spaces.</li>
                                <li>Creative offices.</li>
                            </ul>
                    </div>
                </div>
                <div className="insideDot">
                    <div>   
                            <p className="title">Aproach</p>
                            <ul>
                                <li>Customized </li>
                                <li>High-quality </li>
                                <li>Functionality </li>
                                <li>Style </li>
                                <li>On-time</li>
                                <li>on-budget</li>
                            </ul>
                    </div>
                    <div>   
                            <p className="title">Contact Us</p>
                            <ul>
                                <li>Uruguay</li>
                                <li>2 400 40 65</li>
                                <li>elegant@gmail.com</li>
                                <li>9am-5pm</li>
                                <li>Instagram - Facebook</li>
                            </ul>
                    </div>
                </div>
            </div>
            <div>
            <p>© { new Date().getFullYear()} All Rights Reserved by Eleg. Int.</p>
            </div>
        </div>
    </footer>
  )
}
