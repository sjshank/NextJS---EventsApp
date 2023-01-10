import AllEvents from "../../src/components/events/events-page";

const EventsPage = ({ data }) => {
  return <AllEvents data={data} />
}

export default EventsPage;


export const getStaticProps = async (ctx) => {
  const { events_categories } = await import("../../data/data.json");

  return {
    props: {
      data: events_categories
    }
  }
}