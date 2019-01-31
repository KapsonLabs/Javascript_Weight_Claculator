document.getElementById('bodyOutput').style.visibility = 'hidden'

document.getElementById('lbsinput').addEventListener('input', function(e){
    document.getElementById('bodyOutput').style.visibility = 'visible'
    let pounds = e.target.value
    document.getElementById('kgOutput').innerHTML = pounds/2.2046;
    document.getElementById('gmsOutput').innerHTML = pounds/0.0022046;
    document.getElementById('ouncesOutput').innerHTML = pounds/16;
});