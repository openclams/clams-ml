import Edge from '../edge';

/**
 * User profiles use arrows as edges to connect
 * the states.
 */
export default class Arrow extends Edge {
  /**
   * Probability annotation of the arrow.
   */
  public probability = 1;

  /**
   * Shape infromation of the arrow's coners
   * for rendering.
   */
  public shape: number[];

  constructor(from, to) {
    super(from, to);
    const sumOutgoing = from.edgesOut.map(arrow => arrow.probability).reduce((previous, current) => previous + current, 0);
    if (1 - sumOutgoing <= 0) {
      this.probability = 0;
    } else {
      this.probability = 1 - sumOutgoing;
    }
  }

  public getType(): string {
    return 'Arrow';
  }
}
