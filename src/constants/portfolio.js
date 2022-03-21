import companyLogo from '../assets/superchief/superchiefbetatestsite-1.png';
import superchief2 from '../assets/superchief/superchiefbetatestsite.com_2.png';
import superchief3 from '../assets/superchief/superchiefbetatestsite.com_3.png';
import superchief4 from '../assets/superchief/superchiefbetatestsite.com_4.png';
import superchief5 from '../assets/superchief/3.png';
import superchief6 from '../assets/superchief/4.png';
import uma1 from '../assets/uma/uma-patient-app-1.png';
import uma2 from '../assets/uma/uma-patient-app-2.png';
import tuseguro1 from '../assets/tuseguro/tuseguro.insure1.png';
import tuseguro2 from '../assets/tuseguro/tuseguro.insure2.png';
import tuseguro3 from '../assets/tuseguro/tuseguro.insure3.png';
import tuseguro6 from '../assets/tuseguro/tuseguro.insure4.png';
import tuseguro4 from '../assets/tuseguro/tuseguro-mobile.png';
import tuseguro5 from '../assets/tuseguro/tuseguro-mobile2.png';
import blockinar1 from '../assets/blockinar/blockinar.com.png';
import blockinar2 from '../assets/blockinar/blockinar.com2.png';
import blockinar3 from '../assets/blockinar/blockinar.com3.png';
import blockinar4 from '../assets/blockinar/blockinar.com4.png';
import togoapp1 from '../assets/togoapp/7.png';
import togoapp2 from '../assets/togoapp/8.png';


export const projects = [
  {
    id: 1,
    title: 'Patient App',
    subtitle: 'React Native App',
    imgUrl: 'https://www.sjmed.com/easset_upload_file7472_430834_e.jpg',
    year: 2021,
    company: 'ÜMA Health AI',
    description:
      'Plataforma de telemedicina, apalancada en Inteligencia Artificial. Diagnósticos inteligentes, clasificador de antecedentes y predicción de enfermedades son algunas de las herramientas que desarrollamos en ÜMA para hacer más eficiente tu experiencia en nuestra plataforma. ',
    technologies: 'React Js - React Native - Firebase - Node Js',
    link: '',
    style: {
      width: '400px',
      textHover: '#262626',
    },
    images: [uma1, uma2],
  },
  {
    id: 5,
    title: 'ToGo App',
    subtitle: 'React Native Project',
    imgUrl:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80',
    year: 2022,
    company: 'Personal Project',
    description:
      'To Go allows travelers to organize their trips more safely, making better use of their time and money. This project is being developed in React Native.',
    images: [togoapp1, togoapp2],
    technologies: 'React Native - Redux',
    style: {
      width: '600px',
      textHover: '#262626',
    },
    link: 'https://github.com/agusruidiazgd/to-go-native-app',
  },
  {
    id: 2,
    title: 'NFT Marketplace',
    subtitle: 'React/Gatsby Gallery',
    imgUrl: 'https://miro.medium.com/max/1400/1*oSCZCkkVgsQSnX4s5zMZoQ.png',
    year: 2021,
    company: 'Superchief Gallery NFT',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ',
    technologies: 'React Js - Gatsby - Contenful - Metamask',
    style: {
      width: '700px',
      textHover: '#262626',
    },
    images: [
      companyLogo,
      superchief2,
      superchief3,
      superchief4,
      superchief5,
      superchief6,
    ],
  },
  {
    id: 3,
    title: 'Landing',
    subtitle: 'VueJs Project',
    imgUrl:
      'https://d-line.biz/pictures/articles/articles_thumbnail_zz0HmWebi5.jpg',
    year: 2020,
    company: 'Blockinar',
    images: [blockinar1, blockinar2, blockinar3, blockinar4],
    link:'https://blockinar.com/#/en',
    style: {
      width: '300px',
      textHover: '#262626',
    },
  },
  {
    id: 4,
    title: 'TuSeguro',
    subtitle: 'VueJs Project',
    imgUrl:
      'https://noomis-files-hmg.s3.amazonaws.com/content/7e141ed0-4aa1-11eb-9f10-fb32f5038083.jpeg',
    year: 2020,
    company: 'Blockinar',
    images: [tuseguro1, tuseguro2, tuseguro3, tuseguro6, tuseguro4, tuseguro5],
    style: {
      width: '400px',
      textHover: '#262626',
    },
  },
];
