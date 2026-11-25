import React, { useEffect, useState } from 'react'
import { ServiceForm } from './ServiceForm';
import { ServiceTable } from './ServiceTable';

export const Services = () => {
    const [services, setServices] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [formData, setFormData] = useState({
        vehicle: "",
        serviceType: "",
        scheduledDate: "",
        estimatedCost: "",
        serviceCenter: "",
        notes: "",
        status: "Scheduled"
    });
    const [editingId, setEditingId] = useState(null);

//getdata
    useEffect(() => {
    const fetchData = async () => {
        const getServices = await fetch('http://localhost:3000/api/services');
        const servires = await getServices.json();
        setServices(servires);
        console.log(servires);

        const getVehical = await fetch('http://localhost:3000/api/vehicles');
        const vehires = await getVehical.json();
        setVehicles(vehires);
        console.log(vehires);
    }
    fetchData();
}, []);


const handleOnChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
        ...prev,
        [name]:value
    }));
}

const handleEdit = (s) => {
    setFormData({
        vehicle: s.vehicle?._id || s.vehicle || "",
        serviceType: s.serviceType,
        scheduledDate: s.scheduledDate?.slice(0,10) || "",
        estimatedCost: s.estimatedCost,
        serviceCenter: s.serviceCenter,
        notes: s.notes,
        status: s.status
    })
    setEditingId(s._id)
} 

const handleSubmit = async (e) => {
    e.preventDefault();
    if(editingId) {
        const updatedService = await fetch('http://localhost:3000/api/services/' + editingId,
        {
          method:"PUT",
          headers:{'Content-Type' : 'application/json'},
          body:JSON.stringify(formData)
        }
       ) 
       const result = await updatedService.json();
       setServices(services.map((v) => v._id === editingId ? result : v));
       setEditingId(null);
       setFormData({
        vehicle: "",
        serviceType: "",
        scheduledDate: "",
        estimatedCost: "",
        serviceCenter: "",
        notes: "",
        status: "Scheduled"
       });
    }else{

        const response = await fetch('http://localhost:3000/api/services', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  if(!response.ok) return;
  const result = await response.json();
  setServices([...services, result]);
            setFormData({
                vehicle: "",
        serviceType: "",
        scheduledDate: "",
        estimatedCost: "",
        serviceCenter: "",
        notes: "",
        status: "Scheduled"
            });
        }
    }

const handleDelete = async (id) => {
    const ok = window.confirm('Are you sure');
    if(!ok) return;
    const deleteService = await fetch('http://localhost:3000/api/services/' + id, {
        method:'DELETE'
    });

    if(!deleteService.ok){
        return;
    }

    setServices(services.filter((s) => s._id !== id));
}


  return (
    <>
        <h3>Services</h3>
    <ServiceForm 
      formData={formData}
      vehicles={vehicles}
      onChange={handleOnChange}
      onSubmit={handleSubmit}
      editingId={editingId}
    />
    <ServiceTable 
      services={services}
      onDelete={handleDelete}
      onEdit={handleEdit}
      vehicles={vehicles}
    />
    </>
  )
}
