import React from 'react'

const Characters = ({characters = []}) => {
  return (
    <div className='row'>
        {characters.map((item, index) => (
            <div key={index} className="col">
                <div className='card mb-4' style={{minWidth: "200px"}}>
                    <img src={item.image} alt="" />
                    <div className='card-body'>
                        <h5 className='card-title'>{item.name}</h5>
                        <hr />
                        <p className='card-text'><strong>Species: </strong>{item.species}</p>
                        <p className='card-text'><strong>Location: </strong>{item.location.name}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Characters