$(document).ready(function(){

    $("#re_password").change( function () {
        if( $('#password').val() !== $('#re_password').val() )
        {
            $('#wrong_password').text('两次输入的密码不一致');
        }
        else
        {
            $('#wrong_password').text(' ');
        }
    });

    $('#phone_number').change( function () {
        if( $('#phone_number').val().length !== 11 )
        {
            $("#wrong_phone_number").text('这不是一个正确的手机号码');
            return 0;
        }
        for(let i = 0;i<11;i++)
        {
            if(isNaN( $('#phone_number').attr('value')))
            {
                $("#wrong_phone_number").text('这不是一个正确的手机号码');
                return 0;
            }
        }

        $("#wrong_phone_number").text(' ');
        return 0;
    });

    $('#ajax').click(function () {
         var data = {
            user_name : $('#user_name').val(),
            password : $('#password').val(),
            email : $('#email').val(),
            phone_number : $('#phone_number').val(),
            birthday : $('#birthday').val()
         };

          $.ajax({
              url:'http://127.0.0.1:8080/signup',
              type: "POST",
              data: data,
              dataType: 'text',
              success: function(res) {
                $('#whiteboard').text(res.toString());
                  console.log('a');
              },
              error:function (err) {
                  $('#whiteboard').text(err.toString());
              }
          });


        });
});
