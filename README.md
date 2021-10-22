# panl

Primary Accent Neutral Layout to help UI/UX designer/developer to visualize color combination on components.

## Creating Color Palette

Color palette is created from contentful and use node to generate a json file. This way the no API key will be exposed and user are not creating their own palettes. To create a new palette, log in to contentful and then enter new color theme. To generate the json file run the node task, `node tasks/compileColorPalette.cjs`. The json file will be stored in `src/data/colors.json`.

## Resizing & Greyscale

Resizing and turning each photo in public directory to greyscale with a node task. The full colored images are read by node and turned to greyscale and resized according to the sizes array in the node task file, `node-resize-greyscale.cjs`. To run the task, `node tasks/node-resize-greyscale.cjs`.
