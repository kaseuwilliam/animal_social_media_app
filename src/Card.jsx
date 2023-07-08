import './CSS/Card.css'

const Card = ({children}) => {
  return (
    <>
    <div className='card'>

        <h1>This is the Card Component</h1>
        <hr />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique iusto officia saepe voluptates aperiam tempore, aut itaque illum qui minus, magnam vitae, ullam autem rerum excepturi. Asperiores corrupti magnam minima!</p>
        <h2>Below is the children</h2>
        
        {children}

    </div>
    
    </>
  )
}

export default Card