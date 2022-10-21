import { React, useState, useEffect } from "react";
import axios from "axios";
import Pokemonlist from "./components/Pokemonlist";
import Button from "./components/Button";
function App() {
  const [pokemen, seTPokemen] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cuurentpage , setCuurentpage]= useState("https://pokeapi.co/api/v2/pokemon");
  const [nextpage , setNextpage] = useState();
  const [previouspage , setPreviouspage] = useState();
  useEffect(() => {
    let cancel ;
    setLoading(true)
    axios
      .get(cuurentpage ,{
        cancelToken: new axios.CancelToken((c)=> (cancel = c)),
      })
      .then((Response) => {
        seTPokemen(Response.data.results.map((p) => p.name));
        setLoading(false)
        setNextpage(Response.data.next)
        setPreviouspage(Response.data.previous)
        
      }).catch((error) => {console.log(error);
      setLoading(false)
      });
      return ()=>{        cancel();
      }
      
  }, [cuurentpage]);

  if(loading) return "loading";
  function gotonextpage(){
    setCuurentpage(nextpage);
  }
  function gotopreviouspage(){
    setCuurentpage(previouspage);
  }
  return (
    <div>
      <Pokemonlist pokemen={pokemen} />
      <Button   nextpage = {nextpage ? gotonextpage : null} previouspage= {previouspage ? gotopreviouspage : null}/>
    </div>
  );
}

export default App;
