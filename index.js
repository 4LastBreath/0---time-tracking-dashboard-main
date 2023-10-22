const cardTitles = document.querySelectorAll('.card-title')
const cardCurrentHours = document.querySelectorAll('.current-hours')
const cardPreviousHours = document.querySelectorAll('.previous-hours')
const allInputs = document.querySelectorAll('.input')


fetch('data.json')
  .then(response => response.json())
  .then(data => {
    
    const updateCards = (timeframe) => {
      data.forEach((item, index) => {

        const cardTitle = cardTitles[index];  
        const currentHours = cardCurrentHours[index];
        const previousHours = cardPreviousHours[index];

        cardTitle.textContent = item.title;
        currentHours.textContent = `${item.timeframes[timeframe].current}hrs`;
        previousHours.textContent = `Last Week - ${item.timeframes[timeframe].previous}hrs`;
      });
    };

    allInputs.forEach(input => {
      input.addEventListener('click', () => {
        const timeframe = input.value;
        updateCards(timeframe)
      })
    })

    updateCards('daily');
  })
  .catch(error => console.error('Error', error));


