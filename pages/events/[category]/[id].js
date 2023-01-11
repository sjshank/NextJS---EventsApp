import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

const EventPage = ({ data }) => {

  const emailRef = useRef();
  const router = useRouter();
  const [message, setMessage] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    const eventId = router?.query.id;
    const response = await fetch('/api/email-registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: emailRef.current.value, eventId })
    });
    // if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    setMessage(data.message);
    emailRef.current.value = '';
  }
  return (
    <div className="event_single_page">
      <h1>{data.title}</h1>
      <Image src={data.image} width={600} height={300} alt={data.title} />
      <p>{data.description}</p>
      <form onSubmit={submitHandler} className="email_registration">
        <label>Get Registered for this event!</label>
        <input type="email" id="email" ref={emailRef} placeholder="Please insert your email" /> <button type="button">Submit</button>
        <p style={{ color: "green" }}>{message}</p>
      </form>
    </div>
  );
}

export default EventPage;


export const getStaticPaths = async () => {
  const { allEvents } = await import("../../../data/data.json");

  const allPaths = allEvents.map(ev => {
    return {
      params: {
        category: ev.city,
        id: ev.id.toString()
      }
    }
  })

  return {
    paths: allPaths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const id = params.id ? params.id : '';
  const { allEvents } = await import("../../../data/data.json");
  const filteredData = allEvents.filter(ev => {
    return ev.id === id;
  })
  return {
    props: {
      data: filteredData ? filteredData[0] : null
    }
  }
}