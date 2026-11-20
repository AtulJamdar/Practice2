import React, {useState, useEffect} from 'react'

export const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);
    const [formData, setFormData] = useState({
      registration_no: "",
      make: "",
      model: "",
      manufacturing_year: "",
      fuel_type: "",
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
    const handleSubmit = async (e) => {
      e.preventDefault();
      const postvehicle = await fetch('http://localhost:3000/api/vehicles',
        {
          method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
        }
      )
      const result = await postvehicle.json();
      setVehicles ([...vehicles, result]);
      setFormData({
        registration_no: "",
        make: "",
        model: "",
        manufacturing_year: "",
        fuel_type: "",
        odometer: ""
      })
      
    }

    const handleOnchange = (e) => {
      const {name,value} = e.target;
      setFormData((prev) => ({
        ...prev,
        [name] : value
      }));
    }
  return (
    <>
      <div>
        vehicles : {vehicles.map((v) => <p key={v._id}>{v.registration_no}</p>)}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md p-4 border rounded-lg bg-white shadow">
  <input name="registration_no" value={formData.registration_no} onChange={handleOnchange} />
  <input name="make" value={formData.make} onChange={handleOnchange} />
  <input name="model" value={formData.model} onChange={handleOnchange} />
  <input name="manufacturing_year" value={formData.manufacturing_year} onChange={handleOnchange} />
  <input name="fuel_type" value={formData.fuel_type} onChange={handleOnchange} />
  <input name="odometer" value={formData.odometer} onChange={handleOnchange} />
  ...
  <button type="submit">Add Vehicle</button>
</form>
    </>

  )
}
