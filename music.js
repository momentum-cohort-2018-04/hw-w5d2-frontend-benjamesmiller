import request from "superagent"
import $ from 'jquery'
import { on } from "cluster";

window.$ = $

function itunesAPI(searchTerm) {
   return `https://itunes.apple.com/search?term=${searchTerm}&entity=music&limit=25`
}
// When clicking the submit button, use the text in the input field
// to pull datasets from the itunes api. Take those datasets
// and return the Album artwork, the song title, and the Artist Name and
// displayed below.

//artistName, artworkURL100, trackName

$(document).on('.click', '.button', function (event) {
    let searchTerm = $('.input').val()
    displayRes(searchTerm)
})

function displayRes() {
    let searchTerm = $('.input').val()
    request
    .get(itunesAPI(searchTerm))
    .then(response => {
        let parsedarray = JSON.parse(response.text)
       // $('.output').html(parsedarray)
       console.log(parsedarray)
    })
    }
