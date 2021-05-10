import { Renderer, Container, Ticker } from 'pixi.js';
import { makeBackground } from './makeBackground';
import { makeCamera } from './makeCamera';
import { makeEel } from './makeEel';
import { makeFilters } from './makeFilters';
import { makeFishes } from './makeFishes';

document.body.style.margin = '0px';
document.body.style.overflow = 'hidden';

const width = window.innerWidth;
const height = window.innerHeight;

const renderer = new Renderer({
    width,
    height,
});

document.body.appendChild(renderer.view);

const stage = new Container();

const scene = new Container();

stage.addChild(scene);

makeBackground(renderer, scene);
makeFishes(renderer, scene);
makeEel(renderer, scene);
makeFilters(renderer, scene);

const imageContainer = new Container();

makeCamera(renderer, scene, imageContainer);
stage.addChild(imageContainer);

Ticker.shared.add(() =>
{
    renderer.render(stage);
});
