console.log('This would be the main JS file.');
// boilerplate form handler
var formHandler = function (url) {
  return function () {
    var data = {};
    var parent = $(this).parent();
    var inputs = parent.find('.form-input');
    for (var i=0; i<inputs.length; i++) {
      data[inputs[i].name] = inputs[i].value;
    }
    var thanks = function (response) {
      parent.parent().parent().find('p, form').css('display', 'none')
      parent.parent().removeClass('text-left').addClass('text-center');
      parent.parent().append('<span class="success">Thanks for your submission!</span>');
    }
    $.post(url, data, thanks).fail(thanks);
    return false;
  }
}
// submit CFP form
$('.cfp .signup form').on('click', 'a', formHandler('http://anon:anon@cfp.devopsdaysrox.org/abstracts/new'));
