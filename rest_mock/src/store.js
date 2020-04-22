let data = {
    studenti: {
        data: [
            {
                jmbag: '003512341234',
                ime: 'Nikola',
                prezime: 'Tanković',
            },
        ],
    },
    jedan_student: {
        data: {
            jmbag: '003512341234',
            ime: 'Nikola',
            prezime: 'Tanković',
        },
    },
    studenti: {
        data: [
            {
                jmbag: '003512341234',
                ime: 'Nikola',
                prezime: 'Tanković',
            },
        ],
    },
    kolegiji: {
        data: [
            {
                sifra: 'wapps',
                naziv: 'Web aplikacije',
                semestar: '3-ljetni',
            },
        ],
    },
    pretragaIspita: {
        data: {
            datum: '01-05-2020',
            kolegij: {
                sifra: 'wapps',
                naziv: 'Web aplikacije',
                semestar: '3-ljetni',
            },
            ocjene: [
                {
                    ocjena: 4,
                    student: {
                        jmbag: '003512341234',
                        ime: 'Nikola',
                        prezime: 'Tanković',
                    },
                },
            ],
        },
    },
    ocjenaStudenta: {
        data: {
            datum: '01-05-2020',
            kolegij: {
                sifra: 'wapps',
                naziv: 'Web aplikacije',
                semestar: '3-ljetni',
            },
            ocjena: 4,
            student: {
                jmbag: '003512341234',
                ime: 'Nikola',
                prezime: 'Tanković',
            },
        },
    },
};

export default data;
