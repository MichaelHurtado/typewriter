class Hammer{
	constructor(ang, bend, letter){
		this.ang = ang;
		this.atarget = createVector(ang.x, ang.y, ang.z);
		this.bend = bend;
		this.l = 68;
		this.letter = letter;
		this.counter = 10;
	}
	move(){
		this.ang.lerp(this.atarget, 0.5);
		this.counter+=1;
		if(this.counter==4) this.atarget.y=0;
	}
	show(){
		push();
		specularMaterial(180);
		noStroke();
		rotateZ(this.ang.z);
		translate(0, 3*this.l/4,0);
		rotateX(this.ang.y);
		translate(0, this.l/2,0);
		box(1,this.l,4);
		translate(0,this.l/2,0);
		rotateX(-PI/4);
		rotateY(-this.bend);
		translate(0,this.l/8,0);
		box(5,this.l/4,6);
		translate(0,0,3.2);
		textAlign(CENTER, BOTTOM);
		textSize(7);
		specularMaterial(50);
		rotateX(PI);
		text(this.letter.toUpperCase(),0,0);
		text(this.letter,0,7);
		pop();
	}
}