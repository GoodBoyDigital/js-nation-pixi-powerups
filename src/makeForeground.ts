import { Container, Sprite } from 'pixi.js';

export function makeForeground(scene: Container)
{
    const foreground = Sprite.from('assets/fore.png');

    scene.addChild(foreground);
}
