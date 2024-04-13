import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Header() {
  return (
    <div className='bg-[#003580] text-white flex justify-center'>
      <div className='w-full max-w-5xl mt-5 mb-24 '>
      <div className='flex justify-between'>
        <div>
        <FontAwesomeIcon icon={faBed} />
        <span>Stays</span>
        </div>
        <div>
        <FontAwesomeIcon icon={faPlane} />
        <span>Flights</span>
        </div>
        <div>
        <FontAwesomeIcon icon={faCar} />
        <span>Car rentals</span>
        </div>
        <div>
        <FontAwesomeIcon icon={faBed} />
        <span>Attractions</span>
        </div>
        <div>
        <FontAwesomeIcon icon={faTaxi} />
        <span>Airport taxis</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header