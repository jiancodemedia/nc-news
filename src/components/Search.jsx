import { useState } from "react"

function Search ({setSearchTerm}) {
    const [searchInput, setSearchInput] = useState('')
    const handleChange = (event) => {
        setSearchInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setSearchTerm(searchInput)
        setSearchInput('')
    }

return (
    <form onSubmit={handleSubmit}>
        <label >
            Search item:
          <input onChange={handleChange} value={searchInput}/>
        </label>
        <button>Search</button>
    </form>
)
}

export default Search