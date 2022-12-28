

function SearchBar({searchTerm, setSearchTerm}) {

    const handlechange= (e) => {
        setSearchTerm(e.target.value)
    }

    return(
        <div>  
            <input type="text" value={searchTerm} onChange={handlechange} placeholder="Type your favorite art here!"/>
        </div>
    )
};

export default SearchBar;