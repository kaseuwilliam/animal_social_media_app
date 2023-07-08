import Dog from './Dog'
import Card from './Card'

const Pet = ({name, type, breed, age}) => {

 
  return (
    <>
    <Card>

      <h1>This is the Pet</h1>
      <h4>Name: {name}</h4>
      <h4>Type: {type}</h4>
      <h4>Age: {age}</h4>
      <h4>Breed: {breed}</h4>
      <Dog nickname={name+'y'}  />

    </Card>
    </>
  )
}

export default Pet