const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const express = require('express');
const app = express();

/********************/
/* Connect to Atlas */
/********************/

mongoose.connect(
  process.env.MONGODB_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  )
  .then(function(){
    console.log('Connected to DB...')
  })
  .catch(function(err){
    console.log(err)
  });

/*****************/
/* Define Schema */
/*****************/

const defSchema = new mongoose.Schema({
  term: String,
  description: String,
  slug: String
});

/*****************/
/* Compile Model */
/*****************/

const Definition = mongoose.model('Definition', defSchema);

/*****************/
/* Define Routes */
/*****************/
app.use(express.static('public'))

/* Home Page */
// app.get('/', (request, response) => {
//   response.send("Hello World!");
// })

/*****************/
/* JSON Routes */
/*****************/

/* List entry */

app.get('/api/definitions', async (request, response) => {
  try {
    const definitions = await Definition.find();
    console.log('Definitions sent!');
    response.send(definitions);
  } catch (err) {
    response.send({message: 'There was an error :('});
  }
})

/* List item */

app.get('/api/definitions/:slug', async (request, response) => {
  try {
    const definition = await Definition.findOne({slug: request.params.slug});
    console.log('One definition sent!', definition);
    response.send(definition);
  } catch (err) {
    console.log(err);
    response.send({message: 'There was an error :('});
  }
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`Example app listening at http://localhost:${PORT}`);
})