var scramble = 16;
var texts = [];
var words = [];

function preload()
{
    EczarSemiBold = loadFont('files/fonts/Eczar-SemiBold.ttf')
    Calibri = loadFont('files/fonts/calibri.ttf')
    CalibriB = loadFont('files/fonts/calibrib.ttf')
    CalibriI = loadFont('files/fonts/calibrii.ttf')
    texts = loadJSON('all_mutations.json');
    words = loadJSON('all_pesquisei.json')
}

function setup()
{
    // create canvas
    createCanvas(windowWidth-20, windowHeight-20);
    frameRate(8)
}

function print_main_word()
{  
    word = words[scramble];
    push();

        if (scramble == 0)
        {
            translate(60,120)
        }
        else if (scramble < 10)
        {
            translate(55,120)
        }
        else
        {
            translate(40,120)
        }
    textFont(EczarSemiBold, 140);
    text(word,0,0)
    pop();


}

function print_text()
{
    word = texts[scramble];
    push();
        translate(50,200)
        textFont(CalibriB, 30);
        text(word.substr(0,14),0,0)
        textFont(CalibriI, 30);
        text(word.substr(14,7),170,0)
        textFont(Calibri, 30);
        text(word.substr(21,30),240,0)
        text(word.substr(51,46),0,40)
        text(word.substr(97,14),0,80)
        textFont(CalibriB, 30);
        text(word.substr(111,3),190,80)
        textFont(CalibriI, 30);
        text(word.substr(114,13),220,80)
        textFont(Calibri, 30);
        text(word.substr(127,23),350,80)
        text(word.substr(150),0,120)
        if (scramble == 0)
        {
            textFont(Calibri, 20);
            text("~",421,30)
            textFont(Calibri, 19);
            text("^",527.5,109)
        }
    pop();    
}

function draw()
{
    background(20);
    translate(50,50)
    fill(220);
    //strokeWeight(4);

    print_main_word()
    print_text()
    if (scramble > 0)
    {
        scramble -= 1
    }
}

function keyPressed() {
    if ( (keyCode == UP_ARROW) & (scramble < 20) )
    {
        scramble += 1
    }
    else if ( (keyCode == DOWN_ARROW) & (scramble > 0) )
    {
        scramble -= 1
    }
    else if ( keyCode == RIGHT_ARROW )
    {
        scramble = 0
    }
    console.log(scramble)
    return 0;
}