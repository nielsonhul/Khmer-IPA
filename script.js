// script.js

// Provided arrays for consonants and vowels
const consonants = [
  { symbol: "k", description: "<span lang='km'>ក<br>គ</span>", audio: "k.ogg" },
  { symbol: "kʰ", description: "<span lang='km'>ខ<br>ឃ</span>", audio: "kh.ogg" },
  { symbol: "ŋ", description: "<span lang='km'>ង</span>", audio: "ng.ogg" },

  { symbol: "c", description: "<span lang='km'>ច<br>ជ</span>", audio: "c.ogg" },
  { symbol: "cʰ", description: "<span lang='km'>ឆ<br>ឈ</span>", audio: "ch.ogg" },
  { symbol: "ɲ", description: "<span lang='km'>ញ</span>", audio: "ny.ogg" },

  { symbol: "ɗ", description: "<span lang='km'>ដ<br>ឌ</span>", audio: "d.ogg" },
  { symbol: "tʰ", description: "<span lang='km'>ថ<br>ធ</span>", audio: "th.ogg" },
  { symbol: "t", description: "<span lang='km'>ត<br>ទ</span>", audio: "t.ogg" }, 
  { symbol: "n", description: "<span lang='km'>ណ<br>ន</span>", audio: "n.ogg" },

  { symbol: "ɓ", description: "<span lang='km'>ប</span>", audio: "b.ogg" },
  { symbol: "pʰ", description: "<span lang='km'>ផ<br>ភ</span>", audio: "ph.ogg" },
  { symbol: "p", description: "<span lang='km'>ប៉<br>ព</span>", audio: "p.ogg" },
  { symbol: "m", description: "<span lang='km'>ម</span>", audio: "m.ogg" },

  { symbol: "j", description: "<span lang='km'>យ</span>", audio: "j.ogg" },
  { symbol: "r", description: "<span lang='km'>រ</span>", audio: "r.ogg" },
  { symbol: "l", description: "<span lang='km'>ឡ<br>ល</span>", audio: "l.ogg"}, 
  { symbol: "ʋ", description: "<span lang='km'>វ</span>", audio: "v.ogg" },
  { symbol: "w", description: "<span lang='km'>វ</span>", audio: "w.ogg" },
  { symbol: "s", description: "<span lang='km'>ស</span>", audio: "s.ogg" },
  { symbol: "h", description: "<span lang='km'>ហ</span>", audio: "h.ogg" },

  { symbol: "ʔ", description: "<span lang='km'>អ</span>", audio: "q.ogg" },
  { symbol: "f", description: "<span lang='km'>ហ្វ</span>", audio: "f.ogg" }
];

const vowels = [
  { symbol: "i", description: "'beat'", audio: "i.ogg" },
  { symbol: "ɪ", description: "'bit'", audio: "ɪ.ogg" },
  { symbol: "ɨ", description: "", audio: "ɨ.ogg" },
  { symbol: "e", description: "'bait'", audio: "e.ogg" },
  { symbol: "ɛ", description: "'bet'", audio: "ɛ.ogg" },
  { symbol: "a", description: "'bat'", audio: "a.ogg" },
  { symbol: "u", description: "'boot'", audio: "u.ogg" },
  { symbol: "o", description: "'boat'", audio: "o.ogg" },
  { symbol: "ɔ", description: "", audio: "ɔ.ogg" },
  { symbol: "ʊ", description: "'hood'", audio: "ʊ.ogg" },
  { symbol: "ə", description: "", audio: "ə.ogg" },
  { symbol: "ʌ", description: "'butt'", audio: "ʌ.ogg" },
  { symbol: "ɯ", description: "", audio: "ɯ.ogg" },
  { symbol: "ɑ", description: "'bot'", audio: "ɑ.ogg" }
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
    span.addEventListener('touchstart', playAudio);

    // Append the span element to the container
    container.appendChild(span);
  });
}

// Call the function for consonants and vowels
displayPhonemes(consonants, 'consonants');
displayPhonemes(vowels, 'vowels');

