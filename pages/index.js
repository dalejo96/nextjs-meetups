import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Vltava_river_in_Prague.jpg/1920px-Vltava_river_in_Prague.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Berlin_reichstag_CP.jpg/1920px-Berlin_reichstag_CP.jpg",
    address: "Some address 2, 12345 Some City",
    description: "This is a second meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// Static generation
export async function getStaticProps() {
  //fetch data from API
  // execute any code that normally only run on a server
  // code here is executed in the building process
  // with revalidate we add Incremental Static Generation
  // number of seconds that NEXTJS will wait until regenerate the page
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
