import { Renderer, Container, Ticker, Sprite } from 'pixi.js';
import { makeBackground } from './makeBackground';
import { makeCamera } from './makeCamera';
import { makeEel } from './makeEel';
import { makeFilters } from './makeFilters';
import { makeFishes } from './makeFishes';
import { makeForeground } from './makeForeground';
import { makeShine } from './makeShine';
import { makeSpine } from './makeSpine';

document.body.style.margin = '0px';
document.body.style.overflow = 'hidden';

const width = 2000;// ;//window.innerWidth;
const height = 1200;// window.innerHeight;

const renderer = new Renderer({
    width,
    height,
});

renderer.view.style.width = '100%';
renderer.view.style.top = '50%';
renderer.view.style.position = 'absolute';
renderer.view.style.transform = 'translateY(-50%)';

document.body.appendChild(renderer.view);

const stage = new Container();

const scene = new Container();

stage.addChild(scene);

makeBackground(scene);
makeFishes(renderer, scene);
makeForeground(scene);
makeEel(renderer, scene);
makeSpine(renderer, scene);
makeShine(scene);
makeFilters(renderer, scene);

const imageContainer = new Container();
const vignette = Sprite.from('assets/vignette.png');

makeCamera(renderer, scene, imageContainer);

stage.addChild(vignette, imageContainer);

Ticker.shared.add(() =>
{
    renderer.render(stage);
});
