const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";



const handle = async (e) => {

    if (e.keyCode == 13) {
        const wordSearch = e.target.value;
        const result = await fetch(url + wordSearch)
            .then(response => response.json())
            .catch(error => {
                console.error('Error fetching data:', error);
                return [];
            });

        // if (result.length === 0) {
        //     resultDiv.innerHTML = `<h3 class="error">No results found for "${word}"</h3>`;
        //     return;
        // }
        
        const wordResult = result[0];
        const meanings = wordResult.meanings;
        const word_definition_div = document.querySelector(".word-definition");
        word_definition_div.innerHTML = ""
        const word_div = document.createElement('div')
        word_div.classList.add('word-row');
        const meaning_div = document.createElement('div');
        meaning_div.classList.add('meanings');
    
       word_div.innerHTML = `
                <h1 class="word">${wordResult.word}</h1>
       `;

       const phonetic = getPhonetic(wordResult.phonetics);
       if(phonetic){
            word_div.innerHTML += `<p class="phonetics">${phonetic}</p>`;
       }
   

       const wordAudio = getAudio(wordResult.phonetics);
       if(wordAudio) {
            word_div.innerHTML += `<audio src=${wordAudio} controls></audio>`;
        }

        word_definition_div.appendChild(word_div);

        meanings.forEach(meaning => {
             let definitionsHTML = '';

            meaning.definitions.forEach(def => {
                definitionsHTML += `
                    <p class="definition">• ${def.definition}</p>
                    ${def.example ? `<p class="example">Example: ${def.example}</p>` : ''}
                `;
            });

            meaning_div.innerHTML += `
                <div class="meaning">
                    <h2>${wordResult.word} (${meaning.partOfSpeech})</h2>
                    ${definitionsHTML}
                </div>
            `;
        });

        word_definition_div.appendChild(meaning_div);
        
    }
}

function getAudio(phonetics) {
    if (phonetics && phonetics.length > 0) {
        for (const phonetic of phonetics) {
            if (phonetic.audio) {
                return phonetic.audio; // ✅ lúc này return sẽ thoát khỏi getAudio
            }
        }
    }
    return '';
}

function getPhonetic(phonetics) {
    if (phonetics && phonetics.length > 0) {
        for (const phonetic of phonetics) {
            if (phonetic.text) {
                return phonetic.text; // ✅ lúc này return sẽ thoát khỏi getPhonetic
            }
        }
    }
    return '';
}