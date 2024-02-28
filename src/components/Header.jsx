import AntoImg from '../assets/anto-header.jpg'
import '../styles/Header.css'

export default function Header() {
    return (
        <>
            <div className="header-container">
                <div className="header-img">
                    <img src={AntoImg} alt="" />
                </div>
            </div>
            <div className="header-title">
                <h1>ANTONELLA TISERA</h1>
                <h3>Bailarina docente y coreógrafa</h3>
            </div>
            
            <p className='header-text'>Guía cada paso con pasión y confianza</p>
        </>
    )
}