
class fruits{
  constructor(x,y,z){
    
    this.obj = treeTemplate.cloneNode(true);
    this.obj.setAttribute("interact","");
    this.obj.setAttribute("color","red");
    this.obj.setAttribute("position",{x:x,y:y,z:z})

    let elements = this.obj.getChildren();
    console.log(elements);
    for(let i = 4; i <=12;i++){
      elements[i].addEventListener("click",()=>{
        console.log("hi");
        fruit_collected++;
        elements[i].setAttribute("opacity",0)
      })
    }
    

	
	scene.append(this.obj)
  }
  

}