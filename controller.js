document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'pageMain') {
    page.querySelector('#push-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('about.html', {data: {title: 'about'}});
    };
  } else if (page.id === 'about') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});
