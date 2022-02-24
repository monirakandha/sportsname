const showSportsList = () =>{
    fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
    .then(res => res.json())
    .then(data => litShow(data.sports))
}
showSportsList();
const litShow = (sports) => {
    const listname = document.getElementById('liost');
    for(const sport of sports){
        const p = document.createElement('p');
        console.log(p)
         p.innerText = `Sport Name ${sport.strSport}`
         listname.appendChild(p);
    }
    
    console.log(sports);

}