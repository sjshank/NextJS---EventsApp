import EachEventCategory from "../../../src/components/events/event-category";

const EventCategory = ({ data, pageName }) => {
  return (
    <EachEventCategory data={data} pageName={pageName} />
  );
}

export default EventCategory;


export const getStaticPaths = async () => {
  const { events_categories } = await import("../../../data/data.json");

  const allPaths = events_categories.map(ev => {
    return {
      params: {
        category: ev.id.toString()
      }
    }
  })

  return {
    paths: allPaths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const id = params.category ? params.category : '';
  const { allEvents } = await import("../../../data/data.json");
  const filteredData = allEvents.filter(ev => {
    return ev.city === id;
  })
  return {
    props: {
      data: filteredData,
      pageName: id
    }
  }
}