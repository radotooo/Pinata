import { Sprite } from 'pixi.js';
import gsap from 'gsap';

/**
 * Initializes a new instance of Cactus
 * @class
 * @extends {PIXI.Sprite}
 */
export default class Cactus extends Sprite {
  /**
   * @param {Number} x Sprite X coordinate
   * @param {Number} y Sprite Y coortinate
   * @param {String} texture Sprite texture
   * @param {String} name Sprite name
   */
  constructor(x, y, texture, name) {
    super(texture);
    this.x = x;
    this.y = y;
    this.name = name;

    this.anchor.set(0.5, 1);
  }

  /**
   *  Animate cactus movement
   * @public
   */
  dance() {
    gsap.to(this, {
      rotation: 1,
      repeat: -1,
      yoyo: true,
      ease: 'Power2.easeInOut',
    });
  }
}
