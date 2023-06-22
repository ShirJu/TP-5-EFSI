

export default function Respuesta(bandera,puntos) {
    const VerificarRespuesta = (e) => {
     
        e.preventDefault();
    if (bandera=e.respuesta) {
    //punto=punto+1;
    
}
}
    return (
       
        <form onSubmit={(e) => VerificarRespuesta(e)}>
            <input type="text" name="respuesta" className="u-full-width" placeholder="Ingrese el nombre del país" />
            <button type="submit"  className="u-full-width button-primary">Validar</button>
        </form>

        
            
     
    )

}