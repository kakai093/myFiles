import $ from 'jquery';

const register = function(user_info) {
  $.post('http://localhost:3020/register', user_info)
   .then(function(user) {
      alert("Succesfully Added a User!!!");
      window.location.href="/login";
   })
   .catch(function(error) {
     alert(error.responseText);
   });
}

const login = function(user_info) {
  $.post('http://localhost:3020/login', user_info)
   .then(function(user) {
     window.localStorage.setItem('token', user.token);
     window.location.href="/dashboard";
   })
   .catch(function(error) {
     alert(error.responseText);
   });
}

export default {
  login,
  register
}
