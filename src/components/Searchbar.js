

function SearchBar({searchTerm, setSearchTerm}) {

    const handlechange= (e) => {
        setSearchTerm(e.target.value)
    }

    return(
        <div>  
            <input className="searchBar"type="text" value={searchTerm} onChange={handlechange} placeholder="Search"/>
        </div>
    )
};

export default SearchBar;