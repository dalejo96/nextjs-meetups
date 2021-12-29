import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm />;
}

export default NewMeetupPage;
