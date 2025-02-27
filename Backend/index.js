import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World')
});

app.get('/api/jokes',(req,res) => {
    const jokes = [
        {id:1, joke: 'Why was the math book sad?', punchline: ''},
        {id:2, joke: 'Why did the scarecrow win an award?', punchline : ''},
        {id:3, joke: 'Why did the bicycle fall over?', punchline: ''}
    ];
    res.send(jokes);
});
const port = process.env.PORT||3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});