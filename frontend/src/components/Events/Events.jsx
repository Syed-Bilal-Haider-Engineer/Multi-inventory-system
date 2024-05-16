import React from 'react';
import styles from '../../styles/styles.js';
import { productData } from '../../static/data.jsx';
import EventCard from './EventsCard';

const Events = () => {

  return (
        <div className={`${styles.section}`}>
          <div className={`${styles.heading}`}>
            <h1 className='text-black'>Popular Events</h1>
          </div>

          <div className="w-full grid">
            { productData?.length > 0 ? (
              <EventCard data={productData[0]} />
            ) : (
              <h4 className=' text-black'>No Events available!</h4>
            )}
          </div>
        </div>
  );
};

export default Events;
