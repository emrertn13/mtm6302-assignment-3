// ---pseudo code
// -Createa Form
//     Title Section
//     Dropbox - DYNAMICALLY ADDED JS
//         Year
//         Month
//         Day
//     Submit Button 
// -Calc the Date from epoch date
// -Display a countdown to the selected date
//     Days
//     Hours
//     Minutes
//     Seconds
// -Local Storage the selected date
// -Open page take local storage data and put calc back into function
// -Button to take user back to form 
// -Page refresh Calc Automatically starts

// RESOURCES
// MATHEMATICAL CALCULATIONS FOR DAYS< HOUR< MINUTES< SECONDS

// DATA
const $container = document.getElementById('container')
const $form = document.getElementById('form')
const $daysDropbox = document.getElementById('days-dropbox')
const $monthsDropbox = document.getElementById('months-dropbox')
const $yearsDropbox = document.getElementById('years-dropbox')
const $populate = document.getElementById('populate')

const $titleText = document.getElementById('title-text')
const $displayBox = document.getElementById('display')

const $submitDate = document.getElementById('submit-date')
const $goBack = document.getElementById('go-back')

const $backgroundImage = document.getElementById('backgroung-image')

// CODE 
// Populate Options 
$daysDropbox.innerHTML += `
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    <option value="13">13</option>
    <option value="14">14</option>
    <option value="15">15</option>
    <option value="16">16</option>
    <option value="17">18</option>
    <option value="19">19</option>
    <option value="20">20</option>
    <option value="21">21</option>
    <option value="22">22</option>
    <option value="23">23</option>
    <option value="24">24</option>
    <option value="25">25</option>
    <option value="26">26</option>
    <option value="27">27</option>
    <option value="28">28</option>
    <option value="29">29</option>
    <option value="30">30</option>
    <option value="31">31</option>
` 
$monthsDropbox.innerHTML += `
    <option value="0">January</option>
    <option value="1">Februrary</option>
    <option value="2">March</option>
    <option value="3">April</option>
    <option value="4">May</option>
    <option value="5">June</option>
    <option value="6">July</option>
    <option value="7">August</option>
    <option value="8">September</option>
    <option value="9">October</option>
    <option value="10">November</option>
    <option value="11">December</option>
` 
for(let years = 2021; years <= 2031; years++) {
    $yearsDropbox.innerHTML +=  `
        <option value="${years}">${years}</option>
    `
}

// Get Data After Change 
$daysDropbox.addEventListener('change', function() {
    localStorage.setItem('Selected Day', parseInt($daysDropbox.value))
})
$monthsDropbox.addEventListener('change', function() {
    localStorage.setItem('Selected Month', parseInt($monthsDropbox.value))
})
$yearsDropbox.addEventListener('change', function() {
    localStorage.setItem('Selected Year', parseInt($yearsDropbox.value))
})

