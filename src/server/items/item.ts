import { Droppable, Shape } from "./interfaces";

export default abstract class Item implements Droppable {
	protected constructor(public shape: Shape) {

	}
}
