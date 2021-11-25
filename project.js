const colours=['red','black','blue','green','pink','purple'];
function ChangeColor()
{
    const colorIndex=parseInt(Math.random()*colours.length);
    document.body.style.background=colours[colorIndex];
}