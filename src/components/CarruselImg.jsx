import claseImg from '../assets/anto-danza.jpg';

export default function CarruselImg() {

    const imagenes = [
        claseImg,
        claseImg,
    ];

    return (
        <>
            <div className="choreographer-img">
                {imagenes.map((imagen, index) => (
                    <img className='choreographer-img-desing' key={index} src={imagen} alt={`Imagen ${index + 1}`} />
                ))}
            </div>
            <div className="choreographer-video">
                <video src="#"></video>
            </div>
        </>
    )
}