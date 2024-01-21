import React from 'react'

function Grid() {
  let sym = 'O'
  const arr = [1,2,3,4,5,6,7,8,9]

  const swap = ()=>{
    if(sym=='O') sym='X'
    else sym='O'
  }

  const check = ()=>{
    if(arr[0]==arr[1] && arr[1]==arr[2])return arr[0];
    if(arr[3]==arr[4] && arr[4]==arr[5])return arr[3];
    if(arr[6]==arr[7] && arr[7]==arr[8])return arr[6];
    if(arr[0]==arr[3] && arr[3]==arr[6])return arr[0];
    if(arr[1]==arr[4] && arr[4]==arr[7])return arr[1];
    if(arr[2]==arr[5] && arr[5]==arr[8])return arr[2];
    if(arr[0]==arr[4] && arr[4]==arr[8])return arr[0];
    if(arr[2]==arr[4] && arr[4]==arr[6])return arr[2];
    return 0;
  }

  const res = ()=>{
    location.reload(true);
  }

  const run = (id)=>{
    if(arr[id-1]=='O' || arr[id-1]=='X')return
    const col = document.getElementById(id)
    col.childNodes[0].innerHTML=sym
    arr[id-1]=sym
    swap()
    const ch = check()
    if(ch)
    {
      const win = document.getElementById('win')
      win.innerText = `${ch} wins`
    }
  }
  return (
    <div className='h-[100vh] w-[100vw] flex flex-col justify-center items-center bg-gray-900'>

      <div className='flex text-white font-bold text-5xl text-center'>
        <div id='1' onClick={()=>run(1)} className='h-20 w-20 bg-red-500 border-solid border-black border-2 cursor-pointer hover:scale-110'><h1></h1></div>
        <div id='2' onClick={()=>run(2)} className='h-20 w-20 bg-red-500 border-solid border-black border-2 cursor-pointer hover:scale-110'><h1></h1></div>
        <div id='3' onClick={()=>run(3)} className='h-20 w-20 bg-red-500 border-solid border-black border-2 cursor-pointer hover:scale-110'><h1></h1></div>
      </div>

      <div className='flex text-white font-bold text-5xl text-center'>
        <div id='4' onClick={()=>run(4)} className='h-20 w-20 bg-red-500 border-solid border-black border-2 cursor-pointer hover:scale-110'><h1></h1></div>
        <div id='5' onClick={()=>run(5)} className='h-20 w-20 bg-red-500 border-solid border-black border-2 cursor-pointer hover:scale-110'><h1></h1></div>
        <div id='6' onClick={()=>run(6)} className='h-20 w-20 bg-red-500 border-solid border-black border-2 cursor-pointer hover:scale-110'><h1></h1></div>
      </div>

      <div className='flex text-white font-bold text-5xl text-center'>
        <div id='7' onClick={()=>run(7)} className='h-20 w-20 bg-red-500 border-solid border-black border-2 cursor-pointer hover:scale-110'><h1></h1></div>
        <div id='8' onClick={()=>run(8)} className='h-20 w-20 bg-red-500 border-solid border-black border-2 cursor-pointer hover:scale-110'><h1></h1></div>
        <div id='9' onClick={()=>run(9)} className='h-20 w-20 bg-red-500 border-solid border-black border-2 cursor-pointer hover:scale-110'><h1></h1></div>
      </div>
      <div>
        <h1 id='win' className='font-bold text-5xl text-blue-500'></h1>
        <button className='bg-red-500 text-white text-2xl font-semibold mt-5 ml-5 rounded-md p-2' onClick={()=>res()}>Restart</button>
      </div>
    </div>
    
  )
}

export default Grid