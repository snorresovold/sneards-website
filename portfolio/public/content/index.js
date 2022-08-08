export default {
    en: {
        navItems: [
            { text: "Projects", to: "Projects"},
            { text: "About me", to: "About"},
            { text: "Contact me", to: "Contact"},
        ],
        header: {
          img:
            '/images/Snorre.png',
          text: ['Hello!', "I am Snorre Søvold.", 'I am '],
          btnText: 'What do i know?',
        },
        stack: {
          title: 'Teknologioer eg kan',
          tech: [
            {
              img: process.env.PUBLIC_URL + '/assets/django.png',
              alt: 'Django',
            },
            {
              img: process.env.PUBLIC_URL + '/logo512.png',
              alt: 'React',
            },
            {
              img: process.env.PUBLIC_URL + '/assets/python.png',
              alt: 'Python',
            },
            {
              img: process.env.PUBLIC_URL + '/assets/js.png',
              alt: 'Javascript',
            },
          ],
          desc: `De programmerings språkene eg kan best er Python og Javascript. Selv om eg har erfaring og er open til å lære andre språk som for eksempel Golang. Den tech stacken eg bruker mest for web prosjekter er Django for backend på grunn av rask og effektiv REST-API og Javascript med React til frontend fordi det er raskt og eg liker React bedre enn andre Frontend rammeverk.`,
        },
    },
    
    no: {
        navItems: [
            { text: "Prosjekter", to: "Projects"},
            { text: "Om meg", to: "About"},
            { text: "Kontakt meg", to: "Contact"},
        ],
        header: {
          img:
            '/images/Snorre.png',
          text: ['Hallo!', "Eg er Snorre Søvold.", 'Eg er '],
          btnText: 'Hva kan jeg?',
        },
        stack: {
          title: 'Teknologioer eg kan',
          tech: [
            {
              img: process.env.PUBLIC_URL + '/assets/django.png',
              alt: 'Django',
            },
            {
              img: process.env.PUBLIC_URL + '/logo512.png',
              alt: 'React',
            },
            {
              img: process.env.PUBLIC_URL + '/assets/python.png',
              alt: 'Python',
            },
            {
              img: process.env.PUBLIC_URL + '/assets/js.png',
              alt: 'Javascript',
            },
          ],
          desc: `De programmerings språkene eg kan best er Python og Javascript. Selv om eg har erfaring og er open til å lære andre språk som for eksempel Golang. Den tech stacken eg bruker mest for web prosjekter er Django for backend på grunn av rask og effektiv REST-API og Javascript med React til frontend fordi det er raskt og eg liker React bedre enn andre Frontend rammeverk.`,
        },
    },

}