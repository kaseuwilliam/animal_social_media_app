import picture from './assets/pic.jpeg'
import './CSS/Person.css'


const Person = ({firstName, lastName, age, favoriteColor, hometown="Dallas"}) => {

  let pets = "";

  return (
    <>

    <h4>First Name: {firstName}</h4>
    <h4>Last Name: {lastName}</h4>
    <h4>Age: {age}</h4>
    <h4>Favorite Color: {favoriteColor}</h4>
    <h4>Hometown: {hometown}</h4>
    <img src={picture} alt="" />

    </>
  )
}

export default Person