import { Sprite } from '@pixi/sprite';
import { Container, filters, Graphics, Point, Renderer, SimpleRope, Texture, Ticker } from 'pixi.js';
import { showDebugPoints } from './showDebugPoints';

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

    let count = 0;

    scene.addChild(eel);

    eel.x = 250;
    eel.y = 500;

    // const pointsView = showDebugPoints(points);

    // eel.addChild(pointsView);

    Ticker.shared.add(() =>
    {
        count += 0.1;

        // make the snake
        for (let i = 0; i < points.length; i++)
        {
            points[i].y = Math.sin((i * 0.5) + count) * 30;
            points[i].x = (i * eelLength) + (Math.cos((i * 0.3) + count) * 20);
        }
    });
}
