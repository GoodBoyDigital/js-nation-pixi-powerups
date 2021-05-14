import { Container } from '@pixi/display';
import { Graphics } from '@pixi/graphics';
import { Point } from '@pixi/math';
import { Ticker } from '@pixi/ticker';

export function showDebugPoints(points: Point[]): Container
{
    const container = new Container();
    const dots: Container[] = [];

    for (let i = 0; i < points.length; i++)
    {
        const dot = new Graphics().beginFill(0xFF0000).drawCircle(0, 0, 20);

        container.addChild(dot);
        dots.push(dot);
    }

    Ticker.shared.add(() =>
    {
        for (let i = 0; i < points.length; i++)
        {
            dots[i].x = points[i].x;
            dots[i].y = points[i].y;
        }
    });

    return container;
}
