import React from 'react'
import Heading from './Heading'
import Link from './Link'

const services = [
    { heading: 'Search engine optimization', colorCode: 1, image: './search_engine.png'},
    { heading: 'Pay-per-click advertising', colorCode: 2, image: './pay-per-click.png'},
    { heading: 'Social Media Marketing', colorCode: 3, image: ''},
    { heading: 'Email Marketing', colorCode: 1, image: ''},
    { heading: 'Content Creation', colorCode: 2, image: ''},
    { heading: 'Analytics and Tracking', colorCode: 4, image: ""},
]



const Services = () => {
  return (
    <div className='grid grid-cols-2 gap-10'>{services.map((service, index) => (
        <div key={index} className={`flex justify-between items-center rounded-4xl p-12 border shadow-[0px_5px_0px_0px_#000000] min-h-80 ${service.colorCode === 1 ? 'bg-grey' : service.colorCode === 2 ? 'bg-green' : 'bg-black'}`}>
            <div className='flex flex-col w-1/2 h-full justify-between'>
                <Heading className={'!text-3xl'} heading={service.heading} backgroundColor={service.colorCode === 1 || service.colorCode === 4 ? 'bg-green' :  'bg-white'}/>
                <Link style={service.colorCode === 1 || service.colorCode === 2 ? 'black' : 'white_2'}>Learn More</Link>
            </div>
            <div className='w-52'>
                <img src={service.image} alt="" />
            </div>
        </div>
    ))}</div>
  )
}

export default Services