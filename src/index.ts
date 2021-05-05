import { Renderer,Container,Graphics,Ticker, Sprite } from "pixi.js";


document.body.style.margin = '0px';
document.body.style.overflow = 'hidden';

const renderer = new Renderer({
    width:window.innerWidth,
    height:window.innerHeight,
    
})

document.body.appendChild(renderer.view);


const stage = new Container();
const g = new Graphics().beginFill(0xFF0000).drawCircle(0,0,100);

stage.addChild(g);

Ticker.shared.add(()=>{
    renderer.render(stage);

    // do stuff..


});