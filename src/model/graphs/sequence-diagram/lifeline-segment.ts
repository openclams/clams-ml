import Instance from './instance';

/**
 * A life line consits of multuple segements,
 * in order to snap messages to the life line.
 */
export default class LifelineSegment {
  constructor(public instance: Instance,
              public position: number) {
  }
}
