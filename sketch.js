function setup() {
  // put setup code here
  createCanvas(1200,800);
}

function draw() {
  background(0);

  fill(255);
  textSize(24);
  textAlign(CENTER);
  text("Press mouse to activate ORE", width/2, height-60); 
}

function mousePressed() {
  console.log("ORE ID =" + oreId);

  oreId.popup
          .auth({ provider: "google" })
          .then(console.log)
          .catch(console.log);
}