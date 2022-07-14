import Ingredient from "./Ingredient"

const IngredientList = ({ingredients, addToBurger, removeFromBurger}) => {
	return (
		<ul>
			{ingredients.map((ingredient, idx) => 
				<Ingredient 
						ingredient={ingredient} 
						isList={true} 
						key={idx}
						addToBurger={addToBurger}	
						removeFromBurger={removeFromBurger}
						idx={idx}	
				/>
			)}
		</ul>
	)
}

export default IngredientList