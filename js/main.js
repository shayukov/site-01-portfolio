document.addEventListener('DOMContentLoaded', function() {
  var sidenav = document.querySelectorAll('.sidenav');
  var instances_sidenav = M.Sidenav.init(sidenav);

  var modal = document.querySelectorAll('.modal');
  var instances_modal = M.Modal.init(modal);

  var materialboxed = document.querySelectorAll('.materialboxed');
  var instances_materialboxed = M.Materialbox.init(materialboxed);

});
