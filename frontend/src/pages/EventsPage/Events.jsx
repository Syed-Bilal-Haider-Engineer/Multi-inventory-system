import React from "react";
import EventCard from "../../components/Events/EventCard";
import Header from "../../components/Layout/Header";

const EventsPage = () => {
  return (
    <>
          <Header activeHeading={4} />
          <EventCard active={true} />
          <EventCard active={true} />
    </>
  );
};

export default EventsPage;
