// script.js

// Provided arrays for consonants and vowels
const consonants = [
  { symbol: "k", description: "<span lang='km'>ក<br>គ</span>", audio: "k.mp3" },
  { symbol: "kʰ", description: "<span lang='km'>ខ<br>ឃ</span>", audio: "kh.mp3" },
  { symbol: "ŋ", description: "<span lang='km'>ង</span>", audio: "ng.mp3" },

  { symbol: "c", description: "<span lang='km'>ច<br>ជ</span>", audio: "c.mp3" },
  { symbol: "cʰ", description: "<span lang='km'>ឆ<br>ឈ</span>", audio: "ch.mp3" },
  { symbol: "ɲ", description: "<span lang='km'>ញ</span>", audio: "ny.mp3" },

  { symbol: "ɗ", description: "<span lang='km'>ដ<br>ឌ</span>", audio: "d.mp3" },
  { symbol: "tʰ", description: "<span lang='km'>ថ<br>ធ</span>", audio: "th.mp3" },
  { symbol: "t", description: "<span lang='km'>ត<br>ទ</span>", audio: "t.mp3" }, 
  { symbol: "n", description: "<span lang='km'>ណ<br>ន</span>", audio: "n.mp3" },

  { symbol: "ɓ", description: "<span lang='km'>ប</span>", audio: "b.mp3" },
  { symbol: "pʰ", description: "<span lang='km'>ផ<br>ភ</span>", audio: "ph.mp3" },
  { symbol: "p", description: "<span lang='km'>ប៉<br>ព</span>", audio: "p.mp3" },
  { symbol: "m", description: "<span lang='km'>ម</span>", audio: "m.mp3" },

  { symbol: "j", description: "<span lang='km'>យ</span>", audio: "j.mp3" },
  { symbol: "r", description: "<span lang='km'>រ</span>", audio: "r.mp3" },
  { symbol: "l", description: "<span lang='km'>ឡ<br>ល</span>", audio: "l.mp3"}, 
  { symbol: "ʋ", description: "<span lang='km'>វ</span>", audio: "v.mp3" },
  { symbol: "w", description: "<span lang='km'>វ</span>", audio: "w.mp3" },
  { symbol: "s", description: "<span lang='km'>ស</span>", audio: "s.mp3" },
  { symbol: "h", description: "<span lang='km'>ហ</span>", audio: "h.mp3" },

  { symbol: "ʔ", description: "<span lang='km'>អ</span>", audio: "q.mp3" },
  { symbol: "f", description: "<span lang='km'>ហ្វ</span>", audio: "f.mp3" }
];

const vowels = [
  { symbol: "i", description: "'beat'", audio: "i.mp3" },
  { symbol: "ɪ", description: "'bit'", audio: "ɪ.mp3" },
  { symbol: "ɨ", description: "", audio: "ɨ.mp3" },
  { symbol: "e", description: "'bait'", audio: "e.mp3" },
  { symbol: "ɛ", description: "'bet'", audio: "ɛ.mp3" },
  { symbol: "a", description: "'bat'", audio: "a.mp3" },
  { symbol: "u", description: "'boot'", audio: "u.mp3" },
  { symbol: "o", description: "'boat'", audio: "o.mp3" },
  { symbol: "ɔ", description: "", audio: "ɔ.mp3" },
  { symbol: "ʊ", description: "'hood'", audio: "ʊ.mp3" },
  { symbol: "ə", description: "", audio: "ə.mp3" },
  { symbol: "ʌ", description: "'butt'", audio: "ʌ.mp3" },
  { symbol: "ɯ", description: "", audio: "ɯ.mp3" },
  { symbol: "ɑ", description: "'bot'", audio: "ɑ.mp3" }
];

// Function to create and display phoneme elements
function displayPhonemes(phonemeArray, containerId) {
  // Get the container element by ID
  const container = document.getElementById(containerId);

  // Loop over each phoneme in the array
  phonemeArray.forEach(phoneme => {
    // Create a new span element for the phoneme symbol
    const span = document.createElement('span');
    span.classList.add('phoneme');
    span.textContent = phoneme.symbol;

    // Create a description element below the symbol
    const desc = document.createElement('div');
    desc.classList.add('description');
    desc.innerHTML = phoneme.description;
    span.appendChild(desc);

    // Unified event handler for both click and touch events
    const playAudio = (event) => {
      // Prevent the touch event from triggering a subsequent click event
      event.preventDefault();

      // Construct the path to the audio file (ensure the audio folder and file names match)
      const audio = new Audio(`audio/${phoneme.audio}`);
      audio.play();
    };

    // Add both click and touchstart event listeners
    span.addEventListener('click', playAudio);
    span.addEventListener('touchend', playAudio);

    // Append the span element to the container
    container.appendChild(span);
  });
}

// Call the function for consonants and vowels
displayPhonemes(consonants, 'consonants');
displayPhonemes(vowels, 'vowels');

