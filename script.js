const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let nodes = [];

for (let i = 0; i < 50; i++) {
  nodes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    dx: (Math.random() - 0.5),
    dy: (Math.random() - 0.5)
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  nodes.forEach(n => {
    n.x += n.dx;
    n.y += n.dy;

    ctx.beginPath();
    ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = "#00eaff";
    ctx.fill();

    nodes.forEach(m => {
      let dist = Math.hypot(n.x - m.x, n.y - m.y);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        ctx.lineTo(m.x, m.y);
        ctx.strokeStyle = "rgba(0,234,255,0.1)";
        ctx.stroke();
      }
    });
  });

  requestAnimationFrame(draw);
}

draw();