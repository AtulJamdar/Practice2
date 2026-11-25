// ServiceForm.jsx
export const ServiceForm = ({ formData, vehicles, onChange, onSubmit, editingId }) => {
  return (
    <form onSubmit={onSubmit}>
      <select name="vehicle" value={formData.vehicle} onChange={onChange}>
        <option value="">Select Vehicle</option>
        {vehicles.map((v) => (
          <option key={v._id} value={v._id}>{v.registration_no}</option>
        ))}
      </select>

      <input name="serviceType" value={formData.serviceType} onChange={onChange} placeholder="Service Type" />
      <input name="scheduledDate" type="date" value={formData.scheduledDate} onChange={onChange} />
      <input name="estimatedCost" type="number" value={formData.estimatedCost} onChange={onChange} placeholder="Estimated Cost" />
      <input name="serviceCenter" value={formData.serviceCenter} onChange={onChange} placeholder="Service Center" />
      <input name="notes" value={formData.notes} onChange={onChange} placeholder="Notes" />

      <button type="submit">{editingId ? "Update Service" : "Add Service"}</button>
    </form>
  )
}