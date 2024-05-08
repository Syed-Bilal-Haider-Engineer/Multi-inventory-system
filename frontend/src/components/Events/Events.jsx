import React from 'react';
import styles from '../../styles/styles';
import { productData } from '../../static/data';
import EventCard from './EventsCard';

const Events = () => {

  return (
    <div>
      {!isLoading && (
        <div className={`${styles.section}`}>
          <div className={`${styles.heading}`}>
            <h1>Popular Events</h1>
          </div>

          <div className="w-full grid">
            { productData?.length > 0 ? (
              <EventCard data={productData[0]} />
            ) : (
              <h4>No Events available!</h4>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
