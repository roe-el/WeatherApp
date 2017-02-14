$(document).ready(function() {
    var Kelvin;
    var Fahrenheit;
    var Celsius;
    var icon;
    //Using ipinfo API to get the location information from the user which will then be used with the openweathermap API to gather weather information
    function getLocation() {
        $.getJSON("http://ipinfo.io", function(response) {
            var cc = response.country;
            var city = response.city;
            var state = response.region;
            $(".city").html(city + "," + state);
            var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + cc + "&APPID=1d0e324c03cd19ecf0abf20ac2708666";

            getWeather(url);

        });
    }
    //Here the location info from getLocation is used to obtain weather information which is then displayed for the user in text and background image
    function getWeather(url) {
        $.getJSON(url, function(response) {
            Kelvin = Math.round(response.main.temp);
            Fahrenheit = Math.round((9 / 5) * (Kelvin - 273) + 32);
            Celsius = Kelvin - 273;
            icon = response.weather[0].icon;
            $(".temp").html(Fahrenheit + "°F");
            $(".main").html(response.weather[0].main);
            $(".icon").html("<img src=\"http://openweathermap.org/img/w/" + icon + ".png\" alt = \"icon\">" + "</img>");
            //Switch statement that changes background depending on the weather icon, more specific weather backgrounds from weather condition codes could be used as well
            switch (icon) {
                //Clear Sky-Day
                case "01d":
                    $(".container-fluid").css("background-image", "url(http://www.esquireglobalcrossings.com/files/2014/10/180467131.jpg)");

                    break;
                    //Clear Sky-Night
                case "01n":
                    $(".container-fluid").css("background-image", "url(http://wilddamntexan.com/kids/nightsky_newton_120126.jpg)");
                    break;
                    //Few Clouds-Day
                case "02d":
                    $(".container-fluid").css("background-image", "url(http://susanstilwell.com/wp-content/uploads/2011/10/dreamstimefree_20823097.jpg)");

                    break;
                    //Few Clouds-Night
                case "02n":
                    $(".container-fluid").css("background-image", "url(http://1.bp.blogspot.com/-Amkkl1IIygk/UrPq6cPscVI/AAAAAAAABx4/PIL86DTtV5o/s1600/full+moon+and+whispy+clouds+lyndi+thompson+maple+valley.jpg)");

                    break;
                    //Scattered Clouds-Day
                case "03d":
                    $(".container-fluid").css("background-image", "url(https://tse4.mm.bing.net/th?id=OIP.Mf8d7ab4b07838c231c7b375c01ccd914o0&pid=15.1)");
                    break;
                    //Scattered Clouds-Night
                case "03n":
                    $(".container-fluid").css("background-image", "url(http://il8.picdn.net/shutterstock/videos/9682532/thumb/1.jpg)");
                    break;
                    //Broken Clouds-Day
                case "04d":
                    $(".container-fluid").css("background-image", "url(https://tse3.mm.bing.net/th?id=OIP.HK_cLlWy_tHHb3lVrT1x1wEsC7&pid=15.1)");
                    break;
                    //Broken Clouds-Night
                case "04n":
                    $(".container-fluid").css("background-image", "url(http://3.bp.blogspot.com/-oHQAaVLuOI4/UfEtlvesXZI/AAAAAAAAWbU/YRKlIbUdNh8/s1600/1+moon.JPG)");
                    break;
                    //Shower Rain-Day
                case "09d", "10d":
                    $(".container-fluid").css("background-image", "url(https://orangecountytribune.files.wordpress.com/2017/01/rain.jpg?w=639&h=426)");
                    break;
                    //Shower Rain,Rain-Night
                case "09n", "10n":
                    $(".container-fluid").css("background-image", "url(http://images.astronet.ru/pubd/2007/08/12/0001223069/perseids_bruenjes.jpg)");
                    break;

                    //Thunderstorm
                case "11d", "11n":
                    $(".container-fluid").css("background-image", "url(https://tse4.mm.bing.net/th?id=OIP.M78d9aa214dc9d935b5dd9261730b3d7eo0&pid=15.1)");
                    break;

                    //Snow-Day
                case "13d":
                    $(".container-fluid").css("background-image", "url(http://weatherpiccies.com/2015/FallSnowDayFlashOnMelki.jpg)");
                    break;
                    //Snow-Night
                case "13n":
                    $(".container-fluid").css("background-image", "url(http://img08.deviantart.net/8993/i/2003/8/3/6/snow_fall_at_night.jpg)");
                    break;
                    //Mist-Day
                case "50d":
                    $(".container-fluid").css("background-image", "url(http://4.bp.blogspot.com/-jELkQWL9RYU/UZQBGCzWbiI/AAAAAAAAA-8/aE-M6s89FiU/s1600/mist.jpg)");
                    break;
                    //Mist-Night
                case "50n":
                    $(".container-fluid").css("background-image", "url(http://media-cache-ec0.pinimg.com/736x/17/c4/db/17c4db2aa8188fbd219cd8b39d82c55c.jpg)");
                    break;

                default:
                    $(".container-fluid").css("background-image", "url(https://tse1.mm.bing.net/th?id=OIP.QlJ-kIQLec0L4gVwYHV00wErEs&pid=15.1)");
                    break;
                    //clear sky

            }
        });
    }
    getLocation();
    //Converting the temp from Fahrenheit to Celsius and back
    var convert = true;
    $(".btn").click(function() {
        if (convert === true) {
            $(".temp").html(Celsius + "°C");
            convert = false;
        } else {
            $(".temp").html(Fahrenheit + "°F");
            convert = true;
        }
    });

});
