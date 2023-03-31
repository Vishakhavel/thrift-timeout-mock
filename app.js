const express = require('express')
const app = express()
const port = 3000

app.get('/', async(req, res) => {
  const  change = async() => {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 120000);
    }).then(function() {
        res.send('Hello World!');
    });
}

  console.log("*** entering timeout code");
  await change();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})