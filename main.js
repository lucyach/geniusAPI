// JAVASCRIP + JQUERY 3.3.1

$(document).on("click", ".artists", function() {
   console.log("hello world")
 });
 $("#submitButton").click(function() {
   $("#songs").html("")
   var inputBox = $("#inputBox").val();
   var access_token = "gqZVh7TsZSLSK8STKoSAKvCUMg-fX44cLJp44jW3b3tAyyMZ_bI3qCFC555K9Ehh"
   $.get({
     url: "https://api.genius.com/search?q=" + inputBox,
     data: {
       access_token: access_token
     },
     success: function(result) {
       var hits = result.response.hits;
       for (var i = 0; i < hits.length; i++) {
         var artistNumber = hits[i].result.primary_artist.api_path;
         var insertHTML = `Lucy`
         $("#songs").append('<li><img src = ' + hits[i].result.song_art_image_url + 'class = "songImage"></li>');
         $("#songs").append('<p>' + hits[i].result.title + '</p>');
         $("#songs").append('<p class = "artists">' + hits[i].result.primary_artist.name + '</p>');
         console.log("Result: ", hits[i]);
       }
     },
     error: function(error) {
       console.log("Error: ", error);
     },
   });
 });
