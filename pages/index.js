import Head from "next/head";
import { MongoClient } from "mongodb";

import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return (
    <>
      {
        // Important for search engines
      }
      <Head>
        <title>React meetups </title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

/* // Server-side rendering
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  //fetch data from API
  // code here is executed on the server
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
} */

// Static generation
export async function getStaticProps() {
  //fetch data from API

  const client = await MongoClient.connect(process.env.MONGODB_CLUSTER);
  const db = client.db("database1");

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  // execute any code that normally only run on a server
  // code here is executed in the building process
  // with revalidate we add Incremental Static Generation
  // number of seconds that NEXTJS will wait until regenerate the page
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
