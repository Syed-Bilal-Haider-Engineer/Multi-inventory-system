import EventCard from "../../components/Events/EventsCard";
import { productData } from "../../static/data.jsx";

const EventsPage = () => {
  return (
    <>
    <div className="mt-4">
          { productData?.length > 0 ? ( <>
              <EventCard data={productData[0]} active={true} />
              <EventCard data={productData[1]} active={true} />
              </>
            ) : (
              <h4>No Events available!</h4>
            )}
    </div>
    </>
  );
};

export default EventsPage;
