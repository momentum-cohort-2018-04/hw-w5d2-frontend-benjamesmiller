import request from "superagent"
import $ from 'jquery'

window.$ = $

function itunesAPI(searchTerm) {
   return `https://itunes.apple.com/search?term=${searchTerm}&entity=music&limit=25`
}
// When clicking the submit button, use the text in the input field
// to pull datasets from the itunes api. Take those datasets
// and return the Album artwork, the song title, and the Artist Name and
// displayed below.

