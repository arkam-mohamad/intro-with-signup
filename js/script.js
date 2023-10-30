$('button').click(function (e) { 
  e.preventDefault();
  let fname = $('.fname');
  let lname = $('.lname');
  let email = $('.email');
  let password = $('.password');

  if($(fname).val() == ''){
    $(fname).parent().addClass('hidden')
  } else {
    $(fname).parent().removeClass('hidden')
  }
  
  if($(lname).val() == ''){
    $(lname).parent().addClass('hidden')
  } else {
    $(lname).parent().removeClass('hidden')
  }
  
  if(isEmail($(email).val()) == false){
    $(email).parent().addClass('hidden')
  } else {
    $(email).parent().removeClass('hidden')
  }
  
  if($(password).val() == ''){
    $(password).parent().addClass('hidden')
  } else {
    $(password).parent().removeClass('hidden')
  }

});


function isEmail(mail){
  let regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if(!regex.test(mail)){
    return false
  } else {
    return true
  }
}
