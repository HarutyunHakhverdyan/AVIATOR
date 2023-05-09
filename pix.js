function aviator(){
let app = new PIXI.Application({ width: 800, height: 460 ,background:'#CBEDE9'});
document.body.append(app.view)
let sprite = PIXI.Sprite.from('https://cdn-icons-png.flaticon.com/128/870/870194.png');
let sprite1 = PIXI.Sprite.from('https://png.pngtree.com/png-vector/20230206/ourmid/pngtree-clouds-icon-transparent-background-png-image_6583304.png');
let sprite2 = PIXI.Sprite.from('https://png.pngtree.com/png-vector/20230206/ourmid/pngtree-clouds-icon-transparent-background-png-image_6583304.png');
app.stage.addChild(sprite1)
app.stage.addChild(sprite2)
sprite2.x=400
let cont=document.createElement('div')
let elem=document.createElement('div')
let elem4=document.createElement('div')
document.body.prepend(cont) 
cont.append(elem)
elem4.innerHTML='0000'
elem.innerHTML='0.0'
cont.append(elem4)
cont.style.display='flex'
cont.style.color='#72FF05'
cont.style.fontSize='30px'
cont.style.background='#9D7AA0 '
cont.style.width='800px'
cont.style.height='50px'
cont.style.justifyContent='space-between'
let elapsed = 0.0;
let elapsed2 = 0.0;
let y=300
let gorc=1

    let payman=0
    function b(){
        document.body.innerHTML=''
        elapsed = 0.0;
        y=300
        gorc=1
        elem4.innerHTML='0000'
        aviator()  
   } 
   app.ticker.add((d)=>{
    elapsed2+=d
    sprite2.x=400-Math.cos(elapsed/15)*10
    sprite1.x=Math.cos(elapsed/15)*10
    
   })
setTimeout(()=>{
    app.stage.addChild(sprite)
    app.ticker.add((d) => {
        
        if(!payman){
           console.log()
        elapsed +=d;
        if(sprite.x<650){
         sprite.x += 2
         y-=0.5
         sprite.y = y
        }else{
            sprite.y=140+Math.cos(elapsed/30)*15
        }
         gorc+=elapsed/20000
         elem.innerHTML=gorc.toFixed(2)
         
        }else{
            let text=new PIXI.Text('ԹՌԱՎ',{fill:0xFF8633})
            app.stage.addChild(text)
            text.x=350
            text.y=50
            sprite.x+=12
            if(sprite.x>800){
                app.stop()
                setTimeout(()=>{
                    b()
                },6000)
            }
            if(sprite.y>400){
                sprite.x=5000
                app.stop()
            }
        }
         if(gorc>500*Math.random()+1||gorc>30){  
            payman=1
         }
    })
},6000);

let input=document.createElement('input')
input.value=1000
let elem3=document.createElement('div')
elem3.style.background='#033729 '

elem3.style.height='50px'
elem3.style.width='800px'
elem3.style.display='flex'
elem3.style.alignItems='center'
let elem2=document.createElement('button')
elem2.innerHTML='Submit'
elem2.onclick=()=>{
        elem4.innerHTML=Math.floor(input.value*elem.innerHTML)
        elem.style.color='red'
        elem.style.fontSize='30px'
}
console.log(elem2)
elem3.append(elem2)
elem3.prepend(input)
document.body.append(elem3)

input.onchange=(e)=>{
    
    
    elem.innerHTML=0
}
}
aviator()