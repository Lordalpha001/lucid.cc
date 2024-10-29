particlesJS("particles-js", {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      move: { direction: "bottom", out_mode: "out", speed: 2 }
    },
    interactivity: {
      events: { onhover: { enable: false }, onclick: { enable: false } },
      modes: { bubble: { distance: 400, size: 4 } }
    },
    retina_detect: true
  });
  