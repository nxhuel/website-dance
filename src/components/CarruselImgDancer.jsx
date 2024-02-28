import claseImg from '../assets/anto-danza.jpg';

export default function CarruselImg() {

    const imagenes = [
        claseImg,
        claseImg,
        claseImg,
        claseImg,
    ];

    return (
        <>
            <div className="dancer-img">
                {imagenes.map((imagen, index) => (
                    <img className='dancer-img-desing-two' key={index} src={imagen} alt={`Imagen ${index + 1}`} />
                ))}
            </div>
            <div className="choreographer-video">
                <video src="#"></video>
            </div>
        </>
    )
}