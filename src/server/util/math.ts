import { gameDimensions } from "../../shared/models";

export function randomPointOnCanvas(){
	return [
		Math.floor(Math.random() * gameDimensions.x),
		Math.floor(Math.random() * gameDimensions.y)
	]
}

export function randomInt(range: number){
	return Math.floor(Math.random() * range);
}

export function random(input: number|any[]){
	if (Array.isArray(input)){
		return input[randomInt(input.length)];
	}
	return randomInt(input);

}
