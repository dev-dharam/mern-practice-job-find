import app from './app.js';

const PORT = 4000 || process.env.PORT;

app.listen(PORT, function(){
    console.log(`Server is runing on ${PORT} port`);
})
