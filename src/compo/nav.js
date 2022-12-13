import '../App.css';

function Nav() {
  return (
    <nav>
        <div className='kiri'>
            <div className='logo'>
                <h1>LOGO</h1>
            </div>
            
        </div>
        
        <div className='kanan'>
            <a href="#home">Home</a>
            <a href="#about">About us</a>
            <a href="#career">Career</a>
            <a href="#contact">Contact Us</a>
        </div>
    </nav>
  );
}

export default Nav;
