var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.SphereGeometry( .5, 18, 18 );

var electronGeometry = new THREE.SphereGeometry( .1, 18, 18 );

var materialElectron = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
var materialProton = new THREE.MeshPhongMaterial( { color: 0xffffff } );
var materialNeutron = new THREE.MeshPhongMaterial( { color: 0xff0000 } );

var sphere1 = new THREE.Mesh( geometry, materialProton );
scene.add( sphere1 );
sphere1.position.z=0;
sphere1.position.x=.5;
sphere1.position.y=0;

var sphere2 = new THREE.Mesh( geometry, materialNeutron );
scene.add( sphere2 );
sphere2.position.z=0;
sphere2.position.x=0;
sphere2.position.y=0;

var sphere3 = new THREE.Mesh( geometry, materialProton );
scene.add( sphere3 );
sphere3.position.z=0;
sphere3.position.x=0;
sphere3.position.y=.5;

var sphere4 = new THREE.Mesh( geometry, materialNeutron );
sphere4.position.z=0;
sphere4.position.x=.5;
sphere4.position.y=.5;
scene.add( sphere4 );

var sphere5 = new THREE.Mesh( geometry, materialNeutron );
scene.add( sphere5 );
sphere5.position.z=0.165;
sphere5.position.x=0.165;
sphere5.position.y=0.165;

var sphere6 = new THREE.Mesh( geometry, materialProton );
scene.add( sphere6 );
sphere6.position.z=-.165;
sphere6.position.x=0.165;
sphere6.position.y=0.165;


var electron1 = new THREE.Mesh( electronGeometry, materialElectron );
scene.add( electron1 );

var electron2 = new THREE.Mesh( electronGeometry, materialElectron );
scene.add( electron2 );

var electron3 = new THREE.Mesh( electronGeometry, materialElectron );
scene.add( electron3 );

var electron4 = new THREE.Mesh( electronGeometry, materialElectron );
scene.add( electron4 );

var electron5 = new THREE.Mesh( electronGeometry, materialElectron );
scene.add( electron5 );

var electron6 = new THREE.Mesh( electronGeometry, materialElectron );
scene.add( electron6 );

var electron7 = new THREE.Mesh( electronGeometry, materialElectron );
scene.add( electron7 );

var electron8 = new THREE.Mesh( electronGeometry, materialElectron );
scene.add( electron8 );

var electron9 = new THREE.Mesh( electronGeometry, materialElectron );
scene.add( electron9 );

var electron10 = new THREE.Mesh( electronGeometry, materialElectron );
scene.add( electron10 );

camera.position.z = 5;
camera.position.y= 0;
camera.position.x = 0;

const light = new THREE.DirectionalLight( 0xffffff, 1, 100 );
light.position.set( 8, 1, 4 ); //default; light shining from top
light.castShadow = true; // default false
scene.add(light);

scene.fog = new THREE.Fog(0x000000, 0, 20000);
renderer.setClearColor (scene.fog.color, 1);

var t = 0;
var t2 = 60;
var t3 = 180;
var t4 = 240;

var animate = function () {
	requestAnimationFrame( animate );
    t += 0.05;
    t2 += 0.05;
    t3 += 0.05;
    t4 += 0.05;

	// Horizontal
    electron1.position.x = 3*Math.cos(t);
    electron1.position.z = 3*Math.sin(t);

	electron4.position.x = -3*Math.cos(t);
    electron4.position.z = -3*Math.sin(t);

	// Vertical
	electron2.position.x = 3*Math.cos(t2);
    electron2.position.y = 3*Math.sin(t2);
	
    electron5.position.x = -3*Math.cos(t2);
    electron5.position.y = -3*Math.sin(t2);

	// Diagonal 1
	electron7.position.x = -3*Math.cos(t3);	
	electron7.position.y = -3*Math.cos(t3);
	electron7.position.z = -3*Math.sin(t3);

	electron8.position.x = 3*Math.cos(t3);	
	electron8.position.y = 3*Math.cos(t3);
	electron8.position.z = 3*Math.sin(t3);

	// Diagonal 2
	electron9.position.x = -3*Math.cos(t4);	
	electron9.position.y = 3*Math.cos(t4);
	electron9.position.z = -3*Math.sin(t4);

	electron10.position.x = 3*Math.cos(t4);	
	electron10.position.y = -3*Math.cos(t4);
	electron10.position.z = 3*Math.sin(t4);

	renderer.render( scene, camera );
};

animate();