import Person from "./Person";
import Pet from './Pet'


function App() {

  
  return (
    <>
    <h1>Welcome to my Animal Social Media App</h1>

    <Person firstName = {"Bobby"} lastName = {"Hitt"} age = {40} favoriteColor = {"Red"} hometown = {"New York City"}></Person>

    <Person firstName = {"Mary"} lastName = {"Jeff"} age = {50} favoriteColor = {"Blue"} hometown = {"Boston"}></Person>

    <Person firstName = {"Friend"} lastName = {"Kaseu"} age = {100} favoriteColor = {"Green"} />


    <h1>This is the pets section:</h1>
    

    <Pet name={"Spot"}  type = {"dog"} breed = {"Golden Retriever"} age = {2}/>
    <Pet name={"Ruck"}  type = {"dog"} breed = {"Chiuhuhua"} age = {5}/>


    <h1>This is after the pets section</h1>

    </>
  );
}

export default App;
