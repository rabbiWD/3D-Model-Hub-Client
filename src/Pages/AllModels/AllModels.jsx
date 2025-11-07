import React from 'react';
import { useLoaderData } from 'react-router';
import { ModelCard } from '../../Components/ModelCard';

const AllModels = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
           <div className='text-2xl text-center font-bold'>All Models</div>
           <p className='text-center'>Explore 3d models.</p>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                data.map(model => <ModelCard key={model._id} model={model}/>)
            }
           </div>
        </div>
    );
};

export default AllModels;