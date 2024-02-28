import instagramLogo from '../assets/instagram.svg';
import CarruselImg from './CarruselImg';
import CarruselImgDancer from './CarruselImgDancer';
import CarruselImgTeacher from './CarruselImgTeacher';
import FormTeacher from './FormTeacher';
import '../styles/Contents.css'
import claseImg from '../assets/anto-danza.jpg';


export default function Contents() {
    return (
        <>
            <div className="content">
                <p className='content-text'>
                    Soy bailarina, docente y coreógrafa, egresada de la Universidad Nacional de las Artes (U.N.A) en la Licenciatura en Composición Coreográfica de ESEA en Danza Aida Mastrazzi. Poseo título de intérprete y del nivel terciario, con la distinción de profesora de danza clásica y contemporánea. Además, soy abogada graduada de la Universidad de Buenos Aires (U.B.A).

                </p>
                <div className="content-boton">
                    <button className='boton'><img className='imagen-boton' src={instagramLogo} /> antonellatisera</button>
                </div>
            </div>

            <div className="subcontent">
                <h1>COREÓGRAFA</h1>
            </div>
            <article className='article'>
                <div className="text-choreographer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rem sit quaerat, ratione quas ullam nam! Repellendus blanditiis aliquam, facilis culpa ratione inventore alias iusto modi expedita? Ipsa, blanditiis maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rem sit quaerat, ratione quas ullam nam! Repellendus blanditiis aliquam, facilis culpa ratione inventore alias iusto modi expedita? Ipsa, blanditiis maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempora necessitatibus deleniti quo debitis sed animi aliquid magnam, nisi sunt? Recusandae porro, alias quis odit dolorem fugiat magni consectetur ipsam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, natus! Perspiciatis, iste ad sequi dolor accusantium provident iusto tempora et error. Dolores libero temporibus tempora dicta id. Saepe, aliquid laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique deleniti iure nam dolores, quidem, aperiam sed facilis natus quod, voluptate eligendi quos sit alias asperiores molestiae! Repellat numquam exercitationem quam!
                    </p>
                </div>
                <CarruselImg />
            </article>

            <div className="subcontent">
                <h1>BAILARINA</h1>
            </div>
            <article className='article'>
                <div className="text-choreographer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rem sit quaerat, ratione quas ullam nam! Repellendus blanditiis aliquam, facilis culpa ratione inventore alias iusto modi expedita? Ipsa, blanditiis maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempora necessitatibus deleniti quo debitis sed animi aliquid magnam, nisi sunt? Recusandae porro, alias quis odit dolorem fugiat magni consectetur ipsam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, natus! Perspiciatis, iste ad sequi dolor accusantium provident iusto tempora et error. Dolores libero temporibus tempora dicta id. Saepe, aliquid laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique deleniti iure nam dolores, quidem, aperiam sed facilis natus quod, voluptate eligendi quos sit alias asperiores molestiae! Repellat numquam exercitationem quam!
                    </p>
                </div>
                <div className="dancer-img">
                    <img className='dancer-img-desing-one' src={claseImg} alt="" />
                </div>
                <CarruselImgDancer />
            </article>

            <div className="subcontent">
                <h1>DOCENTE</h1>
            </div>
            <article className='article'>
                <div className="text-choreographer">
                    <p>Mis clases:</p>
                </div>
                <CarruselImgTeacher />
                <div className="text-teacher">
                    <p className='text-teacher-responsive'>Consultá por seminarios en tu lugar o inscripción en mis clases en PISO 2 en movimiento.</p>
                </div>
                <FormTeacher />
            </article>
        </>
    )
}