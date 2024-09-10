import { useState } from "react"

export default function GaleriaImagenes() {
    const imagenes = [
        {
            id: 1,
            src:"https://motos.honda.com.ar/uploads/modelos/28/images/sliders/115_0s-0115-0s-0img-xr250-diseno.jpg",
            alt: "XR 250"

        },
        {
            id: 2,
            src:"https://motos.honda.com.ar/uploads/modelos/54/images/colores/54c-0img-web-colores-cb300f-rojo.jpg",
            alt: "CB 300"

        },
        {
            id: 3,
            src:"https://motos.honda.com.ar/uploads/modelos/21/images/colores/21c-221c-2web-wave-2020-negra.jpg",
            alt: "Wave 110"

        },
        {
            id: 4,
            src:"https://motos.honda.com.ar/uploads/modelos/34/images/colores/34c-4web-cb125deluxe-plateada.jpg",
            alt: "Cb 125"

        },
        {
            id: 5,
            src:"https://motos.honda.com.ar/uploads/modelos/53/images/colores/53c-0web-glh150-imagenes-roja.jpg",
            alt: "glh 150"

        },
        {
            id: 6,
            src:"https://motos.honda.com.ar/uploads/modelos/26/images/colores/26c-126c-1img-xr150-blanca.jpg",
            alt: "Xr 150"

        }
    ];

    const [motosImagen, setMotosImagen]=useState(imagenes);
    const [inputValue, setInputValue] = useState("");

    const handleInputValue=(event)=>{
        setInputValue(event.target.value)
    }

    const addMoto=()=>{
        setMotosImagen([...motosImagen,
        {
            id: Math.random(),
            src: inputValue,
            alt: "Moto agregada por usuario"
        }])
        setInputValue("");
    }

  return (
    <>
        <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {
                motosImagen.map(moto=>{
                    return(
                        <img key={moto.id} src={moto.src} alt={moto.alt}/>
                    )
                    
                })
            }
            <div className="flex flex-col ">
                <input value={inputValue} onChange={handleInputValue} type="text" placeholder="Pone el link de la imagen a agregar" className="p-2 mx-2 bg-blue-500 text-white placeholder-white" />
                <button onClick={addMoto} className="bg-blue-600 text-white py-6 px-40 mx-2">Agregar otra moto<span className="text-5xl text-white flex justify-center">+</span></button>
            </div>
                
        </div>
    </>
  )
}
