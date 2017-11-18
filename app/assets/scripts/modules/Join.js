import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class Join {
  constructor() {
    this.Modal = $(".careers-modal");
    this.openButton = $(".current-positions__modal-button");
    this.closeButton = $(".careers-modal__close");
    this.selector = $(".careers-form__selector");
    this.jobTitle = $("ul li");
    this.applyNowButton = $("#apply-now");
    this.events();
    this.addSmoothScrolling();


  }

  addSmoothScrolling(){
    this.applyNowButton.smoothScroll();
  }

  events(){
    this.openButton.click(this.openTheModal.bind(this));
    this.closeButton.click(this.closeTheModal.bind(this));
    this.applyNowButton.click(this.closeTheModal.bind(this));
    this.selector.click(this.highlightPosition.bind(this));

  }

  openTheModal(){
    this.Modal.addClass("careers-modal--is-visible");
    return false;
  }

  closeTheModal(){
    this.Modal.removeClass("careers-modal--is-visible");
  }

  highlightPosition(){
    this.jobTitle.toggleClass("active");
  }

}


export default Join;
