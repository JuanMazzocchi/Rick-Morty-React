import  imageRickMorty from "./img/rick-morty.png"
import './App.css';
import { useState } from "react";
import Characters from "./components/characters";
import Episodios from "./components/episodios";
 

function App() {
  const [characters, setCharacters] = useState(null);
  var pagina="https://rickandmortyapi.com/api/character/?page="
  var episode='https://rickandmortyapi.com/api/episode/'
  const [episodios, setEpisodios] = useState(null);
  const [proxPagina, setProxPagina] = useState(null);
  const [volverPagina, setVolverPagina] =useState(null);
   
  
  const reqApi = async ()=>{
    let x=prompt("que episodio quiere ver?");
    console.log(episode+x)
     const api = await fetch(episode+[x]);
     const episodiosApi = await api.json();      
     setEpisodios(episodiosApi);
    //  console.log(episodiosApi)
     }
  // const reqApi2 = async (x)=>{console.log(x)
      // const api = await fetch(x );
      // const characterApi = await api.json();      
      // setCharacters(characterApi);
      // console.log(x)
      
      // }
  // const reqApi3 = async ()=>{
  //     let genero = prompt("mujer u hombre (m/h) ?")
  //     let vivo = prompt("vivo o muerto (v/m)")
  //     var resto=""
  //     if (genero==="m") {if (vivo==="v"){ resto="gender=Female&status=Alive"} 
  //                        else {resto= "gender=Female&status=Dead"; }
  //                        }
  //     else { if (vivo==="v") { resto="gender=Male&status=Alive"; }              
  //                                else { resto="gender=Male&status=Dead";  }
  //                               }
  //       const api = await fetch("https://rickandmortyapi.com/api/character/?"+ resto)
  //       const characterApi = await api.json(); 
        
  //       setCharacters(characterApi.results);
        
  //                             }

  const reqApi4 = async () =>{
    let y= prompt("que pagina desea (1-42)")
    const api = await fetch(pagina+[y]);
      const characterApi = await api.json();      
      setCharacters(characterApi.results);
           
       
  }

  const reqApi5= async () =>{
   
    let genero=""
    let life=""
    if  (  document.getElementById('inputGroupSelect01').value==='Hombre'){ genero="Male"}
    else if( document.getElementById('inputGroupSelect01').value==='Sin Genero'){ genero="genderless"}
    else{genero="Female"};

    if (document.getElementById('inputGroupSelect02').value==='Vivo'){life="alive"}
    else if(document.getElementById('inputGroupSelect02').value==='Muerto'){life="dead"}
    else{life="unknown"} ;

    console.log(document.getElementById('inputGroupSelect02').value)
    const api = await fetch("https://rickandmortyapi.com/api/character/?gender="+genero+"&status="+life)
    const characterApi = await api.json();   
    console.log(characterApi.info.next)  ; 
    
    setCharacters(characterApi.results);
    setProxPagina(characterApi.info.next);
    setVolverPagina(characterApi.info.prev);
  };

  const proxima = async()=>{
    const api = await fetch (proxPagina);
    const characterApi = await api.json();

    setCharacters(characterApi.results);
    setProxPagina(characterApi.info.next);
    setVolverPagina(characterApi.info.prev);

  }

  const anterior = async()=>{
    const api = await fetch (volverPagina);
    const characterApi = await api.json();

    setCharacters(characterApi.results);
    setProxPagina(characterApi.info.next);
    setVolverPagina(characterApi.info.prev);


  }




    
  return (
    <div className="App">
      <header className="App-header">
       <h1 className="title">Rick & Morty</h1>
       
             
       {characters ? (<><Characters characters={characters} setCharacters={setCharacters}/></>) 
        : (
        <><img src= {imageRickMorty} alt="Rick & Morty" className="img-home"/>
       
       </>
       
       ) }
         
       {episodios ? (<Episodios episodios={episodios} setEpisodios={setEpisodios}/>) : (<></>)}
     
       {characters ? (<div className="botonera">
           <button onClick={anterior} className="btn-search"> Volver Pagina</button>
           <button onClick={proxima} className="btn-search">Proxima Pagina</button>
        </div>) : (<></>)}
        
         
        <div className="botonera">
       <button onClick={reqApi} className="btn-search">Busqueda por episodio</button>
        {/* {characters ? (<button onClick={proxima()}>next</button>) : ( <></>)} */}
       {/* <button onClick={reqApi3} className="btn-search">vivo/muerto & varon o mujer</button> */}
      
       
        <button onClick={reqApi4} className="btn-search">Busqueda de personajes por pagina</button>
       </div>
       {/* {characters ? (<Nuevo characters={characters}  />) : (<p>nada aun</p>)} */}
        
       <div class="input-group">
         <select class="custom-select" id="inputGroupSelect01">
         <option selected>Hombre</option>
         <option >Mujer</option>
         <option >Sin Genero</option>
         </select>
         <select class="custom-select" id="inputGroupSelect02">
         <option selected>Vivo</option>
         <option >Muerto</option>
         <option >Desconocido</option>

         </select>
       <div class="input-group-append">
          <button class=" btn-search" type="button"  onClick={reqApi5}>Buscar</button>
       </div>
      </div>
       
        
       
       
       
       
      </header>
     
    </div>
  );
}
 
export default App;
