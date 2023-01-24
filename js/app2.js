// function loadArtists() {
//     let request;
//     if (window.XMLHttpRequest) {
//         request = new XMLHttpRequest();
//     } else {
//         request = new ActiveXObject("Microsoft.XMLHTTP");
//     }

// request.onreadystatechange = function() {
//     if((this.status === 200) && (this.readyState === 4)) {
//         myFunction(this);
//     }
// }

// request.open("GET", "data.xml");
// request.send();

// }
// function myFunction(xml) {
// let i;
// let items =xml.responseXML;
// let output = "<tr><th>Artists</th><th>Album</th><th>Label</th><th>Year</th></tr>";
// let x = items.getElementsByTagName("artist");
// console.log(x);
// for(i=0; i < x.length; i++) {
//     output +='<tr><td>' + x[i].getElementsByTagName("artistname")[0].childNodes[0].nodeValue + "</td>";
//     output +='<td>' + x[i].getElementsByTagName("album")[0].childNodes[0].nodeValue + "</td>";
//     output +='<td>' + x[i].getElementsByTagName("label")[0].childNodes[0].nodeValue + "</td>";
//     output +='><td>' + x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue + "</td></tr>";
// }
// document.getElementById("update").innerHTML = output;

// }

// function loadArtists() {
// $.getJSON('data.json', function(data){
//     let output = "<ul>";
//     $.each(data, function(key, val){
//         output += '<li>';
//         output += '<h2>' + val.artistname + '</h2>'
//         output += '<img src="images/' +val/albumImg + '.jpeg"' + ' alt="' + val.album + '"/>';
//         output += '</li>';
//     });
//     output += '</ul>';
//     $("#update").html(output);
    
// });
// }

$('#search').keyup(function loadArtist() {
    let searchField = $("#search").val()
    let myExp = new RegExp(searchField, "i");
    $.getJSON('data.json', function(data){
        let output = "<ul>";
        $.each(data, function(key, val){
            if ((val.artistname.search(myExp)) != -1) (val.bio.search(myExp) != -1); {
                
            output += '<li>';
            output += '<h2>' + val.artistname + '</h2>'
            output += '<img src="images/' + val/albumImg + '.jpeg"' + ' alt="' + val.album + '"/>';
            output += '<h3>' + val.album + '</h3>'
            output += '<h3>' + val.label + '</h3>'
            output += '<h3>' + val.year + '</h3>'
            output += '<h3>' + val.bio + '</h3>'
            output += '</li>';
        }
        });
        output += '</ul>';
        $("#update").html(output);
        
    });
    })