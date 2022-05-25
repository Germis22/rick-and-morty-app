import React from 'react'

const Locations = ({locations = []}) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle">
        <thead className='table-secondary'>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Dimension</th>
          </tr>
        </thead>
        {locations.map((item, index) => (
          <tbody key={index}>
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.dimension}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default Locations