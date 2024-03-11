
var client = contentful.createClient({
    space: 'slfcz5zsqjr9',
    accessToken: 'xCvRJ3dojlhhgc9rRruo_vO-D9odqn9rFHwLs7hMHtA',
  });

  

var textInURL = window.location.search;
console.log(textInURL);
var parametersInUrl = new URLSearchParams(textInURL);

console.log(parametersInUrl);

var id = parametersInUrl.get('id');
console.log('id');


var details = document.getElementById('details');

client.getEntry(id).then(function (entry) {
  console.log(entry)
  var li = document.createElement('li');
  li.classList.add('wrapper');
  

  var galleryArray =  entry.fields.gallery;
  console.log(galleryArray)

  galleryArray.forEach(function (item) {
    console.log("entry----->",item)
    var ul = document.createElement('ul');
    ul.classList.add('wrapper');

    var img = document.createElement('img');
   img.classList.add('photo');
   img.src = galleryArray; // Placeholder, replace with actual image URL if available
   ul.appendChild(img);

   var contentDiv = document.createElement('div');
   contentDiv.classList.add('content');

   // Append content div to li
   ul.appendChild(contentDiv);

   details.appendChild(ul);
    
  });

  var imageUrl = 'https:' + entry.fields.potrait.fields.file.url;



  console.log('imageURL',imageUrl)
  console.log('imageURL',imageUrl)
  

  

  var img = document.createElement('img');
   img.classList.add('photo');
   img.src = imageUrl; // Placeholder, replace with actual image URL if available
   li.appendChild(img);

     // Create the content div
  var contentDiv = document.createElement('div');
  contentDiv.classList.add('content');



   // Create and append the heading
   var h2 = document.createElement('h2');
   h2.innerHTML = entry.fields.title; // Assuming 'title' is the field for the title
   contentDiv.appendChild(h2);

   var p = document.createElement('p');
   p.innerHTML = entry.fields.description; // Assuming 'title' is the field for the title
   contentDiv.appendChild(p);

   var a = document.createElement("a");
   a.innerHTML = 'Even More info', entry.fields.portfolio;
   a.href = entry.fields.portfolio;
   contentDiv.appendChild(a);




  
 
   

   // Append content div to li
   li.appendChild(contentDiv);

   details.appendChild(li);




  
});







