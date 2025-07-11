import React from "react";

const CardStores = ({
  image,
  icon: Icon,
  title,
  description,
  location,
  alt,
}) => {
  return (
    <>
      {" "}
      <div className='bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300'>
        <img
          src={`${image}`}
          alt={`${alt}`}
          className='w-full h-48 object-cover'
        />
        <div className='p-6'>
          <div className='flex items-center mb-2'>
            {Icon ? <Icon className='text-blue-600 mr-2' /> : <>N/A</>}

            <h3 className='text-xl font-semibold'>{title || "N/A "}</h3>
          </div>
          <p className='text-gray-600 mb-4'>{description || "N/A"}</p>
          <p className='text-sm text-gray-500'>{location || "N/A"}</p>
        </div>
      </div>
    </>
  );
};

export default CardStores;
