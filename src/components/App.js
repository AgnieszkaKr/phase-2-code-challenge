import React, {useState, useEffect} from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {

  const[planeteers, setPlaneteers]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8003/planeteers')
    .then(req=> req.json())
    .then(res => setPlaneteers(res))
  }, [])
  
  const[search, setSearch]=useState('')
  // name or bio match searching value
  let filteredPlaneteers = planeteers.filter(planeteer => {
    return planeteer.name.toLowerCase().includes(search.toLowerCase()) || planeteer.bio.toLowerCase().includes(search.toLowerCase()) 
  })
  console.log(filteredPlaneteers)
  const[isSort, setIsSort]=useState(false) 
  
  console.log(isSort)
  if (isSort){
    let sortedPlaneteers = filteredPlaneteers.sort((a,b) => ((new Date()).getFullYear() - parseInt(a.born) > (new Date()).getFullYear() - parseInt(b.born)) ? 1 : -1)
     filteredPlaneteers = sortedPlaneteers}
  
  return (
    <div>
      <Header />
      <SearchBar search={search} setSearch={setSearch} setIsSort={setIsSort} isSort={isSort}/>
      <RandomButton />
      <PlaneteersContainer planeteers={filteredPlaneteers}/>
    </div>
  );
}

export default App;
