class Ball {
  constructor(canvas, x_pos, y_pos, radius, speed) {
    this.canvas = canvas;
    this.color =
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
    this.ctx = this.canvas.getContext("2d");
    this.x_pos = x_pos;
    this.y_pos = y_pos;
    this.radius = radius;
    this.width = this.radius * 2;
    this.height = this.radius * 2;
    this.dx = Math.random() < 0.5 ? 2 : -2;
    this.dy = Math.random() < 0.5 ? 2 : -2;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x_pos, this.y_pos, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }

  update() {
    this.width = this.radius * 2;
    this.height = this.radius * 2;
    if (
      this.x_pos >= this.canvas.width - this.radius ||
      this.x_pos <= 0 + this.radius
    ) {
      this.dx *= -1;
    }
    if (
      this.y_pos >= this.canvas.height - this.radius ||
      this.y_pos <= 0 + this.radius
    ) {
      this.dy *= -1;
    }

    this.x_pos += this.dx;
    this.y_pos -= this.dy;
  }
}
