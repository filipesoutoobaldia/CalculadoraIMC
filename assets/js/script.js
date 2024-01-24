const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
 event.preventDefault();

 const weight = document.getElementById('weight').value;
 const height = document.getElementById('height').value;

 const bmi = (weight / (height * height)).toFixed(2);

 const value = document.getElementById('value');
 let description = '';

 value.classList.add('attention');

 document.getElementById('infos').classList.remove('hidden');

  if (bmi < 18.5) {
    description = ' Atenção ! Você esta abaixo do peso. Procure acompanhamento medico'
  } else if ( bmi >= 18.5 && bmi <= 25 ) {
    description = "Você esta no peso ideal !";
    value.classList.remove('attention');
    value.classList.add('normal');
 } else if (bmi > 25 && bmi <= 30) {
    description = "Cuidado ! Você esta com sobrepeso, procure um medico";
  } else if (bmi > 30 && bmi <= 35) {
    description = "Cuidado ! Você esta com obesidade moderada, procure um medico";
  } else if (bmi > 35 && bmi <= 40) {
    description = "Cuidado ! Você esta com obsidade severa ! Procure um medico";
  } else if (bmi > 40 && bmi <= 45) {
     description = "Cuidado ! Você esta com obsidade morbida, Procure um medico";
  }

  value.textContent = bmi.replace('.', ',');
  document.getElementById('description').textContent = description;
});