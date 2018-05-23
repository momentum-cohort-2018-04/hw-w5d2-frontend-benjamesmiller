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
    
    function displayRes() {
        let searchTerm = $('.input').val()
        request
        .get(itunesAPI(searchTerm))
        .then(response => {
            let parsedarray = JSON.parse(response.text)
                function arrayHTML(parsedarray) {
                    let thatArray = []
                    let artName = parsedarray.artistName
                    let songPIC = parsedarray.artworkURL100
                    let songtitle = parsedarray.trackName
        
            for (i=0; i < parsedarray.legth; i++) {
            thatArray.push(artName, songPIC, songtitle)
            }
        }
        $('.output').html(arrayHTML)
    })
    }
})