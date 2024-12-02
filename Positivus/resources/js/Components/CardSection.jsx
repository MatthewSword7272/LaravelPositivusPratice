import Card from './Card'

export default function CardSection() {
    // Dummy Data fro Cards
    //TODO: Get Card Info from database
    const cardsInfo = [
        {
            title: 'Search engine\noptimisation',
            image: '/images/card_image_1.svg',
            id: 1,
        },
        {
            title: 'Pay-per-click\nadverting',
            image: '/images/card_image_2.svg',
            id: 2,
        },
        {
            title: 'Social Media\nMarketing',
            image: '/images/card_image_3.svg',
            id: 3,
        },
        {title: 'Email\nMarketing', image: '/images/card_image_4.svg', id: 1},
        {
            title: 'Content\nCreation',
            image: '/images/card_image_5.svg',
            id: 2,
        },
        {
            title: 'Analytics and\nTracking',
            image: '/images/card_image_6.svg',
            id: 3,
        },
    ]

    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 mb-24 gap-10">
            {cardsInfo.map((card, index) => (
                // Passes Cards Title, Image and Id dor coloring
                <Card key={index} title={card.title} image={card.image} id={card.id} />
            ))}
        </div>
    )
}
