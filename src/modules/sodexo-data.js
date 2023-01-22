import Menu from '../mock-data/sodexo.json';

const coursesEn = Object.values(Menu.courses).map((course) => course.title_en);
const coursesFi = Object.values(Menu.courses).map((course) => course.title_fi);

const Sodexo = {coursesEn, coursesFi};

export default Sodexo;
