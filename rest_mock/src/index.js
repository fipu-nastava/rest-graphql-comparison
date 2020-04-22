import express from 'express';
import data from './store';
import cors from 'cors';

const app = express(); // instanciranje aplikacije
const port = 3200; // port na kojem će web server slušati

app.use(cors());
app.use(express.json());

// studenti
app.get('/studenti', (req, res) => res.json(data.studenti));
app.get('/studenti/:jmbag', (req, res) => res.json(data.jedan_student));
app.post('/studenti', (req, res) => {
    res.statusCode = 201;
    res.setHeader('Location', '/studenti/1234');
    res.send();
});

// kolegiji
app.get('/kolegiji', (req, res) => res.json(data.kolegiji));

// ispiti
app.get('/kolegiji/:kolegij/ispiti/:datum/rezultati', (req, res) => res.json(data.pretragaIspita));
app.get('/kolegiji/:kolegij/ispiti/:datum/rezultati/student/:jmbag', (req, res) => res.json(data.ocjenaStudenta));

// unos jedne ocjene
app.put('/kolegiji/:kolegij/ispiti/:datum/rezultati/student/:jmbag', (req, res) => {
    let data = req.body;

    if (!data.ocjena) {
        res.statusCode = 400;
        return res.json({
            error: 'There are parameters missing.',
        });
    }

    res.statusCode = 201;
    res.setHeader('Location', '/kolegiji/wapps/ispiti/01-05-2020/rezultati/student/003512341234');
    res.send();
});

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
