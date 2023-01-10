import HomePageComponent from '../src/components/home/home-page'



export default function Home({ data }) {
  return (
    <div className="container">
      <HomePageComponent data={data} />
    </div>
  )
}


export const getServerSideProps = async (ctx) => {

  const { events_categories } = await import("../data/data.json");


  return {
    props: {
      data: events_categories
    }
  }
}