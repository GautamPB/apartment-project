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

            <div className="bg-opacity-0 flex space-x-1 items-center border p-2">
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
        </div>
    )
}

export default Header
