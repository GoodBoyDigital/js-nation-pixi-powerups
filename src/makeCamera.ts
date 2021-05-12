import { Container,
    Graphics,
    InteractionEvent,
    Matrix,
    Renderer,
    RenderTexture,
    Sprite,
} from 'pixi.js';

export function makeCamera(renderer: Renderer, scene: Container, imageContainer: Container)
{
    let shotCount = 0;

    scene.interactive = true;

    // @ts-ignore
    scene.on('pointerdown', (e: InteractionEvent) =>
    {
        const renderTexture = RenderTexture.create({ width: 512, height: 512 });
        const matrix = new Matrix();

        matrix.tx = -e.data.global.x + (512 / 2);
        matrix.ty = -e.data.global.y + (512 / 2);

        // cap..
        matrix.tx = Math.min(Math.max(matrix.tx, -(renderer.width - 512)), 0);
        matrix.ty = Math.min(Math.max(matrix.ty, -(renderer.height - 512)), 0);

        renderer.render(scene, renderTexture, false, matrix);

        const picture = new Container();
        const bg = new Graphics()
            .beginFill(0x00000, 0.3)
            .drawRect(20, 20, 512 + 40, 512 + 20 + 100)
            .beginFill(0xFFFFFF)
            .drawRect(0, 0, 512 + 40, 512 + 20 + 100);

        const sprite = new Sprite(renderTexture);

        sprite.x = 20;
        sprite.y = 20;

        picture.addChild(bg);
        picture.addChild(sprite);
        imageContainer.addChild(picture);

        picture.scale.set(0.5);
        picture.x = (shotCount * 200) % renderer.width;
        picture.y = 0;
        picture.rotation = (Math.random() - 0.5) * 0.3;
        shotCount++;

        if (false)
        {
            const canvas = renderer.extract.canvas(renderTexture);

            canvas.toBlob((blob) =>
            {
                const imageURL = URL.createObjectURL(blob);

                const link = document.createElement('a');

                link.href = imageURL;
                link.download = `sea-shot-${shotCount}`;

                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }, 'image/jpeg', 1);
        }
    });
}
