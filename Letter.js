class Letter{
	constructor(pos, char){
		this.pos = pos;
		this.tilt = PI/12;
		this.char = char;
	}
	show(){
		push();
		translate(cpos.x, cpos.y, cpos.z);
		rotateX(this.tilt);
		translate(-this.pos.x, this.pos.y+theight, this.pos.z); 
		fill(20);
		textAlign(CENTER, TOP);
		textSize(8);
		text(this.char, 0, 0);
		pop();	
	}
}