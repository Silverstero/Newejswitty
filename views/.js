const express = require('express');
const app = express();
app.use(express.json());
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
var test = "YES"
res.render('index', { variable: test })
});

app.listen(3000, () => {
console.log('starting on port 3000')
});