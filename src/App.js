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
  
  
  
  const reqApi = async ()=>{
    let x=prompt("que episodio quiere ver?");
    console.log(episode+x)
     const api = await fetch(episode+[x]);
     const episodiosApi = await api.json();      
     setEpisodios(episodiosApi);
     console.log(episodiosApi)
     }
  // const reqApi2 = async ()=>{
  //     const api = await fetch("https://rickandmortyapi.com/api/character/?page=2");
  //     const characterApi = await api.json();      
  //     setCharacters(characterApi.results);
  //     }
  // const reqApi3 = async ()=>{
  //       const api = await fetch("https://rickandmortyapi.com/api/character/?page=3");
  //       const characterApi = await api.json();      
  //       setCharacters(characterApi.results);
  //         }
  const reqApi4 = async () =>{
    let y= prompt("que pagina desea")
    const api = await fetch(pagina+[y]);
      const characterApi = await api.json();      
      setCharacters(characterApi.results);
      console.log(characterApi)

  }

  
  // const mujeres = async ()=>{
  //   const api = await fetch("https://rickandmortyapi.com/api/character/?gender=female");
  //   const characterApi = await api.json();      
  //   setCharacters(characterApi.results);
  // }
  // console.log(characters)
  
  
  
  return (
    <div className="App">
      <header className="App-header">
       <h1 className="title">Rick & Morty</h1>
       
             
       {characters ? (<Characters characters={characters} setCharacters={setCharacters}/>) 
        : (
        <><img src= {imageRickMorty} alt="Rick & Morty" className="img-home"/>
       
       </>
       
       ) }
       {episodios ? (<Episodios episodios={episodios} setEpisodios={setEpisodios}/>) : (<></>)}
     
       

         
        <div className="botonera">
       <button onClick={reqApi} className="btn-search">Busqueda por episodio</button>
       {/* <button onClick={reqApi2} className="btn-search">2</button>
       <button onClick={reqApi3} className="btn-search">3</button> */}
       
        <button onClick={reqApi4} className="btn-search">Busqueda de personajes por pagina</button>
       </div>
       {/* {characters ? (<Nuevo characters={characters}  />) : (<p>nada aun</p>)} */}
        


       
        
       
       
       
       
      </header>
    </div>
  );
}
 
export default App;
