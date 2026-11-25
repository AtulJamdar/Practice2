import React, {useState, useEffect} from 'react'

export const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);
    const [editingId, setEditingId] = useState(null);
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

    //post data  and edit data
    const handleSubmit = async (e) => {
      e.preventDefault();

      if(editingId){
        

       const updatedVehical = await fetch('http://localhost:3000/api/vehicles/' + editingId,
        {
          method:"PUT",
          headers:{'Content-Type' : 'application/json'},
          body:JSON.stringify(formData)
        }
       ) 
       const result = await updatedVehical.json();
       setVehicles(vehicles.map((v) => v._id === editingId ? result : v));
       setEditingId(null);
       setFormData({
        registration_no: "",
  make: "",
  model: "",
  manufacturing_year: "",
  fuel_type: "",
  odometer: ""
       });
      }else{
        const postvehicle = await fetch('http://localhost:3000/api/vehicles/',
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
      
      
    }

    const handleUpdateVehical =  (v) =>{

      setFormData({
        registration_no: v.registration_no,
        make: v.make,
        model: v.model,
        manufacturing_year: v.manufacturing_year,
        fuel_type: v.fuel_type,
        odometer: v.odometer
      });

      setEditingId(v._id);

    }

    const handledeleteVehical = async (id) => {
      const ok = window.confirm("Are you sure");
      if(!ok) return;
      const deletevehical = await fetch('http://localhost:3000/api/vehicles/' + id, 
        {
          method:'DELETE',
    
        }
      )
      if(!deletevehical.ok){
        return;
      }

      setVehicles(vehicles.filter((v) => v._id !== id));

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
       <h3>vehicles :</h3> 
      </div>

      <table className="table">
  <thead>
    <tr>
      <th scope="col">Registration No</th>
      <th scope="col">Make</th>
      <th scope="col">Model</th>
      <th scope="col">Manufacturing_year</th>
      <th scope='col'>fuel_type</th>
      <th scope='col'>Odometer</th>
    </tr>
  </thead>
  <tbody>
    {vehicles.map((v) => (
    <tr key={v._id}>
      <th scope="row">1</th>
      <td>{v.registration_no}</td>
      <td>{v.make}</td>
      <td>{v.model}</td>
      <td>{v.manufacturing_year}</td>
      <td>{v.fuel_type}</td>
      <td>{v.odometer}</td>
      <td><button onClick={() => handledeleteVehical(v._id)}>Delete</button></td>
      <td><button onClick={() => handleUpdateVehical(v)}>Edit</button></td>
    </tr>
    ))}
  </tbody>
</table>


      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md p-4 border rounded-lg bg-white shadow">
  <input name="registration_no" value={formData.registration_no} onChange={handleOnchange} className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-black" placeholder="MH12AB1234" />
  <input name="make" value={formData.make} onChange={handleOnchange} className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-black" placeholder='make'/>
  <input name="model" value={formData.model} onChange={handleOnchange} className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-black" placeholder='model '/>
  <input name="manufacturing_year" type='number' value={formData.manufacturing_year} onChange={handleOnchange} className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-black" placeholder='Manufacturing year 2004'/>
  <input name="fuel_type" value={formData.fuel_type} onChange={handleOnchange} className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-black" placeholder='Fule type'/>
  <input name="odometer" type='number' value={formData.odometer} onChange={handleOnchange} className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-black" placeholder='odometer 203'/>
  ...
  <button type="submit">{editingId ? "Update Vehicle" : "Add Vehicle"}</button>
</form>
    </>

  )
}
