import { Sprite } from 'pixi.js';
import gsap from 'gsap';

/**
 * @summary Create an instance of PIXI.Sprite
 * @extends {PIXI.SPrite}
 * @param {Number} x Sprite X coordinate
 * @param {Number} y Sprite Y coortinate
 * @param {String} texture Sprite texture
 *
 */

export default class Cactus extends Sprite {
  constructor(x, y, texture) {
    super(texture);

    this.name = 'cactus';

    this.x = x;
    this.y = y;
  }

  /**
   * @summary Animate sprite movement
   */
  dance() {
    this.anchor.set(0.5, 1);
    gsap.to(this, {
      rotation: 1,
      repeat: -1,
      yoyo: true,
      ease: 'Power2.easeInOut',
    });
  }
}
