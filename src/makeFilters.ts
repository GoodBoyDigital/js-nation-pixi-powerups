import { Sprite } from '@pixi/sprite';
import { Container, filters, Renderer, Ticker, WRAP_MODES } from 'pixi.js';

export function makeFilters(renderer: Renderer, scene: Container)
{
    // const blur = new filters.BlurFilter();

    // scene.filters = [blur];

    const displacementSprite = Sprite.from('assets/water-displacement.jpeg');

    displacementSprite.texture.baseTexture.wrapMode = WRAP_MODES.REPEAT;
    displacementSprite.scale.set(6);

    scene.addChild(displacementSprite);

    const displacementFilter = new filters.DisplacementFilter(displacementSprite, 100);

    scene.filters = [displacementFilter];

    Ticker.shared.add(() =>
    {
        displacementSprite.x += 2;
        displacementSprite.y += 2;
    });
}
