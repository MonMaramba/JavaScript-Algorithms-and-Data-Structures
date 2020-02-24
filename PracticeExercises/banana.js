// technical assessment for trilogy TA

// every banana must have a diameter and length
// every banana must be yummy
// every banana must have ability to rot and it becomes not yummy anymore

class Banana {
  constructor(diameter, length) {
    this.color = "yellow";
    this.length = length;
    this.diameter = diameter;
    this.isYummy = true;
    this.rot = function() {
      this.isYummy = false;
    };
  }
}
const banana1 = new Banana(3, 5.5);
const banana2 = new Banana(1, 4);
