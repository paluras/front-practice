'use client'


import { useState } from 'react'
import Image from 'next/image'
import './App.css'
import Card from './Card'
import data from "./data.json" 
import profileImg from './assets/image-jeremy.png'

function App() {
  const [count, setCount] = useState('daily')

function handleClickWeek(){
 return(setCount('weekly'))
}
function handleClickDay(){
  return(setCount("daily"))
 }
 function handleClickMonth(){
  return(setCount('monthly'))
 }
console.log(count);

let colors1 = '';
let colors2 = '';
let colors3 = '';

if(count == "daily"){
  colors1 = "White"
}else if(count == 'weekly'){
  colors2 = "White"
}else{
  colors3 ="White"
}


const datas = data;

//console.log(datas[0].timeframes.daily);

//On click dates
//if click on dayly display dayly values

console.log(datas[0].timeframes.daily.current);

  return (
    <div className="App">
        <div className='main-app'>
          <div className='name-card'>
            <div className='name-report'>
              <Image width={60} height={60} src={profileImg} alt='profile-pic' />
           
              <div className='text'>
              <p>Report for</p>
              <h1>Jeremy Robson</h1>
              </div>
            </div>
            <div className='dates'>
              <ul onClick={handleClickDay} style={{color: colors1}} >Daily</ul>
              <ul onClick={handleClickWeek} style={{color: colors2}}>Weekly</ul>
              <ul onClick={handleClickMonth}style={{color: colors3}}>Monthly</ul>
            </div>
          </div>
          <Card 
       
         hours = {datas[0].timeframes[count].current}
 
          hoursPrev= {datas[0].timeframes[count].previous}
          text={datas[0].title} 
          color={'work-color'}
          bg={"#ff8b64"} />
          <Card 
          hours={datas[1].timeframes[count].current} 
          hoursPrev= {datas[1].timeframes[count].previous}
          text={'Play'} 
          color={'play-color'}
          bg={"#56c1e6"} />
           <Card 
          hours={datas[2].timeframes[count].current} 
          hoursPrev= {datas[2].timeframes[count].previous}

          text={'Study'} 
          color={'study-color'}
          bg={"#ff5e7d"} />
           <Card 

          hoursPrev= {datas[3].timeframes[count].previous}
          hours={datas[3].timeframes[count].current} 
          text={'Exercise'} 
          color={'exercise-color'}
          bg={"#4bcf83"} />
           <Card 

          hoursPrev= {datas[4].timeframes[count].previous}
          hours={datas[4].timeframes[count].current} 
          text={'Social'} 
          color={'social-color'} 
          bg={"#7235d1"}/>
           <Card 

          hoursPrev= {datas[5].timeframes[count].previous}
          hours={datas[5].timeframes[count].current} 
          text={'Self Care'} 
          color={'self-color'} 
          bg={"#f1c75c"}/>

        </div>

    </div>
  )
}

export default App
