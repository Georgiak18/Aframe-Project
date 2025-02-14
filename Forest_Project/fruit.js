class fruits{
  constructor(x,y,z){
    this.obj = document.createElement("a-sphere")
    this.obj.setAttribute("interact","");
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z})
    
	fruit.addEventListener("onclick","function(){
	  fruit.collect()
	})
	
	scene.append(this.obj)
  }
  
	collect(){
    fruit_collected++;
    this.obj.setAttribute("opacity",0)
  }
  
}