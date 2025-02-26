let rnd = (l,u) => Math.random()*(u-l) + l;
let animals = [],scene, fruit_collected = 0;
let Bear = {template:"#bear",scale:0.05,speed:0.05, rotation:-Math.PI / 2}
let Wolf = {template:"#wolf",scale:1.0,speed:0.1, rotation:0}
let creature = [Bear,Wolf], house;
let chase = true;
let treeTemplate;


window.onload = function(){
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  house = document.getElementById("house");
  house2 = document.getElementById("house2");
  treeTemplate = document.getElementById("treeTemplate");
 
  for(let i = 0;i < 5; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    new fruits(x,1,z);
    
   }

  for(let i = 0; i < 6; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let c = Math.floor(rnd(0,creature.length));
	animals.push(new Animal(x,0,z,creature[c]));
  }
  setTimeout(loop,1000);
}

function loop(){
  Fruitcollected.setAttribute("value",`Fruits: ${fruit_collected}`);
  for(let animal of animals){
    let d = distance(animal.obj, camera);
	//let d2 = distance(house,camera);
	let d3 = distance(house2,camera);
	if(chase){
		if( d < 3){
			animal.stop()
			camera.setAttribute("position", "-66 1.5 -86");
			
		}else{
			animal.rotateTowards(camera);
			animal.forward()
		}
	}else{
	  animal.rotateAway(camera);
      animal.forward() 	
	}
	
    //if(d2 < 5 ){
		//chase = false;	
	//}else
  
  if(d3 < 5){
		chase = false;
	}else{
		chase = true;
	}
	
  }

 if (fruit_collected >= 2){
  console.log("You win!");
  camera.setAttribute("position", "-66 1.5 -86");
  }

  window.requestAnimationFrame(loop);
}


function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}


