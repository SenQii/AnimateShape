const colorSet=[
    ['rgb(76, 161, 175)', 'rgb(181, 52, 113)'], //0
    ['rgb(247, 76, 6)', 'rgb(249, 188, 44)'], //1
    ['#e53935', '#e35d5b'], //2
    ['#304352','#d7d2cc'], //3
    ['#F1F2B5','#135058'],//4
    ['#00bf8f','#001510'],//5
    ['#a23a5c', '#f2f698'],//6
    ['#fae1f8', '#029c8a'],//7
    ['#EB5757','#000000'],//8
    ['#30E8BF','#FF8235'],//9
    ['#20002c','#cbb4d4'],//10



    // 

];

const vals = document.querySelector(':root');
const savedColors =[];
document.addEventListener('keydown', (e)=>{


    const currentColor = getComputedStyle(vals).getPropertyValue('--topColor');
    // serch in colorset for ArrElm start with currColor
    // const currentIDx = colorSet.findIndex(c =>c[0] == currentColor);
    // const nextElm = currentIDx == colorSet.length-1 ? 0 : currentIDx+1;

    const randColor = Math.floor(Math.random() * colorSet.length);
    // console.log(randColor);

    


    if(e.key === 'ArrowRight'){
        // console.log("right");

        vals.style.setProperty('--topColor',    colorSet[randColor][0]);
        vals.style.setProperty('--bottomColor', colorSet[randColor][1]);
        savedColors.push(randColor)
        // console.log(colorSet[randColor]);
        console.log(savedColors);
        
        

    }if(e.key === 'ArrowLeft'){
        // console.log('left');

        const lastIn = savedColors.pop()
        
        // const preColor  = randColor-1;
        console.log(lastIn)
        vals.style.setProperty('--topColor',    colorSet[lastIn][0]);
        vals.style.setProperty('--bottomColor', colorSet[lastIn][1]);
    }

})