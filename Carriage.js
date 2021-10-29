function drawCarriage(){
	push();
	translate(cpos.x,cpos.y,cpos.z);
	noStroke();
	specularMaterial(50);
	rotateZ(PI/2);
	cylinder(height/20, 3*height/5);
	pop();
}