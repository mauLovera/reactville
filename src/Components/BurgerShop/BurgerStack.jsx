import Ingredient from "./Ingredient"

const BurgerStack = (props) => {
  return (
    <ul className="burger-stack">
      {props.stack.length 
        ? props.stack.map((ingredient, idx) => 
            <Ingredient
              ingredient={ingredient} 
              key={idx}
              addToBurger={props.addToBurger}	
              removeFromBurger={props.removeFromBurger}
              idx={idx}	 
            />
          ) 
        : <h1>No Ingredients In Stack</h1>
      }
    </ul>
  )
}

export default BurgerStack