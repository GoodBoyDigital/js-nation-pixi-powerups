import { Container, Sprite } from 'pixi.js';

export function makeVignette(scene: Container)
{
    const background = Sprite.from('assets/vignette.png');

    scene.addChild(background);
}
