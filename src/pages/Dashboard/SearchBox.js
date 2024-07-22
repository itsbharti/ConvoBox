import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";


function SearchBox() {
  return (
    <div className='searchBox '>
        <div className='select'>
          <span ><FaArrowLeftLong className='arrow'/> Select Template</span>
        </div>
        <div className='search-template '>
          <input type='text' placeholder='Search Template Name ' className='input'></input>
          <GoSearch className='search-icn' />
        </div>
        
    </div>
  )
}

export default SearchBox