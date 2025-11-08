import React from 'react';
import { useLoaderData } from 'react-router';
import { ModelCard } from '../../Components/ModelCard';
import Banner from '../../Components/Banner';

const Home = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className=''>
            <Banner></Banner>
            
            <div>
                <h2 className='text-center text-xl font-bold mt-10'>Latest Model</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10'>
                {
                    data.map(model => <ModelCard key={model._id} model={model}/>)
                }
            </div>
        </div>
    );
};

export default Home;