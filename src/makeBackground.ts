import { Container, Renderer, Sprite } from 'pixi.js';

export function makeBackground(renderer: Renderer, scene: Container)
{
    const background = Sprite.from('assets/sea-bg.jpeg');

    scene.addChild(background);

    background.width = renderer.width;
    background.height = renderer.height;
}
