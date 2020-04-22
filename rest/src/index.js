import express from 'express';
import data from './store';

const app = express(); // instanciranje aplikacije
const port = 3000; // port na kojem će web server slušati

app.get('/studenti', (req, res) => res.json(data.studenti));
app.get('/kolegiji', (req, res) => res.json(data.kolegiji));
app.get('/kolegiji/:kolegij/ispiti/:datum/rezultati', (req, res) => {
    let datum = req.params.datum;
    let kolegij = req.params.kolegij;

    let results = data.ispiti.filter((i) => i.datum == datum && i.kolegij.sifra == kolegij);
    if (results && results[0]) {
        res.json({
            data: results[0],
        });
    } else {
        res.status(500);
        res.json({
            error: 'argh!',
        });
    }
});

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
