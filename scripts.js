var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.SphereGeometry( 1, 18, 18 );
var material = new THREE.MeshPhongMaterial( { color: 0xff0000 } );
var sphere1 = new THREE.Mesh( geometry, material );
scene.add( sphere1 );

var sphere1 = new THREE.Mesh( geometry, material );
scene.add( sphere1 );
sphere1.position.z=0;
sphere1.position.x=1;
sphere1.position.y=0;

var sphere2 = new THREE.Mesh( geometry, material );
scene.add( sphere2 );
sphere2.position.z=0;
sphere2.position.x=0;
sphere2.position.y=0;

var sphere3 = new THREE.Mesh( geometry, material );
scene.add( sphere3 );
sphere3.position.z=0;
sphere3.position.x=0;
sphere3.position.y=1;

var sphere4 = new THREE.Mesh( geometry, material );
sphere4.position.z=0;
sphere4.position.x=1;
sphere4.position.y=1;
scene.add( sphere4 );

var sphere5 = new THREE.Mesh( geometry, material );
scene.add( sphere5 );
sphere5.position.z=0.33;
sphere5.position.x=0.33;
sphere5.position.y=0.33;

var sphere6 = new THREE.Mesh( geometry, material );
scene.add( sphere6 );
sphere6.position.z=-.33;
sphere6.position.x=0.33;
sphere6.position.y=0.33;

camera.position.z = 5;
camera.position.y= 0;
camera.position.x = 0;

const light = new THREE.DirectionalLight( 0xffffff, 1, 100 );
light.position.set( 8, 1, 4 ); //default; light shining from top
light.castShadow = true; // default false
scene.add(light);

scene.fog = new THREE.Fog(0xffffff, 0, 20000);
renderer.setClearColor (scene.fog.color, 1);

var animate = function () {
	requestAnimationFrame( animate );

	sphere1.rotation.x += 0.01;
	sphere1.rotation.y += 0.01;
  
  sphere2.rotation.x += 0.01;
	sphere2.rotation.y += 0.01;
  
  sphere3.rotation.x += 0.01;
	sphere3.rotation.y += 0.01;
  
  sphere4.rotation.x += 0.01;
	sphere4.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate();