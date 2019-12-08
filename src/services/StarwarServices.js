/* FilmServices : For providing api services to the components
 * Created at : 07-12-2019
 * Author : Kavya Sagar
 */

export const LongestCharService = data => {

	return fetch("http://localhost:5000/api/longestcrawl")
}

export const PopularCharService = data => {

	return fetch("http://localhost:5000/api/popularcharacter")
}