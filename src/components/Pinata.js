import { Container, Sprite } from 'pixi.js';
import gsap from 'gsap';

/**
 * Initializes a new instance of Pinata
 * @class
 * @extends {PIXI.Container}
 */
export default class Pinata extends Container {
  constructor() {
    super();
    this.name = 'pinata';

    this._init();
  }

  /**
   * @private
   */
  _init() {
    this._createBody();
    this._addListeners();
  }

  /**
   * @private
   */
  _createBody() {
    const body = new Sprite.from('pinata');

    body.anchor.set(1, 0);
    body.interactive = true;
    body.buttonMode = true;

    this._body = body;
    this.addChild(this._body);
  }

  /**
   *  Animate pinata movement
   * @public
   */
  dance() {
    gsap.to(this._body, {
      rotation: -0.3,
      repeat: -1,
      yoyo: true,
      ease: 'Power2.easeInOut',
    });
  }

  /**
   * Create particle that fall from pinata
   * @public
   */
  createParticle() {
    const particle = new Sprite.from('particle');

    particle.name = 'particle';
    particle.y = 300;
    particle.x = -150 + Math.floor(Math.random() * (50 - 1) + 1);
    particle.scale.set(2);

    this.addChild(particle);

    gsap.to(particle, {
      y: 600,
      alpha: 0,
      duration: 3,
    });

    this.removeChild();
  }

  /**
   * Create chili that fall from pinata
   * @private
   */
  _createChilli() {
    const chili = new Sprite.from('chili');

    chili.name = 'chili';
    chili.y = 200;
    chili.x = -100;
    chili.scale.set(Math.random() + 1);
    this.addChild(chili);

    gsap.to(chili, {
      y: 600,
      alpha: 0,
      duration: 2,
    });

    this.removeChild();
  }

  /**
   * @private
   */
  _addListeners() {
    this._body.on('click', () => this._createChilli());
  }
}
