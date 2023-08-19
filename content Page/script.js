const UserIp = document.getElementById("ipAddress");
const lat = document.getElementById("latitude");
const longi = document.getElementById("longitude");
const city = document.getElementById("city");
const organisation = document.getElementById("organisation");
const region = document.getElementById("region");
const hostname = document.getElementById("hostName");
const gMap = document.getElementById("googleMap");


// $.getJSON("https://api.ipify.org?format=json", function(data) {
//     ipadd = data.ip;
//     UserIp.innerHTML = ipadd;
// });


// $.getJSON(`https://ipinfo.io/${ipadd}/geo`, function(ipInfoData) {
//     // Display Google Map using latitude and longitude
//     const location = ipInfoData.loc.split(",");
//     const latitude = location[0];
//     const longitude = location[1];
//     mapIframe = `<iframe src="https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed" width="360" height="270" frameborder="0" style="border: 0"></iframe>`;
//     livemap.innerHTML = mapIframe;
// });




    // $.getJSON("https://api.ipify.org?format=json", function(data) {
    //     ipadd = data.ip;
    //     UserIp.innerHTML = ipadd;
    //     console.log(ipadd);

    //     // Fetch additional information
    //     $.getJSON(`https://ipinfo.io/q=${ipadd}/geo`, function(ipInfoData) {
    //         // ...
        
    //         // Display Google Map using latitude and longitude
    //         const location = ipInfoData.loc.split(",");
    //         lat= location[0];
    //         longi = location[1];
    //         const mapIframe = `<iframe src="https://maps.google.com/maps?q=${lat},${longi}&z=15&output=embed" width="360" height="270" frameborder="0" style="border: 0" allowfullscreen></iframe>`;
    //         gMap.innerHTML = attr("src", `https://maps.google.com/maps?q=${lat},${longi}&z=15&output=embed`);
    //     });
        
    // });

    // ... Rest of your code ...



// "ip": "157.33.206.169",
// "city": "Nagpur",
// "region": "Maharashtra",
// "country": "IN",
// "loc": "21.1463,79.0849",
// "org": "AS55836 Reliance Jio Infocomm Limited",
// "postal": "440003",
// "timezone": "Asia/Kolkata",
// "readme": "https://ipinfo.io/missingauth"
   
let ipadd = null;
document.addEventListener("DOMContentLoaded", async function() {
try{
        // Get IP Address on page load
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipResponse.json();
        ipadd = ipData.ip;
        UserIp.innerHTML = ipadd;
        // $("#ipAddress").text(ipAddress);
        // Fetch additional information
        await delay(1000); // Delay for 1 second (adjust as needed)
        const ipInfoResponse = await fetch(`https://ipinfo.io/${ipadd}/geo`);
        const ipInfoData = await ipInfoResponse.json();
        console.log("IP Info:", ipInfoData);


          // Display Google Map using latitude and longitude
          const location = ipInfoData.loc.split(",");
          const latitude = location[0];
          const longitude = location[1];
          
          //display info 
          lat.innerHTML = latitude;
          longi.innerHTML = longitude;
          console.log('latitude', latitude );

          const mapIframe = document.createElement("iframe");
          mapIframe.src = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
          mapIframe.width = "360";
          mapIframe.height = "270";
          mapIframe.frameborder = "0";
          mapIframe.style.border = "0";
          mapIframe.allowfullscreen = true;
  
          const mapContainer = document.getElementById("map");
          mapContainer.innerHTML = ""; // Clear any existing content
          mapContainer.appendChild(mapIframe);
        // ... Rest of your code ...

    }
    catch (error) {
        console.error(error);
    }
});









// /* // Get IP Address on page load
//     $.getJSON("https://api.ipify.org?format=json", function(data) {
//        const ipadd = data.ip;
//         UserIp.innerHTML = ipadd;

//         // Fetch additional information
//         $.getJSON(`https://ipinfo.io/${ipadd}/geo`, function(ipInfoData) {
//             // Display Google Map using latitude and longitude
//             const location = ipInfoData.loc.split(",");
//             const latitude = location[0];
//             const longitude = location[1];
//             const mapIframe = `<iframe src="https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed" width="360" height="270" frameborder="0" style="border: 0"></iframe>`;
//             $("#map").html(mapIframe);

//             // Get time from timezone
//             const timeZone = ipInfoData.timezone;
//             const dateAndTime = new Date().toLocaleString("en-US", { timeZone });
//             $("#timeZone").text(`Time Zone: ${timeZone}`);
//             $("#dateAndTime").text(`Date and Time: ${dateAndTime}`);

//             // Get pincode from JSON and make API request to fetch post office details
//             const pincode = ipInfoData.postal;
//             $("#pincode").text(`Pincode: ${pincode}`);
//             $.getJSON(`https://api.postalpincode.in/pincode/${pincode}`, function(postalData) {
//                 const postOffices = postalData[0].PostOffice;
//                 $("#messege").text(`Number of pincode(s) found: ${postOffices.length}`);

//                 const postOfficesList = $("#postOffices");
//                 postOfficesList.empty();

//                 postOffices.forEach((office, index) => {
//                     const listItem = `<li>${index + 1}. ${office.Name} - ${office.BranchType}</li>`;
//                     postOfficesList.append(listItem);
//                 });

//                 // Implement search functionality
//                 $("#searchPost").keyup(function() {
//                     const searchTerm = $(this).val().toLowerCase();
//                     const filteredOffices = postOffices.filter(office => office.Name.toLowerCase().includes(searchTerm) || office.BranchType.toLowerCase().includes(searchTerm));
//                     postOfficesList.empty();

//                     filteredOffices.forEach((office, index) => {
//                         const listItem = `<li>${index + 1}. ${office.Name} - ${office.BranchType}</li>`;
//                         postOfficesList.append(listItem);
//                     });
//                 });
//             });
//         });
//     });

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}