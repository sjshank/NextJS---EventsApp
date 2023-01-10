import Image from 'next/image'
import Link from 'next/link'

const HomePageComponent = ({ data }) => {
  return (
    <div className="home_body">
      {data.map((ev) => {
        return (
          <div key={ev.id}>
            <Link href={`/events/${ev.id}`} className="card">
              <div className="image">
              <Image
                
                src={ev.image}
                width={200}
                height={100}
                alt={ev.title}
              />
              </div>
              <div className="content">
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default HomePageComponent
