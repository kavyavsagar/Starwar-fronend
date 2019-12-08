/* FilmServices : For providing api services to the components
 * Created at : 07-12-2019
 * Author : Kavya Sagar
 */
 
export const LongestCharService = data => {

	return fetch("https://starwar-universe-api.herokuapp.com/api/longestcrawl")
}

export const PopularCharService = data => {

	return fetch("https://starwar-universe-api.herokuapp.com/api/popularcharacter")
}

export const PopularSpeciesService = data => {

	return fetch("https://starwar-universe-api.herokuapp.com/api/popularspecies")
}

export const PopularPilotService = data => {
	
	return fetch("https://starwar-universe-api.herokuapp.com/api/popularpilots")
}