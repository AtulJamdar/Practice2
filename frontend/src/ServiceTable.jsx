// ServiceTable.jsx
export const ServiceTable = ({ services, onDelete, onEdit, vehicles }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Vehicle</th>
          <th>Service Type</th>
          <th>Date</th>
          <th>Cost</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {services.map((s) => (
          <tr key={s._id}>
            <td>
                <td>
  {typeof s.vehicle === 'object' 
    ? s.vehicle.registration_no 
    : vehicles.find((v) => v._id === s.vehicle)?.registration_no || s.vehicle}
</td>
            </td>
            <td>{s.serviceType}</td>
            <td>{s.scheduledDate?.slice(0,10)}</td>
            <td>{s.estimatedCost}</td>
            <td>{s.status}</td>
            <td>
              <button onClick={() => onEdit(s)}>Edit</button>
              <button onClick={() => onDelete(s._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}