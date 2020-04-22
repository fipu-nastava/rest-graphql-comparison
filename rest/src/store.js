let data = {
    studenti: [
        {
            jmbag: '003512341234',
            ime: 'Nikola',
            prezime: 'Tanković',
        },
    ],
    kolegiji: [
        {
            sifra: 'wapps',
            naziv: 'Web aplikacije',
            semestar: '3-ljetni',
        },
    ],
};

data.ispiti = [
    {
        datum: '01-05-2020',
        kolegij: data.kolegiji[0],
        ocjene: [
            {
                ocjena: 4,
                student: data.studenti[0],
            },
        ],
    },
];

export default data;
