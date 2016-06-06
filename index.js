/**
 * Created by Jonathan on 06/06/2016.
 */
const express = require('express');
const app = express();

app.listen(3000, function() {
    console.log('listening on 3000')
});

app.use(express.static('app'));