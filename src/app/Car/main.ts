import { Wheels } from './wheels';
import { Engine } from './engine';
import { Car } from './car';

function main() {
  let engine = new Engine();
  let wheels = new Wheels();
  let car = new Car(engine, wheels);
  car.startEngine();
}
main();
