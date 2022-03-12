// =====> This is Server Using Node.js  ==> Because when we host our website then use our server
const http = require("http");
// =====> import fs for reading (index.html) file - used for readFileSync
const fs = require("fs");

// =====> Don't use static PORT_NAME and HOST_NAME like - 2000, "localhost"
// const PORT = 2000;
const PORT = process.env.PORT;
// ==> remove hostname
// const hostname = "localhost";
// =====> use fs for reading file's (means readig components)
const home_page = fs.readFileSync("./Home.jsx", "utf-8");
const about_page = fs.readFileSync("./About.jsx", "utf-8");
const contact_page = fs.readFileSync("./Contact.jsx", "utf-8");
const service_page = fs.readFileSync("./Service.jsx", "utf-8");

// console.log(__dirname) ==> read our project directory
// console.log(__filename) ==> 

// Server
// =====> request - Request kiya url ke throw
// =====> response - Response mai mil gya ek website structure
// =====> next - it is call back function, but not need that at that time
// const server = http.createServer((request, response, next, error)=>{
//     request.params ===> iska matlab hai ki jo bhi search kiya bo mil jayega
// })
const server = http.createServer((req, res) => {
  // =====> when we used 'req.url' - so we get path or browser url tab
  // console.log(req.url)
  // =====> This is Response come from on request
  // res.end("<h1>Hello My Name is Chandan Sahu</h1>")
  // res.end("Hello Every one!!")
  if (req.url === "/") {
    // res.end("<h3>HOME Page</h3>") ==> clash ho jayega, so used return
    // return res.end("<h3>HOME Page</h3>")
    return res.end(home_page);
  }
  if (req.url === "/about") {
    // return res.end("<h3>ABOUT Page</h3>")
    return res.end(about_page);
  }
  if (req.url === "/contact") {
    // return res.end("<h3>CONTACT Page</h3>")
    return res.end(contact_page);
  }
  if (req.url === "/service") {
    // return res.end("<h3>SERVICE Page</h3>")
    return res.end(service_page);
  } else {
    return res.end("<h3>404 error</h3>");
  }
});

// listen server - jab server start ho tab ye chal jaye
// =====> PORT_NUMBER - like 2000, 8000, 3001, 3000 etc.
// =====> HOST_NAME - like localhost, any_hosting_website_name like heroku etc.
// server.listen(PORT_NUMBER, HOST_NAME, CALL_BACK_FUNCTION)
// server.listen(PORT, hostname, () => {
//   console.log(`Working Server on http://${hostname}//${PORT}`);
// });
// ===> after removing hostname
server.listen(PORT,() => {
  console.log(`Working Server`);
});