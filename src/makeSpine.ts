import { Container,
    Loader,
    Renderer,
} from 'pixi.js';
import { Spine } from 'pixi-spine';

export function makeSpine(renderer: Renderer, scene: Container)
{
    const loader = new Loader();

    loader.add('crab', 'assets/skeleton.json');

    loader.load((_loader, resource) =>
    {
        console.log(resource);
        const crab = new Spine(resource.crab.spineData);

        crab.position.set(renderer.width - 440, renderer.height - 40);

        // @ts-ignore
        crab.state.setAnimation(0, 'animation', true);

        scene.addChild(crab);
    });
}
