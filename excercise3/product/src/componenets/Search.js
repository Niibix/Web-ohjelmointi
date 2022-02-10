import React from 'react';


const Search = () => (
<form action="/" method="get">
<label htmlFor="header-search">
    <span className="visually-hidden">Search products</span>
</label>
<input
    type="text"
    id="header-search"
    placeholder="Hae "
    name="s" 
/>
<button type="submit">Search</button>
</form>
);
export default Search;