$(document).ready(function(){

    $("#password").change( function () {
        const reg = /\w{1}\S{7,20}/;
        let pw = $('#password').val();
        if( reg.test(pw) )
        {
            $('#wrong_password').text('');
        }
        else
        {
            $('#wrong_password').text('密码应该以字母开头，且长度在8-20位之间。');
        }
    });

    $("#re_password").change( function () {
        if( $('#password').val() !== $('#re_password').val() )
        {
            $('#wrong_password').text('两次输入的密码不一致');
        }
        else
        {
            const reg = /\w{1}\S{7,20}/;
            let pw = $('#password').val();
            if( reg.test(pw) )
            {
                $('#wrong_password').text('');
            }
            else
            {
                $('#wrong_password').text('密码应该以字母开头，且长度在8-20位之间。');
            }
        }
    });

    $("#email").change( function () {
       const reg = /[A-z0-9]+@[A-z0-9]+\.[A-z0-9]+/;
       if( reg.test($("#email").val())){
           $("#wrong_email").text(' ');
           return 0;
       }

       $("#wrong_email").text("这不是一个正确的电子邮箱");
    });

    $('#phone_number').change( function () {
        const reg = /\d{11}/;
        if(reg.test($('#phone_number').val()))
        {
            $("#wrong_phone_number").text(' ');
            return 0;
        }

        $("#wrong_phone_number").text('这不是一个正确的手机号码');
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
