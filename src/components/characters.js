

export default function Characters(props){
    const {characters, setCharacters} = props;
    

    const resetCharacters =()=> {
         setCharacters(null)
    }

    return ( <div className="characters">
        <h1> Personajes</h1>
        <span className="back-home" onClick={resetCharacters}>Volver al home</span>
        <div className="container-characters">
            {characters.map((character,index)=>(
                <div className="character-container" key={index}>
                    <div>
                        <img src={character.image} alt={character.name}></img>
                    </div>
                    <div> <h3>{character.name}</h3>
                    <h6>
                        {(character.status === "Alive")? (<><span className="alive"/>Alive</>) : (<></>)}
                        {(character.status === "Dead") ? (<><span className="dead"/>Dead</>) : (<></>)}
                        {(character.status ==="Unknown") ? (<><span className="alive"/>Desconocido</>) : (<></>)}
                    </h6>
                    <p className="text-grey"><span>Episodios:</span>
                    <span>{character.episode.length}  </span>
                    </p>
                    <p>
                        <span className="text-grey">Especie:</span>
                        <span>{character.species}</span>
                    </p>
                    <p>
                        <span className="text-grey">Genero:</span>
                        <span>{character.gender}</span>
                    </p>
                    <p>
                        <span className="text-grey">Nro.id: </span>
                        <span>{character.id}</span>
                    </p>
                    <p>
                        <span className="text-grey">Origen: </span>
                        <span>{character.origin.name}</span><br></br>
                        {/* <span className="text-grey">Url: </span>
                        <span>{character.origin.url}</span> */}
                    </p>
                    </div> 
                    
                    </div>
                     
                    
            ))}
            </div>
            <span className="back-home" onClick={resetCharacters}>Volver a la Home</span>
            </div>
        
   
            
              );
              }