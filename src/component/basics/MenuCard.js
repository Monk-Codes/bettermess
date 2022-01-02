import React from 'react'

const menuCard = () => {
    return (
        <>
            <div className='card-container'>
                <div className='card'>
                    <div className='card-body'>
                        <span className='card-number card-circle subtle'>1</span>
                        <span className='card-author subtle'>Breakfast</span>
                        <h2 className='card-title'>Healthy Veggies</h2>
                        <span className='card-decription subtle'>
                            Really tastefull healthy mixed-veggies for morning people.
                            250g veggies includes 98kcal calorie and 22g of pure protien.</span>
                            <div className='card-read'>Read</div>
                    </div>
                    {/* <img src={images} alt="images" className='card-media' /> */}
                    <span className='card-tag subtle'>Order Now</span>
                </div>
            </div>
        </>
    )
}

export default menuCard
