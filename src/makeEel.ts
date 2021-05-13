import { Sprite } from '@pixi/sprite';
import { Container, filters, Point, Renderer, SimpleRope, Texture, Ticker } from 'pixi.js';

export function makeEel(renderer: Renderer, scene: Container)
{
    // // step 3 add an eel

    const eelLength = 918 / 20;

    const points = [];

    for (let i = 0; i < 20; i++)
    {
        points.push(new Point(i * eelLength, 0));
    }

    const eel = new SimpleRope(Texture.from('assets/eel.png'), points);

    scene.addChild(eel);

    eel.x = 250;
    eel.y = 500;

    const count = 0;

    // Ticker.shared.add(() =>
    // {
    //     count += 0.1;

    //     // make the snake
    //     for (let i = 0; i < points.length; i++)
    //     {
    //         points[i].y = Math.sin((i * 0.5) + count) * 30;
    //         points[i].x = (i * eelLength) + (Math.cos((i * 0.3) + count) * 20);
    //     }
    // });
}
