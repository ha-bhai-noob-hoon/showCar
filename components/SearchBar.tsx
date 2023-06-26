'use client'
import { useState } from 'react';
import { SearchManufacturer } from './';


const SearchBar = () => {
    const [manufactutrer , setManufacturer] = useState('');


    const handleSearch = () => {

    }

    return ( 
        <form className="searchbar" onSubmit={handleSearch} action="">
            <div className="searchbar_item">
                <SearchManufacturer 
                    manufacturer = {manufactutrer}
                    setManufacturer = {setManufacturer}  
                />
            </div>
        </form>
     );
}
 
export default SearchBar;