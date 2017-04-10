import $ from 'jquery';

const addMessage = function(title, image) {
  const data = {
    title: title,
    image: image
  };


  return $.ajax({
    type: 'POST',
    data: data,
    url: "http://localhost:3020/message",
    dataType: 'json',
  });
}


export default addMessage;
