import React from 'react'
import AiOutlineSearch from 'react-icons/ai'

function SearchBar() {
    const searchIcon=( <AiOutlineSearch size={26} className="text-gray-600 h-4 w-4 fill-current"/>);
  return (
    <div className='px-5 md:px-12'>
        <div class="pt-2 relative mx-auto text-white/80">
            <input class="border-2 border-gray-300 bg-white/30 h-10 px-5 pr-16 rounded-xl text-base focus:outline-none focus:border-primary"
                 type="search" name="search" placeholder="Search"/>
            {/* <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
            </button> */}
        </div>
    </div>
   
  )
}

export default SearchBar