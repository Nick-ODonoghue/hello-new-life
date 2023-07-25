declare module "typewriter-effect/dist/core" {
  class Typewriter {
    constructor(selector: string, options: any);
    typeString(str: string): this;
    pauseFor(ms: number): this;
  }

  export = Typewriter;
}
