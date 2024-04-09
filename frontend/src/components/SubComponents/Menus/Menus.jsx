import React from 'react';
import './Menus.css';
import MenuCards from '../../../containers/MenuCards/MenuCards';

const Foods = [
  {
    title: "Budget-Ghc20", 
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20240213150115/ppp.png",
    description: "1 Ball of kenkey, Shito & Pepper, Fish."
  },
  {
    title: "One Man-Ghc25", 
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20240213150115/ppp.png",
    description: "1 Ball of kenkey, Shito & Pepper, Fish, Fried Eggs."
  },
  {
    title: "Hungry-Ghc30", 
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20240213150115/ppp.png",
    description: "2 Ball of kenkey, Shito & Pepper."
  },
  {
    title: "Satisfactory-Ghc35", 
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20240213150115/ppp.png",
    description: "2 Ball of kenkey, Shito & Pepper, 2 Fish, Fried Eggs."
  },
  {
    title: "Family Pack-Ghc200", 
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20240213150115/ppp.png",
    description: "2 Ball of kenkey, Shito & Pepper, 2 Fish, Fried Eggs, Sausage."
  }
]

const Menus = () => {
  return (
    <div className="menus">
    {
      Foods.map((food, index)=>{
      return( 
        <div className="listed">
          <MenuCards key={index}  title={food.title} image={food.image} description={food.description} />
        </div>
      )
      })
    }
    </div>
  )
}

export default Menus