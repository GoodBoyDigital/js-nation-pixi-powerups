import { Application } from "@pixi/app";
import { Texture } from "@pixi/core";
import { Graphics } from "@pixi/graphics";
import { Sprite } from "@pixi/sprite";
import { Ticker } from "@pixi/ticker";

const app = new Application({
    width:window.innerWidth,
    height:window.innerHeight,
    autoStart:true,
})


document.body.style.margin = '0px';

document.body.appendChild(app.view);
document.body.style.overflow = 'hidden';

const g = new Graphics().beginFill(0xFF0000).drawCircle(0,0,100);

const bunny = new Sprite(Texture.WHITE);

bunny.scale.set(100)
app.stage.addChild(bunny);
app.stage.addChild(g);

Ticker.shared.add(()=>{
    console.log("M>")
});