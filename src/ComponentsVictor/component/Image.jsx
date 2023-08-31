import React from 'react'

const Image = ({image,p,at,twit}) => {
  return (
    <div className="image">
      <div className='img_1'>
        <img src={image} alt="image" />
        <div className='div_4'>
          <p className='name_2'>{p}</p>
          <p className='at'>{ at}</p>
          </div>
        <img className='img_23' src={ twit } alt="image" />
      </div>
      <div>
        <p className='lorem'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </p>
        <p  className="at cs">#eewdmxc</p>
      </div>
    </div>
  );
}

export default Image