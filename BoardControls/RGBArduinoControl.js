const { Board, Led } = require("johnny-five");
const board = new Board();

//https://www.npmjs.com/package/johnny-five
class RGBControl{
    constructor(RGBPins){
        this.RGBPins = RGBPins
        this.#color = ``;
        this.#blink = 1000;
        this.#onState = true
    }
    setColor(newColor)
    {
        //set leds color
        if(newColor.length()==6)
        {
            //add check for hexidecimal in all 6 digits for color
            color=newColor;
        }
    }
    getColor()
    {
        //return color of leds
        return(color);
    }
    setOn()
    {
        //turn on leds
        onState = true
    }
    setOff()
    {
        //turns off leds
        onState = true
    }
    setBlink(blinkRate)
    {
        //makes leds blink at blinkRate
        blink = blinkRate;
        
    }
    getBlink()
    {
        return(blink);
    }

}


