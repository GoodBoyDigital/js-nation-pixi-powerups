import { BLEND_MODES, Container, Sprite, Ticker } from 'pixi.js';

export function makeShine(scene: Container)
{
    const shine = Sprite.from('assets/god-rays-ADD.png');

    shine.blendMode = BLEND_MODES.ADD;
    scene.addChild(shine);

    const shine2 = Sprite.from('assets/god-rays-ADD.png');

    shine2.blendMode = BLEND_MODES.ADD;
    scene.addChild(shine2);

    let tick = 0;

    Ticker.shared.add(() =>
    {
        tick += 0.01;

        shine.x = Math.cos(tick * 0.2) * 100;
        shine2.x = Math.sin(tick) * 100;
    });
}
