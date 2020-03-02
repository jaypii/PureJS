
/****************************************************************
 *  JS functions for simple toy train model
 ****************************************************************/

function createMaterials() {

   const body = new THREE.MeshStandardMaterial({
      color: 0xff3333, // red
      flatShading: true,
   });
   // just as with textures, we need to put colors into linear color space
   body.color.convertSRGBToLinear();
  
   const detail = new THREE.MeshStandardMaterial({
      color: 0x333333, // darkgrey
      flatShading: true,
   });

   detail.color.convertSRGBToLinear();

   return {
      body,
      detail,
   };  
}

function createGeometries() {
   const nose = new THREE.CylinderBufferGeometry( 0.75, 0.75, 3, 12 );
   const cabin = new THREE.BoxBufferGeometry( 2, 2.25, 1.5 );
   const chimney = new THREE.CylinderBufferGeometry( 0.3, 0.1, 0.5 );
   // we can reuse a single cylinder geometry for all 4 wheels
   const wheel = new THREE.CylinderBufferGeometry( 0.4, 0.4, 1.75, 16 );
   wheel.rotateX( Math.PI / 2 );

   return {
      nose,
      cabin,
      chimney,
      wheel,
   }
}

function createMeshes() {
   // create a Group to hold the pieces of the train
   const train = new THREE.Group();

   const materials = createMaterials();
   const geometries = createGeometries();

   const nose = new THREE.Mesh( geometries.nose, materials.body );
   nose.rotation.z = Math.PI / 2;
   nose.position.x = -1;

   const cabin = new THREE.Mesh( geometries.cabin, materials.body );
   cabin.position.set( 1.5, 0.4, 0 );

   const chimney = new THREE.Mesh( geometries.chimney, materials.detail );
   chimney.position.set( -2, 0.9, 0 );

   const smallWheelRear = new THREE.Mesh( geometries.wheel, materials.detail );
   smallWheelRear.position.set( 0, -0.5, 0 );

   const smallWheelCenter = smallWheelRear.clone();
   smallWheelCenter.position.x = -1;

   const smallWheelFront = smallWheelRear.clone();
   smallWheelFront.position.x = -2;

   const bigWheel = smallWheelRear.clone();
   bigWheel.scale.set( 2, 2, 1.25 );
   bigWheel.position.set( 1.5, -0.1, 0 );

   train.add(
      nose,
      cabin,
      chimney,

      smallWheelRear,
      smallWheelCenter,
      smallWheelFront,
      bigWheel,
   )
}

/*************************************************************
 *  MODEL LOADER function
 *************************************************************/

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