import React from 'react'

function RightSection({
    name , 
    description ,
    link ,
    image
    }) {
    return ( 
        <div className='container'>
            <div className='row  '>
                <div className='col-6 mt-5 pt-5 '>
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <a href="">{link}</a>
                </div>
                <div className='col-6  p-5'>
                    <img src={image}/>
                </div>

            </div>
        </div>
     );
}

export default RightSection;