import logo from '/logo.png'

export default function Header() {
  return (
    <header className='header'>
        <div className='logoyname'>
            <img className='logo' src={logo} alt="Elegance interiors Logo" />
            <h2 className='companyName'>Elegance Interiors</h2>
        </div>
        <div >
            X   
        </div>
  </header>
  )
}
