var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.SphereGeometry( 1, 32, 32 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var sphere1 = new THREE.Mesh( geometry, material );
scene.add( sphere1 );

var sphere1 = new THREE.Mesh( geometry, material );
scene.add( sphere1 );

var sphere2 = new THREE.Mesh( geometry, material );
scene.add( sphere1 );

var sphere3 = new THREE.Mesh( geometry, material );
scene.add( sphere1 );

camera.position.z = 5;

var directionalLight = new THREE.DirectionalLight(0x555555, .2);
directionalLight.position.x = 3;
directionalLight.position.y = 4;
directionalLight.position.z = 4;
scene.add(directionalLight);

scene.fog = new THREE.Fog(0xffffff, 0, 20000);
renderer.setClearColor (scene.fog.color, .2);

var animate = function () {
	requestAnimationFrame( animate );

	sphere1.rotation.x += 0.01;
	sphere1.rotation.y += 0.01;
  
  sphere2.rotation.x += 0.01;
	sphere2.rotation.y += 0.01;
  
  sphere3.rotation.x += 0.01;
	sphere3.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate();