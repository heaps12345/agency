import $ from 'jquery';

class Menu {
  constructor() {
    this.menuIcon = $(".site-header__menu-icon");
    this.menuModal = $(".site-header__menu-modal");
    this.logo = $(".site-header__logo");
    this.links = $(".site-header__menu-modal ul li");
    this.events();
  }



  events(){
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu(){
    this.menuModal.toggleClass("site-header__menu-modal--is-visible");
    this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    this.logo.toggleClass("fixed");
    this.links.toggleClass("slide");
  }

}

export default Menu;