if (localStorage.getItem('Title') != undefined) {
    $displayBox.setAttribute('style', 'display: inline ; margin-bottom: 0')
    $displayBox.innerHTML = `
        <h1 id="display-title">${localStorage.getItem('Title')}</h1>
        <div id="countdown">
            <span id="countdown-days"> </span>
            <span id="countdown-hours"> </span>
            <span id="countdown-minutes"> </span>
            <span id="countdown-seconds"> </span>
        </div>
    `

    $titleText.setAttribute('style', 'display: none')
}
if (localStorage.getItem('Selected Year') != undefined) {
    const $countdown = document.getElementById('countdown')

    $displayBox.setAttribute('style', 'display: inline ; margin-bottom: 0')
    $countdown.innerHTML = `
        <span id="countdown-days"> </span>
        <span id="countdown-hours"> </span>
        <span id="countdown-minutes"> </span>
        <span id="countdown-seconds"> </span>
    `

    const $countdownDays = document.getElementById('countdown-days')
    const $countdownHours = document.getElementById('countdown-hours')
    const $countdownMinutes = document.getElementById('countdown-minutes')
    const $countdownSeconds = document.getElementById('countdown-seconds')

    const futureDate = new Date(localStorage.getItem('Selected Year'), localStorage.getItem('Selected Month'), localStorage.getItem('Selected Day'), 23, 59)

    setInterval(function() {
        const currentDate = Date.now()
        
        let difference = (futureDate.getTime() - currentDate)
        
        let daysAway = difference / (1000 * 60 * 60 * 24)
        let hoursAway = (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        let minutesAway = (difference % (1000 * 60 * 60)) / (1000 * 60)
        let secondsAway = (difference % (1000 * 60)) / 1000

        $countdownDays.textContent = parseInt(daysAway) + ' ' + 'DAYS'
        $countdownHours.textContent = parseInt(hoursAway) + ' ' + 'HOURS'
        $countdownMinutes.textContent = parseInt(minutesAway) + ' ' + 'MINUTES'
        $countdownSeconds.textContent = parseInt(secondsAway) + ' ' + 'SECONDS AWAY!'
    }, 1000)

    $daysDropbox.setAttribute('style', 'display: none')
    $monthsDropbox.setAttribute('style', 'display: none')
    $yearsDropbox.setAttribute('style', 'display: none')

    $goBack.setAttribute('style', 'display: inline')
    $submitDate.setAttribute('style', 'display: none')
}

// Print After Submit 
$submitDate.addEventListener('click', function(submitDate) {
    submitDate.preventDefault()
    
    localStorage.setItem('Title', $titleText.value)
    console.log($titleText.value)
    $displayBox.setAttribute('style', 'display: inline ; margin-bottom: 0')
    $displayBox.innerHTML = `
        <h1 id="display-title">${$titleText.value}</h1>
        <div id="countdown">
            <span id="countdown-days"> </span>
            <span id="countdown-hours"> </span>
            <span id="countdown-minutes"> </span>
            <span id="countdown-seconds"> </span>
        </div>
    `
    const $countdown = document.getElementById('countdown')
    const $countdownDays = document.getElementById('countdown-days')
    const $countdownHours = document.getElementById('countdown-hours')
    const $countdownMinutes = document.getElementById('countdown-minutes')
    const $countdownSeconds = document.getElementById('countdown-seconds')
    
    $goBack.setAttribute('style', 'display: inline')
    $submitDate.setAttribute('style', 'display: none')
    
    $daysDropbox.setAttribute('style', 'display: none')
    $monthsDropbox.setAttribute('style', 'display: none')
    $yearsDropbox.setAttribute('style', 'display: none')

    $titleText.setAttribute('style', 'display: none')
    
    const futureDate = new Date(localStorage.getItem('Selected Year'), localStorage.getItem('Selected Month'), localStorage.getItem('Selected Day'), 23, 59)

    setInterval(function() {
        const currentDate = Date.now()
        
        let difference = (futureDate.getTime() - currentDate)
        
        let daysAway = difference / (1000 * 60 * 60 * 24)
        let hoursAway = (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        let minutesAway = (difference % (1000 * 60 * 60)) / (1000 * 60)
        let secondsAway = (difference % (1000 * 60)) / 1000

        $countdownDays.textContent = parseInt(daysAway) + ' ' + 'DAYS'
        $countdownHours.textContent = parseInt(hoursAway) + ' ' + 'HOURS'
        $countdownMinutes.textContent = parseInt(minutesAway) + ' ' + 'MINUTES'
        $countdownSeconds.textContent = parseInt(secondsAway) + ' ' + 'SECONDS AWAY!'
    }, 1000)
})

// Print After Refresh
const storageTitle = localStorage.getItem('Title')
console.log(storageTitle)

const storageDate = new Date(localStorage.getItem('Selected Year'), localStorage.getItem('Selected Month'), localStorage.getItem('Selected Day'), 23, 59)
console.log(storageDate)

// Start Over 
$goBack.addEventListener('click', function(startOver) {
    startOver.preventDefault()

    $submitDate.setAttribute('style', 'display: inline')
    $goBack.setAttribute('style', 'display: none')

    $daysDropbox.setAttribute('style', 'display: inline')
    $monthsDropbox.setAttribute('style', 'display: inline')
    $yearsDropbox.setAttribute('style', 'display: inline')
    $titleText.setAttribute('style', 'display: inline')

    $displayBox.setAttribute('style', 'display: none')
})

// RUN 