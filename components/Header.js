import { FilterIcon } from '@heroicons/react/solid'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { useState } from 'react'

const Header = () => {
    const [search, setSearch] = useState('')

    return (
        <div className="mb-5">
            <h1 className="font-bold text-[1.7rem] mb-5">
                Find the right unit for you
            </h1>

            <div className = 'group relative'>
            <div className="bg-opacity-0 flex space-x-1 items-center border p-2 relative">
                <FilterIcon className="h-6" />
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Filter: Category"
                    className="w-full p-2 border-none outline-none"
                />
                <ArrowDropDownIcon className="cursor-pointer" />
                </div>

                <div className = 'hidden group-hover:flex flex-col mt-2'>
                    <h1 className = 'cursor-pointer font-600 hover:bg-gray-200 p-4' onClick = {() => setSearch('Area')} >Area</h1>
                    <h1 className = 'cursor-pointer font-600 hover:bg-gray-200 p-4' onClick = {() => setSearch('Type')}>Type</h1>
                    <h1 className = 'cursor-pointer font-600 hover:bg-gray-200 p-4' onClick = {() => setSearch('Price/month')}>Price/month</h1>
                    <h1 className = 'cursor-pointer font-600 hover:bg-gray-200 p-4' onClick = {() => setSearch('Access')}>Access</h1>
                    <h1 className = 'cursor-pointer font-600 hover:bg-gray-200 p-4' onClick = {() => setSearch('Elevator Available')}>Elevator Available</h1>
                </div>
            </div>
        </div>
    )
}

export default Header
