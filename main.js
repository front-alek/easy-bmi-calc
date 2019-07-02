class Bmi {
    constructor(gender, weight, height) {
        this.gender = gender;
        this.weight = weight;
        this.height = height;
        this.score = (parseInt(weight) / ((parseInt(height) * parseInt(height)) / 10000)).toFixed(2);
    }
}
document.querySelector('button').addEventListener('click', () => {
    let gender = document.querySelector('select').value;
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let person = new Bmi(gender, weight, height);
    if (weight > 39 && height > 140) {
        document.querySelector('.result').style.display = 'block';
        let resultNr = document.querySelector('.resltNr');
        resultNr.textContent = person.score;
        if (person.score < 25 && person.score > 18.49) {
            resultNr.style.color = '#39ea39';
        } else {
            resultNr.style.color = 'red';
        }
    } else {
        alert('Czy podajesz prawidłowe dane?')
    }
})
document.querySelector('.fa-times-circle').addEventListener('click', () => {
    document.querySelector('.result').style.display = 'none';
})