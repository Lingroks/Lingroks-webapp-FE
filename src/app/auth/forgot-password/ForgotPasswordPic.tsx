import React from 'react';

const ForgotPasswordPic = ({pic, alt}) => {
  return (
    <div className='p-4 rounded-[100%] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <img src={pic} alt={alt} className='w-[40px]'/>
    </div>
  );
};

export default ForgotPasswordPic;