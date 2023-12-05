import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../additional/Loading';
import api from "../../network/network";
import axios from 'axios';

const Parts = () => {
  const [parts, setParts] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const navigate = useNavigate();
  // Make a request for a user with a given ID
  useEffect(() => {
    setDataLoading(true);
    axios
      .get(`${api}/parts`)
      .then((resp) => {
        // handle success
        setParts(resp.data);
        setDataLoading(false);
      })
      .catch((error) => {
        setDataLoading(false);
        // handle error
        console.log(error);
      });
  }, []);

  if (dataLoading) {
    return <Loading></Loading>;
  }
  
  return (
    <div>
      <h1 className='text-secondary font-["Aclonica"] text-4xl font-light text-center mt-28 mb-16 '>
        AVAILABLE PARTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-6 lg:px-20">
        {parts?.map((part) => (
          <div
            data-aos="fade-up"
            key={part?._id}
            className="card card-compact shadow-md hover:-translate-y-6 hover:scale-105 hover:shadow-xl duration-700"
          >
            <figure>
              <img className="w-[220px]" src={part?.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary">{part.name}</h2>
              <div className="text-stone-500 text-[17px]">
                <p className="mb-1">
                  Minimum Order: {part.minimumQuantity} pcs
                </p>
                <p className="">Available Now: {part.avaailableParts} pcs</p>
              </div>
              <p className=" text-stone-400">{part.describe}</p>
              <div className="card-actions items-center justify-end">
                <p className="text-xl font-bold	">
                  <span className="text-primary">$</span>
                  {part.price}
                </p>
                <button
                  onClick={() => navigate(`/purchase/${part?._id}`)}
                  className="btn bg-primary border-primary rounded hover:border-primary hover:bg-white hover:text-primary"
                >
                  Purchase Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parts;