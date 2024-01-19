AFRAME.registerComponent("walls", {
  schema:{
    height:{type:"number",default:5},
    width:{type:"number",default:1},
    depth:{type:"number",default:1}
  },

  init: function () {

    for (var i = 0; i < 20; i++) {
      //create wire-fence entity
      var box = document.createElement("a-entity");
      box.setAttribute("id","box"+i)
      

      //set x, y and z position
      posX = Math.random()*200-100;
      posY = 1.5;
      posZ = Math.random()*200-100;
      position={x:posX,y:posY,z:posZ}
      
      
      
      //set the position
      box.setAttribute("position", position);
      
      
      //set the scale
      box.setAttribute("geometry", {primitive:"box",height:this.data.height,width:this.data.width,depth:this.data.depth});
     
     
      //set the model
      
      box.setAttribute("static-body", {});
     
      var sceneEl = document.querySelector("#scene");
      //attach the entity to the scene
      sceneEl.appendChild(box);

      

    }
  },
});