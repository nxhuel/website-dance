import claseImg from '../assets/anto-danza.jpg';

export default function CarruselImgTeacher() {

    const imagenes = [
        claseImg,
    ];

    const titulo = "CLASES DE JAZZ CONTEMPORÁNEO"
    const parrafo = "Una clase pensada para el entrenamiento físico, técnico y coreográfico donde se transita el lenguaje por medio de secuencias, diagonales, piso, plies y barra. En este camino, un cuerpo físico y emocional, despierto y presente aprende, reconociendo, atravesando y creyendo en el proceso con la confianza y el amor, abrazando lo desconocido."

    return (
        <>
            <div className="teacher-img">
                {imagenes.map((imagen, index) => (
                    <img className='teacher-img-desing' key={index} src={imagen} alt={`imagen ${index + 1}`} />
                ))}
                <div className="teacher-title">
                    <h1>{titulo}</h1>
                </div>
                <div className="teacher-text">
                    <p>{parrafo}</p>
                </div>
                <div className="teacher-content-boton">
                    <button className='teacher-boton'>Consultar</button>
                </div>
            </div>
            <div className="choreographer-video">
                <video src="#"></video>
            </div>
        </>
    );
}