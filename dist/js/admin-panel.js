/*
 * DOM Element for navbar menu left
 * --------------------------------
 */

jQuery(document).ready(function() {
  setInterval(function() {
    //location.reload();
  }, 3000);

  function getSpanElement(n) {
    return '>span:nth-child(' + n + ')';
  }

  var sideNavbarMenu = [], classSideNavbarMenu = '.side-navbar-menu>button';
  for (var i = 0; $($(classSideNavbarMenu)[i]).attr('data-target') != undefined; i ++) {
    sideNavbarMenu.push($($(classSideNavbarMenu)[i]).attr('data-target'));
  }


  $('[data-target]').click(function() {
    for (var i = 0; i < sideNavbarMenu.length; i ++) {
      var toggleIcon = '[data-target=\'' + sideNavbarMenu[i] + '\']>span:nth-child(3)>i.fa';
      var toggleIconClass = $(toggleIcon).attr('class');
      if (sideNavbarMenu[i] == $(this).attr('data-target')) {
        $(sideNavbarMenu[i]).collapse('show');
        $(toggleIcon)
          .removeClass(toggleIconClass == 'fa fa-angle-down' ? 'fa-angle-down' : 'fa-angle-right')
          .addClass(toggleIconClass == 'fa fa-angle-down' ? 'fa-angle-right' : 'fa-angle-down')
        ;
      } else {
        $(sideNavbarMenu[i]).collapse('hide');
        $(toggleIcon).removeClass('fa-angle-down').addClass('fa-angle-right');
      }
    }
  });

  $('.collapse>ul>li>a').click(function() {
    for (var i = 0; i < sideNavbarMenu.length; i++) {
      $(sideNavbarMenu[i] + '>ul>li>a.active').removeClass('active');
    }
    $(this).addClass('active');
  });
});
