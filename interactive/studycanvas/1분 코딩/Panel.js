class Panel {
  constructor() {
    this.scale = 0;
  }

  draw() {
    context.fillStyle = "rgba(255,0,0,0.7)";
    context.resetTransform();
    context.translate(oX, oY);
    context.scale(this.scale, this.scale);
    context.translate(-oX, -oY);
    context.fillRect(oX - 150, oY - 150, 300, 300);
    context.resetTransform();
    // this.showContent();

    // if (selectedBox) {
    //   context.fillText(selectedBox.index, oX, oY);
    // }
  }

  showContent() {
    context.fillStyle = "#fff";
    context.fillText(selectedBox.index, oX, oY);
  }
}
