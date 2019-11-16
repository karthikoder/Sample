const btn = document.getElementById('btn');
function fun()
{
    alert('WOW YOU MADE IT');
}
function fun1(event)
{
    var x = ((event.clientX * 100 / window.innerWidth)+ 20) + "%";
    var y = ((event.clientY * 100 / window.innerHeight)+ 20) + "%";
    btn.style.top =y;
    btn.style.left =x;

    }