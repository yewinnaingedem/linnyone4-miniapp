// src/custom.js

export function handleMenubar() {
    // Re-attach event handlers
    jQuery('.custom-menu-toggler').on('click', function () {
      jQuery('.sidebar').toggleClass('show');
      jQuery('.custom-menu-toggler').toggleClass('show');
      jQuery('.dark-overlay').toggleClass('active');
      console.log('hi code ');
    });
  
    jQuery('.dark-overlay').on('click', function () {
      jQuery('.custom-menu-toggler,.sidebar').removeClass('show');
      jQuery(this).removeClass('active');
    });
  
    jQuery('.nav-color').on('click', function () {
      jQuery('.dark-overlay').removeClass('active');
    });
    
    $('.testing-btn').on('click',() => {
        console.log('you just clicked the test btn');
    });
}
  