export default function Episodios(props){
    const {episodios, setEpisodios} = props;

    const resetCharacters =()=> {
         setEpisodios(null)
    }

    return ( <div >
         
        <span  className="back-home" onClick={resetCharacters}>Reset</span>
        <div className="container-characters" >
            
                <div  className="character-container" >
                     
                    <div> <h4>Nombre del Episodio: {episodios.name}</h4>
                    
                    <p className="text-grey"><span>Id:</span>
                    <span>{episodios.id}  </span>
                    </p>
                    <p className="text-grey"><span>Episodio/Temporada: </span>
                    <span>{episodios.episode}  </span>
                    </p>
                    <p className="text-grey"><span>Fecha de estreno:  </span>
                    <span>{episodios.air_date}  </span>
                    </p>
                 
                    
                    </div> 
                    </div>
                    
           
            </div>
            {/* <span className="back-home" onClick={resetCharacters}>Volver a la Home</span> */}
            </div>
        
   
            
              );
              }