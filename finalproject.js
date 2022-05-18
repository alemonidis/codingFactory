// JavaScript source code



function SwitchSlide() {

    let slider = document.getElementById('slider');

    const images = ["concert.jpg","concertphoto2.jpg", "hugo-l-casanova-eXb2qYOcnys-unsplash.jpg"];

    for(let i= 0; i< images.length; i++) {

        slider.style.backgroundImage = images[i];

            

    }

    


}


document.getElementById('slider').addEventListener('mouseover', function() {

    setInterval(SwitchSlide, 2000);


});


function Submit() {

    var elements = document.getElementsByClassName('form-input');

    for (let i=0; i<elements.length; i++) {

        elements[i].style.backgroundColor= '#90EE90';


    }

    document.getElementById('successmsg').style.display = 'block';
}


document.getElementById('age').addEventListener('mouseover',function(){

    document.getElementById('age-rule').style.display = 'block';



});

document.getElementById('age').addEventListener('mouseout',function(){

    document.getElementById('age-rule').style.display = 'none';



});

document.getElementById('pswrd').addEventListener('mouseover',function(){

    document.getElementById('pswrd-rule').style.display = 'block';



});

document.getElementById('pswrd').addEventListener('mouseout',function(){

    document.getElementById('pswrd-rule').style.display = 'none';



});

document.getElementById('pswrd').addEventListener('change', function() {

    var charlength = document.getElementById('pswrd').value;

    if(charlength>=8) {

        document.getElementById('tick-span').style.display = 'inline';
    }
    else {
        document.getElementById('tick-span').style.display = 'none';
    }


});