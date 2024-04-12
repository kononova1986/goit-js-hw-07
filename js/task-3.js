const hayInput = document.getElementById('name-input');
const inputName = document.getElementById('name-output');
const onHayInput = event => {
    const inputEl = event.currentTarget;
    console.log(inputEl.value);
    inputName.textContent = inputEl.value.trim() || "Anonymous";
    
}
hayInput.addEventListener('input', onHayInput);
