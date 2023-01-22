/**
 *  Module for Fazer/Foodco menu data
 *
 *@author matias <matias.naakka@metropolia.fi>
 *@module
 */
import MenuFi from "../mock-data/fazer-week-example.json";
import MenuEn from "../mock-data/fazer-week-example-en.json";

const coursesfi = MenuFi.MenusForDays[0].SetMenus.map((menuItem) => {
  return menuItem.Components.join(', ');
});
const coursesEn = MenuEn.MenusForDays[0].SetMenus.map((menuItem) => {
  menuItem.Components.join(', ')
});

console.log(coursesfi);

const Fazer = {coursesEn, coursesFi};
export default Fazer;
