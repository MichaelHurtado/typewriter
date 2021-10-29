function drawPaper(){
	push();
	noStroke();
	specularMaterial(251,243,211);
	translate(cpos.x, cpos.y, cpos.z);
	rotateX(PI/12);
	translate(0,1,0);
	rotateZ(PI/2);
	cylinder(height/20, height/2, 24,1,false, false); //Mask bottom of roller
	translate(-pheight/2,-0,height/20);
	plane(pheight,height/2); //Front sheet
	translate(pheight/2,0,-height/10);
	translate(-bheight/2,0,0);
	plane(bheight,height/2); //Back sheet
	pop();
}