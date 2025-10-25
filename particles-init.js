/* particles-init.js: Digital Stream Look (Visible Hex Code Edition) */
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 120, 
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#4dfffa" // Hex: Electric Blue accent color
        },
        "shape": {
            "type": "edge", 
            "stroke": {
                "width": 0,
                "color": "#000000" // Hex: Black
            }
        },
        "opacity": {
            "value": 0.7, // INCREASED: Makes particles less transparent
            "random": true
        },
        "size": {
            "value": 4, // INCREASED: Makes the lines thicker/longer
            "random": true
        },
        "line_linked": {
            "enable": false, 
            "distance": 0,
            "opacity": 0,
            "width": 0
        },
        "move": {
            "enable": true,
            "speed": 8, 
            "direction": "bottom", 
            "random": true,
            "straight": false,
            "out_mode": "out"
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse" 
            },
            "onclick": {
                "enable": false
            },
            "resize": true
        }
    },
    "retina_detect": true
});