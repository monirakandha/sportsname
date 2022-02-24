// leag list 

const showLeagLIst = () =>{
    fetch('https://www.thesportsdb.com/api/v1/json/2/all_leagues.php')
    .then(res => res.json())
    .then(data => leaguesShow(data.leagues))
}
showLeagLIst();
const leaguesShow = (leagues) => {
    const listname = document.getElementById('list');
    for(const league of leagues){
        const p = document.createElement('p');
        console.log(league)
         p.innerText = `Sport Name ${league.strLeague}`
         listname.appendChild(p);
    }
    


}