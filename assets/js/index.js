$(document).ready(function(){ //ready for all function
    var flag = 0; //Control whether signed in or not

    //SIGN IN FUNCTIONS
    //Display menu sign in
    $("#menuSignIn").click(function(){
        if(!flag) //If already signed in this line won't work
        {
            $("#dangnhap").css("display","block");
        }
    });

    //Sign in process
    $("#login").click(function(){
        var nameStr = $("#name-login").val();
        var passwordStr = $("#password-login").val();
        if(nameStr != "" && passwordStr != "")
        {
            //Complete sign in
            $("#dangnhap").css("display","none");
            $("#menuSignUp").html("Xin Chào, " + nameStr);
            $("#menuSignIn").html('<i style = "font-size: 30px;" class="far fa-user-circle header__navbar-user-icon" aria-hidden="true"></i>');
            flag = 1;
        }
        else
        {
            //Not complete, warning table pop up and warning
            $(".signin__form-alert").css("visibility","unset");
        }
    });

    //Closing warning table & sign in
    $("#checkSignIn").click(function(){
        $("#kiemtra_dangnhap").css("display","none");
    });

    //Open sign up table & closing sign in
    $("a#toSignUp").click(function(){
        $("#dangnhap").css("display","none");
        $("#dangky").css("display","block");
        $(".signin__form-alert").css("visibility", "hidden");
    })

    //SIGN UP FUNCTIONS
    $("#menuSignUp").click(function(){
        if(!flag)
        {
            $("#dangky").css("display","block");
        }
    })

    //Sign up process
    $("#signIn").click(function(){
        var nameStr = $("#name-sign-up").val();
        var passwordStr = $("#password-sign-up").val();
        if(nameStr != "" && passwordStr != "")
        {
            //Complete sign in
            $("#dangky").css("display","none");
            $("#menuSignUp").html("Xin Chào, " + nameStr);
            $("#menuSignIn").html('<i style = "font-size: 30px;" class="far fa-user-circle header__navbar-user-icon" aria-hidden="true"></i>');
            flag = 1;
        }
        else
        {
            //Not complete, warning table pop up and warning
            $(".signin__form-alert").css("visibility","unset");
        }
    });

    //Closing warning table & open sign up
    $("#checkSignUp").click(function(){
        $("#dangky").css("display","block");
        $("#kiemtra_dangky").css("display","none");
    });

    //Open sign in table & closing sign up
    $("a#toSignIn").click(function(){
        $("#dangnhap").css("display","block");
        $("#dangky").css("display","none");
        $(".signin__form-alert").css("visibility", "hidden");
    })
    //prevent navigation if isn't login or sign up
    $(".containter__places-main-item").click(function(){
        if(!flag)
        {
            $("#kiemtra_dangnhap").css("display","block");
            return false;
        }
    })

    //BULB FUNCTIONS
    light = 1;
    $(".bulb").click(function(){
        var body = $("#main_body");
        var header = $("#header");
        if(light) 
        {
            $("#main_body").css({
                "backgroundColor":"gray",
                "color":"white"
            })
            $("#header").css({
                "backgroundColor":"lightgray"
            })

            $("#dangnhap").css({
                "color":"black"
            })

            $("#kiemtra_dangnhap").css({
                "color":"black"
            })

            $("#dangky").css({
                "color":"black"
            })

            $("#kiemtra_dangky").css({
                "color":"black"
            })
            light = 0;
        }
        else 
        {
            $("#main_body").css({
                "backgroundColor":"white",
                "color":"black",
            })
            $("#header").css({
                "backgroundColor":"white"
            })
            light = 1;
        }
    });

    //Close form login or register
    $(".form-out").click(function() {
        $('#dangky').css('display', 'none');
        $('#dangnhap').css('display', 'none');
    });

    // Responsive
    $('.header__navbar-responsive').click(function() {
        $('.modal').css('display', 'block')
    });

    $('.navbar__heading-out').click(function() {
        $('.modal').css('display', 'none')
    });
    $('#navbar__body-item-dangky').click(function() {
        $('#dangky').css('display', 'block');
        $('.modal').css('display', 'none')
    });
    $('#navbar__body-item-dangnhap').click(function() {
        $('#dangnhap').css('display', 'block');
        $('.modal').css('display', 'none')
    });
})