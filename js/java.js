
var client = contentful.createClient({
    space: 'slfcz5zsqjr9',
    accessToken: 'xCvRJ3dojlhhgc9rRruo_vO-D9odqn9rFHwLs7hMHtA',
  });

  


console.log(client)




client.getEntry('6maEAQP1IB4d8ItHkRKTx5').then(function (entry) {
  // logs the entry metadata
  console.log("entry.sys->",entry.sys);
  console.log("entry->",entry);

  // logs the field with ID title
  console.log("entry.fields.title->",entry.fields.title);
});

//var entryData = entry.fields

/* use this line of code to assign id to html to make content*/











// client.getEntries({content_type:'cars'}).then(function (entries) {
//     // log the title for all the entries that have it

//     var autoDiv = document.createElement('div');
//     autoDiv.classList.add('auto-div');

//     entries.items.forEach(function (entry) {
//       if (entry.fields.title) {
//         // console.log("Car:", entry.fields.title);
//         // var title = document.createElement('h2');
//         // var website = document.createElement('a');

//         cardHeading.innerHTML = entry.fields.title;
//         console.log("cardHeading", cardHeading)
//         // autoDiv.appendChild(title)
      
//         // title.innerHTML = entry.fields.title

//         // website.innerHTML = entry.fields.website
//         // website.href = entry.fields.website
//         // autoDiv.appendChild(website)

//         // entryDiv.appendChild(autoDiv)

//       }
//     });
//   });

//   title.classList.add('title');
// title.innerHTML = 'Example Title';

// var placeForContent = document.getElementById('place-for-content');

// // gets all the entries as a json
// client.getEntries().then(function (entries) {
// // loops through the json to look at one entry at a time
//     entries.items.forEach(function (entry) {
//         // if statement chechs that this field exists
//         var entryDiv = document.createElement('div');
//         entryDiv.classList.add('entry-div');

//         if (entry.fields.name) {
//             var name = document.createElement('h2');
//             name.innerHTML = entry.fields.name;
//             entryDiv.appendChild(name);

//             var link = document.createElement('a');
//             link.innerHTML = "link to " + entry.fields.name;
//             link.href = entry.fields.link;
//             entryDiv.appendChild(link);
//             placeForContent.appendChild(entryDiv);
//         }

//     });
// });


// var cars = [
//     {
//         title: "Ferrari",
//         website: "https://ferrari.com",
//         models: [
//             { color: "red" },
//             { color: "black" },
//         ]
//     },
//     {
//         title: "Bugatti",
//         website: "https://buggati.com",
//         models: [
//             { color: "yellow" },
//             { color: "green" },
//         ]
//     },
// ];

// console.log("cars", cars)
// cars.forEach(function (car) {
//     console.log("cars name is " + car.title);
//     car.models.forEach(function (model) {
//         console.log("Model is " + model.color);
//     })
// });



// console.log(students[1].courses[0].name);

// students.forEach(function (student) {
//     console.log("student name is " + student.name);
//     student.courses.forEach(function (course) {
//         console.log("Course is " + course.name);
//     })
// });

// function getName(student) {
//     console.log(student.name);
// }
// getName(students[0]);


// Images
// client.getEntries({content_type:'cars'}).then(function (entries) {
//   entries.items.forEach(function (entry) {
//       if (entry.fields.title && entry.fields.image) { // Assuming 'image' is the field for the image
//           var autoDiv = document.createElement('div');
//           autoDiv.classList.add('auto-div');

//           var title = document.createElement('h2');
//           var website = document.createElement('a');
//           var image = document.createElement('img'); // Create an img element

//           title.innerHTML = entry.fields.title;
//           autoDiv.appendChild(title);

//           website.innerHTML = entry.fields.website;
//           website.href = entry.fields.website;
//           autoDiv.appendChild(website);

//           image.src = entry.fields.image.fields.file.url; // Set the src of the img element
//           autoDiv.appendChild(image); // Add the image to the autoDiv

//           entryDiv.appendChild(autoDiv);
//       }
//   });
// });


var potraitDiv = document.getElementById('potrait');






client.getEntries({content_type:'illustrators'}).then(function (entries) {
entries.items.forEach(function (entry) {
  var li = document.createElement('li');
  li.classList.add('wrapper');

   // Create and append the image
   console.log(entry)
   var imageUrl = 'https:' + entry.fields.potrait.fields.file.url;
  
  console.log('imageURL',imageUrl)
   var img = document.createElement('img');
   img.classList.add('photo');
   img.src = imageUrl; // Placeholder, replace with actual image URL if available
   li.appendChild(img);

  // Create the content div
  var contentDiv = document.createElement('div');
  contentDiv.classList.add('content');



   // Create and append the heading
   



  
   
   var a = document.createElement("a");
   a.innerHTML = 'Learn More';
   a.href = "details.html?id=" + entry.sys.id;

   contentDiv.appendChild(a);


  
 
   

   // Append content div to li
   li.appendChild(contentDiv);

   potraitDiv.appendChild(li);



});
});












  

  
