import React, {useState, useEffect} from 'react'

export const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);
    const [formData, setFormData] = useState({
      registration_no: "",
      make: "",
      model: "",
      manufacturing_year: "",
      fuel_type: "Petrol",
      odometer: ""
});

    //get data
    useEffect(() => {
      const fetchVechicles = async () => {
        const response = await fetch('http://localhost:3000/api/vehicles');

        if(!response) {
            throw Error
            
        }

        const result = await response.json();

        console.log(result);
        setVehicles(result);
      }
      fetchVechicles();
        
    },[])

    //post data 
    const handlesubmit = async (e) => {
      e.preventDefault();
      const postvehicle = await fetch('http://localhost:3000/api/vehicles',
        {
          method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
        }
      )
    }
  return (
    <>
      <div>
        vehicles : {vehicles.map((v) => <p key={v._id}>{v.registration_no}</p>)}
      </div>
    </>

  )
}
