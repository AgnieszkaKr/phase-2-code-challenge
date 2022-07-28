import React from "react";

function SearchBar({search, setSearch, setIsSort, isSort}) {
  
  return (
    <div className="search">
      <input type="text" className="searchTerm" value={search} onChange={(e)=>setSearch(e.target.value)}/>
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
      <p>Sort by age:</p> 
      <input type="checkbox" onChange={()=>setIsSort(!isSort)}/>
    </div>
  );
}

export default SearchBar;