
        window.addEventListener('DOMContentLoaded', function(){
            var canvas = document.getElementById('canvas');

            var engine = new BABYLON.Engine(canvas, true);
            var createScene = function(){
                var scene = new BABYLON.Scene(engine);
                
                scene.clearColor = new BABYLON.Color3.White();
                
                var box = BABYLON.Mesh.CreateBox("Box",4.0,scene);
	
                var box2 = BABYLON.Mesh.CreateBox("Box2",4.0,scene);
                var material = new BABYLON.StandardMaterial("material1",scene);
                material.wireframe = true;
                box2.material = material;
    
                box2.position = new BABYLON.Vector3(0,5,0);
    
                var camera = new BABYLON.FollowCamera("followCam",BABYLON.Vector3.
                Zero(),scene);
                camera.lockedTarget = box;
                camera.radius = 50;
                camera.heightOffset = 0;
                camera.attachControl(canvas,true);
                
                return scene;
            }

            $(document).keydown(function(e){
                var k = e.which;
                if(k == "40" || k=='s') {
                    scene.getMeshByName("Box").position.z += 0.5;
                }
                else if(k == "39" || k=='d'){
                    scene.getMeshByName("Box").position.x += 0.5;                    
                }
                else if(k == "38" || k=='w') {
                    scene.getMeshByName("Box").position.z -= 0.5;
                }
                else if(k == "37" || k=='a') {
                    scene.getMeshByName("Box").position.x -= 0.5;                                        
                }
            });

            var scene = createScene();
            engine.runRenderLoop(function(){
                
                scene.render();
            });

        });
    