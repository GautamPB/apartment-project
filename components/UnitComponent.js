import Image from 'next/image'
import { ChevronRightIcon } from '@heroicons/react/solid'

const UnitComponent = ({ id, image, name, rating, area, price, location }) => {
    return (
        <div className="mb-4 flex items-center justify-between py-4 pl-4 border">
            {/* left side */}
            <div className="flex">
                <Image src={image} width={200} height={100} alt="" />
                <div className="flex flex-col ml-2">
                    <h1 className="font-semibold text-gray-600">{name}</h1>
                    <h1 className="text-gray-400">{location}</h1>
                </div>
            </div>

            {/* middle side */}
            <div>
                <h1>Area</h1>
                <h1>{area}</h1>
            </div>

            {/* right side */}
            <div className="flex items-center justify-between h-full cursor-pointer">
                <div className="flex flex-col">
                    <h1>Price</h1>
                    <h1>{price}</h1>
                </div>
                <ChevronRightIcon className="h-8 bg-[#FE9E16] text-white ml-10" />
            </div>
        </div>
    )
}

export default UnitComponent
