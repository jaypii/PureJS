// these need to be accessed inside more than one function so we'll declare them first
let container;
let camera;
let controls;
let renderer;
let scene;

const mixers = [];
//let mesh;
const clock = new THREE.Clock();

function init() {
   // Get a reference to the container element that will hold our scene
   container = document.querySelector( '#scene-container' );

   // create a Scene
   scene = new THREE.Scene();

   // Set the background color
   scene.background = new THREE.Color( 'skyblue' );
   
   createCamera();
   createControls();
   createLights();
   loadModels();
   createRenderer();
   
   // start the animation loop
   renderer.setAnimationLoop( () => {
      update();
      render();
   } );
}

function createCamera() {
   camera = new THREE.PerspectiveCamera(
      35, //FOV
      container.clientWidth / container.clientHeight, // aspect
      0.1, // near clipping plane
      1000, // far clipping plane
   );
   camera.position.set( -100, 100, 400);
}

function createControls() {
   controls = new THREE.OrbitControls( camera, container );
}

function createLights() {
   const ambientLight = new THREE.HemisphereLight(
      0xddeeff, // bright sky color
      0x202020, // dim ground color
      5, // intensity
    );

   const mainLight = new THREE.DirectionalLight( 0xffffff, 5.0 );
   mainLight.position.set( 10, 10, 10 );

   scene.add( ambientLight, mainLight );
}

function loadModels() {

   const loader = new THREE.GLTFLoader();
 
   // A reusable function to set up the models. We're passing in a position parameter
   // so that they can be individually placed around the scene
   const onLoad = ( gltf, position ) => {
 
     const model = gltf.scene.children[ 0 ];
     model.position.copy( position );
 
     const animation = gltf.animations[ 0 ];
 
     const mixer = new THREE.AnimationMixer( model );
     mixers.push( mixer );
 
     const action = mixer.clipAction( animation );
     action.play();
 
     scene.add( model );
 
   };
 
   // the loader will report the loading progress to this function
   const onProgress = () => {};
 
   // the loader will send any error messages to this function, and we'll log
   // them to to console
   const onError = ( errorMessage ) => { console.log( errorMessage ); };
 
   // load the first model. Each model is loaded asynchronously,
   // so don't make any assumption about which one will finish loading first
   const parrotPosition = new THREE.Vector3( -50, 35, 15 );
   loader.load( 'assets/models/Parrot.glb', gltf => onLoad( gltf, parrotPosition ), onProgress, onError );
 
   const flamingoPosition = new THREE.Vector3( 75, 0, 0);
   loader.load( 'assets/models/Flamingo.glb', gltf => onLoad( gltf, flamingoPosition ), onProgress, onError );
 
   const storkPosition = new THREE.Vector3( -75, -45, 50
      );
   loader.load( 'assets/models/Stork.glb', gltf => onLoad( gltf, storkPosition ), onProgress, onError );
 
}

function createRenderer() {
   renderer = new THREE.WebGLRenderer({ antialias: true });
   renderer.setSize( container.clientWidth, container.clientHeight );
   renderer.setPixelRatio( window.devicePixelRatio );

   renderer.gammaFactor = 2.2;
   renderer.gammaOutput = true;

   renderer.physicallyCorrectLights = true;

   container.appendChild( renderer.domElement );
}

/*********************************************************
 * Utility functions
 *********************************************************/

// perform any updates to the scene, called once per frame
// avoid heavy computation here
function update() {

   const delta = clock.getDelta();

   for ( const mixer of mixers ) {
 
      mixer.update( delta );
 
   }
}

// render, or 'draw a still image', of the scene
function render() {
   renderer.render( scene, camera );
}

// a function that will be called every time the window gets resized.
// It can get called a lot, so don't put any heavy computation in here!
function onWindowResize() {

   // set the aspect ratio to match the new browser window aspect ratio
   camera.aspect = container.clientWidth / container.clientHeight;

   // update the camera's frustum
   camera.updateProjectionMatrix();

   // update the size of the renderer AND the canvas
   renderer.setSize( container.clientWidth, container.clientHeight );
}
 
window.addEventListener( 'resize', onWindowResize );
 
// call the init function to set everything up
init();