import React from 'react'

const Episodes = ({episodes = []}) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle">
        <thead className='table-secondary'>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Air date</th>
            <th scope="col">Episode</th>
          </tr>
        </thead>
        {episodes.map((item, index) => (
          <tbody key={index}>
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.air_date}</td>
              <td>{item.episode}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}

export default Episodes