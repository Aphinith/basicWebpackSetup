## Instructions

1. Clone the repo: $git clone https://github.com/Aphinith/basicWebpackSetup.git
2. CD into root directory
4. `npm install`
5. `npm run build` 
6. Open the index.html file with your favorite browser (index.html file is in the /dist directory)
    1. Webpack config file has a single entry js file as the entry point to the application: index.js
    2. Can handle both .js and .jsx file extensions, outputs a single ES5 .js bundle file with a unique hash
    3. Can handle SCSS code with .scss extensions (style.scss), outputs a single .css file with a unique hash
    4. Can handle IMG files with .jpeg, .jpg, .png, and .gif extensions; files get created in the dist directory and when inspected with the element inspector on the browser, the src reference for the img tags references the files that were created (I'm assuming this is the link referencing the file).
    5. Also handles SVG files (the anchor image in this example), when inspecting the anchor image on the browser, the src reference is a base-64 data-encoded string. If the svg is greater than 1mb, its fallback is to use the file-loader which will return a link (like in number iv above).