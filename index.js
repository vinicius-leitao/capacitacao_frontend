const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', __dirname + '/public');


app.get('/', (req, res) => {
    res.render('views/index');
})

app.listen(4000, () => console.log('Server is running!'));