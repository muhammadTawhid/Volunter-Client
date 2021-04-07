import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
   const [imageURL, setImageURL] = useState(null)


    const onSubmit = data =>{
        const eventData = {
            name: data.name,
            imageURL : imageURL
        };
        const url = `http://localhost:5000/addEvent`
         console.log(eventData);
         fetch(url, {
             method: 'POST',
             headers:{
                  'content-type' : 'application/json'
                },
                body: JSON.stringify(eventData)
         })
         .then(res => console.log('server side res'))
        };

    const handleImageUpload = event =>{
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'be8a4cc0a70c10d0afc35bcd7b9def3d');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

      <input defaultValue="new exciting event" {...register("name")} />
      <br/>
      <input type="file" {...register("exampleRequired")} onChange={handleImageUpload} />
      
      {/* {errors.exampleRequired && <span>This field is required</span>} */}
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddEvents;