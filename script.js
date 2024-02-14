



// input box
const input = document.querySelector('#fruit');
// result box
const suggestions = document.querySelector('.suggestions ul');
// key words
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu', 'Thimbelberry'];

function search(str) {
	let results = [];
	// TODO
	if (str){
		results = fruit.filter(word => word.toLowerCase().includes(str.toLowerCase()))
	}
	return results
}

function searchHandler(e) {
	// TODO
	const inputValue = e.target.value;
    const matchingResults = search(inputValue);

    showSuggestions(matchingResults, inputValue);
    input.value = inputValue;
}

function showSuggestions(results) {
	// TODO
	suggestions.innerHTML = '';

	const maxSuggestions = 5

	if (results.length > 0) {
		for (let i = 0; i < Math.min(results.length, maxSuggestions); i++) {
            const li = document.createElement('li');
            li.textContent = results[i];
            suggestions.appendChild(li);
        }

        suggestions.style.display = 'block';
    } else {
        suggestions.style.display = 'none';
    }

}

function useSuggestion(e) {
	// TODO
	const selectedSuggestion = e.target.textContent;
	input.value = selectedSuggestion;
	suggestions.style.display = 'none';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

