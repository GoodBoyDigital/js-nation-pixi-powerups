import { Container, Sprite } from 'pixi.js';

export function makeBackground(scene: Container)
{
    const background = Sprite.from('assets/bg.png');

    scene.addChild(background);
}
