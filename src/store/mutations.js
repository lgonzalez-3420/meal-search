export function setSearchedMeals(state, meals) {
    state.searchedMeals = meals || []
}

export function setMealsByLetter(state, meals) {
    state.mealsByLetter = meals || []
}

export function setMealsByIngredient(state, meals) {
    state.mealsByIngreditent = meals || []
}