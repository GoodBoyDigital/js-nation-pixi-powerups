import { Sprite } from '@pixi/sprite';
import { Container, Renderer, Ticker } from 'pixi.js';

export function makeFishes(renderer: Renderer, scene: Container)
{
    const fishes = [];

    for (let i = 0; i < 20; i++)
    {
        const fish  = Sprite.from(`assets/fish${1 + (i % 7)}.png`) as any;

        fish.anchor.set(0.5, 0.5);

        fish.x = Math.random() * renderer.width;
        fish.y = Math.random() * (renderer.height - 300);

        fish.speed = (Math.random() - 0.5) * 3;
        fish.scale.x = fish.speed < 0 ? -1 : 1;

        scene.addChild(fish);

        fishes.push(fish);
    }

    Ticker.shared.add(() =>
    {
        for (let i = 0; i < fishes.length; i++)
        {
            const fish = fishes[i];

            fish.x += fish.speed;
            fish.x %= renderer.width;
        }
    });
}
