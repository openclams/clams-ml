import Edge from '../edge';

/**
 * User profiles use arrows as edges to connect
 * the states.
 */
export default class Arrow extends Edge {

  constructor(from, to) {
    super(from, to);
  }
  /**
   * Probability annotation of the arrow.
   */
  public probability = 1;

  /**
   * Shape infromation of the arrow's coners
   * for rendering.
   */
  public shape: {x: number, y: number}[];

  public getId(): string {
    return this.from.id + this.to.id;
  }

  public getType(): string {
    return 'Arrow';
  }
}
