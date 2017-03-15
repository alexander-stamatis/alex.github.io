$(document).ready(function(){

             var menu_activated;
            menu_activated = false;
            $('#menu_icon').click(function(){
                if(!menu_activated){
                    this.src = "images/menu_x.png";
                    $("#nav-bar-list").show("fast");
                    menu_activated = true;
                    
                }else{
                    this.src = "images/menu.png";
                    $("#nav-bar-list").hide("fast");
                    menu_activated = false;
                }

            });

            var startingPage = "home";
            $("#vertical-nav-bar ul li").each(function(index){
                if($(this).html() == startingPage.toUpperCase()){
                    
                }else{
                    if(!menu_activated){
                        $(this).mouseover(function(){
                            if(!menu_activated){
                                $(this).css("color","#AE2F69");
                            }
                        });
                        $(this).mouseout(function(){
                            if(!menu_activated){
                                $(this).css("color","black");
                            }
                        });
                        $(this).click(function(){
                            $(this).css("color","#30BAC7");
                        });
                    }
                }
            });
            
            var tempString = "";
            $('#vertical-nav-bar ul li').click(function(){
                tempString = "#content-" + $(this).attr('id');
                if($(tempString).is(":visible")){
                    
                } else{
                    $(".content-data").hide();
                    $(tempString).show("fast");
                }
                
            });

            var intervalHandle;
            var language_bar_max_width = 100;

            // Percentages
            var skill_c_sharp = 80;
            var skill_javascript = 60;
            var skill_html = 55;
            var skill_php = 20;
            var skill_c_plus = 30;
            var delay_tween = 0.5;
            var rate = 3;

            $('li#bio').click(function(){
                $('.progress-bar').css('width','0');
                TweenLite.to($('#c-sharp-bar'), rate, {width: skill_c_sharp * 2, delay: delay_tween});
                TweenLite.to($('#javascript-bar'), rate, {width: skill_javascript * 2, delay: delay_tween});
                TweenLite.to($('#html-bar'), rate, {width: skill_html * 2, delay: delay_tween});
                TweenLite.to($('#php-bar'), rate, {width: skill_php * 2, delay: delay_tween});
                TweenLite.to($('#c-plus-bar'), rate, {width: skill_c_plus * 2, delay: delay_tween});
            });

            $('#vertical-nav-bar li').click(function(){
                if(menu_activated){
                    $('#menu_icon').attr('src', 'images/menu.png');
                    $("#nav-bar-list").hide("fast");
                    menu_activated = false;
                }
            });
            
            $(".all-images").click(function(){
                $("#magic-box").show();
                var image_location = $(this).attr("src");
                $("#magic-box-image").attr({style: "content:url(" + image_location +")" });
            });

            $("#magic-box-exit").click(function(){
                $(this).parent().hide();
            });
            

            //CAROUSEL
            function carousel(target_element, image_1, image_2, image_3){
                var img = document.getElementById(target_element);
                var images = [];
                var seconds = 10;
                var image_index = 0;
                var duration = 800;
                var rate_of_fade = .10; //percentage
                var delta_fade_in = (25/100)*duration;
                var delta_fade_out = (75/100)*duration;
                // images[0] = "images/16_9_mobile_game.jpg";
                // images[1] = "images/16_9_dark_elf.jpg";
                // images[2] = "images/16_9_ninja_ramen.jpg";
                images[0] = image_1;
                images[1] = image_2;
                images[2] = image_3;

                img.src = images[0];
                img.style.opacity = 0;

                function ChangeImage()
                {
                    if(image_index<images.length - 1){
                        image_index++;
                    }
                    else{
                        image_index = 0;
                    }
                    img.src = images[image_index];
                    
                }
                
                var adder = 0;
                var timer = 0;
                function Fade(){
                    timer++;
                    if(timer > delta_fade_out){
                            adder -= .01;
                            img.style.opacity = adder;
                    }else{
                        if(img.style.opacity <= 1){
                            adder += .01;
                            img.style.opacity = adder;
                        }
                    }
                    if(timer > delta_fade_out && img.style.opacity < .1){
                        console.debug(image_index);
                        img.style.opacity = 0;
                        adder = 0;
                        timer = 0;
                        ChangeImage();
                    }   
                }

                //repeat carousel
                setInterval(function(){
                    Fade();
                }, seconds);
            
            }
                //HOME PAGE
                carousel('carousel-image','images/16_9_mobile_game.jpg', 'images/16_9_dark_elf.jpg', 'images/16_9_ninja_ramen.jpg');

                //PROJECTS PAGE
                carousel('carousel-galactic-defenders','images/galactic_defenders_1.jpg', 'images/gd_2.png', 'images/gd_4.png');
                carousel('carousel-ninja-ramen','images/ninja_ramen_1.jpg', 'images/ninja_ramen_2.jpg', 'images/ninja_ramen_3.jpg');
                carousel('carousel-dw','images/defend_the_wall_2.jpg', 'images/defend_the_wall_1.jpg', 'images/example_code_1.png');
            
    
    });