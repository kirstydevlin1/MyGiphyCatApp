const img = document.querySelector('img');

fetch('https://api.giphy.com/v1/gifs/translate?api_key=[API_KEY]=cats', {mode: 'cors'})
.then( response => response.json() )
.then( body => img.src = body.data.images.original.url )
