import news2 from '../../assets/news/thomb.jpg';
import news3 from '../../assets/news/kula.jpg';
import moment from 'moment';

let publishDate = moment().format('MMMM Do YYYY, h:mm:ss a');
 
export const news = [
  {
    id: 'n0',
    title: 'Лятна програма на Община Поморие',
    summary: 'Вижте лятната програма с културни събития организирани в Община Поморие.',
    image: 'https://www.pomorie.bg/new/wp-content/uploads/2023/07/20230502_142020-1555-1-scaled-e1689237708114.jpg',
    date: publishDate,
    author: 'Община Поморие',
    source: 'https://www.pomorie.bg/80391/lyatna-programa-na-obshtina-pomorie/',
  },
  {
    id: 'n1',
    title: 'Престоят в „Зоната за кратковременно платено паркиране“ става неограничен',
    summary: 'Престоят в „Зоната за кратковременно платено паркиране“ става неограничен. Решението бе взето днес на заседание на Общински съвет – Поморие, с оглед на летния туристически сезон и препоръките, получени от жители и гости на града.',
    image: 'https://www.pomorie.bg/new/wp-content/uploads/2023/06/357626813_9882201435153968_1002631873238750085_n-1800x600.jpg',
    date: publishDate,
    author: 'Община Поморие',
    source: 'https://www.pomorie.bg/80008/prestoyat-v-vzonata-za-kratkovremenno-plateno-parkiranev-stava-neogranitchen/',
  },
  {
    id: 'n2',
    title: "Нова светлинно-звукова система привлича вниманието към Тракийската куполна гробница",
    summary: 'Внедряването на нова светлинно-звукова система в Тракийската куполна гробница има за цел да привлече вниманието на още повече посетители към уникалния по рода си архитектурен обект в Поморие.',
    image: news2,
    date: publishDate,
    author: "Община Поморие",
    source: 'https://www.pomorie.bg/78056/nova-svetlinno-zvukova-sistema-privlitcha-vnimanieto-kam-trakiyskata-kupolna-grobnitsa/'
  },
  {
    id: 'n3',
    title: "Музей на рибарския поминък вдъхна нов живот на рушащата се Водна кула в Поморие",
    summary: 'Опасната стара сграда на някогашната Водна кула в Поморие вече е превърната в красив Музей на рибарския поминък.',
    image: news3,
    date: publishDate,
    author: "Община Поморие",
    source: 'https://www.pomorie.bg/78128/muzey-na-ribarskiya-pominak-vdahna-nov-zhivot-na-rushashtata-se-vodna-kula-v-pomorie/'
  },
  {
    id: 'n4',
    title: "Зони за паркиране в град Поморие",
    summary: 'В летния сезон град Поморие разполага с девет платени паркинга за над 620 леки автомобила и 4 безплатни буферни зони с приблизително същия капацитет. Допълнително на територията на града има две зони за паркиране, които работят целогодишно.',
    image: `https://www.pomorie.bg/new/wp-content/uploads/2023/07/3-1-1302x434.jpg`,
    date: publishDate,
    author: "Община Поморие",
    source: 'https://www.pomorie.bg/80602/sazdadena-be-interaktivna-karta-s-palna-informatsiya-otnosno-parkiraneto-v-pomorie/'
  },
  {
    id: 'n5',
    title: "Започват дейностите по инсталация на плаващия музикален фонтан тип „Водно шоу”",
    summary: 'уведомяваме Ви, че от 21.07.2023 г. започва подготовка на терена, върху който ще бъде монтирана инсталацията за плаващия музикален фонтан тип „Водно шоу”.',
    image: `https://www.pomorie.bg/new/wp-content/uploads/2023/07/forbidden-2016x672.jpg`,
    date: publishDate,
    author: "Община Поморие",
    source: 'https://www.pomorie.bg/80544/zapotchvat-deynostite-po-instalatsiya-na-plavashtiya-muzikalen-fontan-tip-vvodno-shouv/'
  },
];
