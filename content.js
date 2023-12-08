var ka_limitVal = 1;
var is_market_clicked = false;

   
setInterval(()=>{
  if(!document.querySelector('form.order-window')){return false;}

  let form =     document.querySelector('form.order-window');


  
  let more_options = form.querySelector('.more-options');
  if(form==null){
    return false;
  }
  if(more_options.querySelector('.limit_toggler')==null){
    let div = document.createElement('div');
    div.classList.add('limit_toggler');
    div.innerHTML = `
    <input id="limit_toggler" style="
    position: absolute;
    top: 217px;
    left: 50%;
    // margin: -58px 0 0 0;
    margin: 0px 0 0 -16px;
    z-index: 1;
    width: 50px;
    font-size: 16px;
    border: 1px solid #e3e0e0;
    padding: 4px;
    z-index: 99;
    " type="number" stateon="SELL" checked stateoff="BUY" label="" class="su-switch" value="${ka_limitVal}">
     <label for="limit_toggler" class="su-switch-control"></label>`;
    more_options.appendChild(div);
    
    
    
  }

  let toggle = more_options.querySelector('.limit_toggler input');
  let submit_value = form.querySelector('button.submit');
  
   if(document.querySelector('[value="MARKET"]').addEventListener('click',function(){
      is_market_clicked = true;
    }));

   if(document.querySelector('[value="LIMIT"]').addEventListener('click',function(){
      is_market_clicked = true;
  toggle.value = ka_limitVal;
    }));

   if(document.querySelector('input[value="SL"]').addEventListener('click',function(){
      is_market_clicked = false;
      toggle.value = '';
    }));

   if(document.querySelector('input[value="SL-M"]').addEventListener('click',function(){
      is_market_clicked = false;
      toggle.value = '';
    }));
  
  
  if(toggle.value !=null && toggle.value !=0){

  
  ka_limitVal = toggle.value;

  if(document.querySelector('.order-type .su-radio-wrap:nth-child(2) input').checked==false && is_market_clicked){
    document.querySelector('.order-type .su-radio-wrap:nth-child(2) input').click();
  }
    
    let ltp = Math.round(form.querySelector('.last-price').innerText.replace(/[₹,]/,''));
    let new_ltp = ltp;
    
    if(submit_value.innerText =='Buy'){
      new_ltp = new_ltp+parseFloat(toggle.value);
      
    }else{
      
      new_ltp = new_ltp-parseFloat(toggle.value);
    }
    if(isNaN(new_ltp)==false){
      new_ltp = Math.round(new_ltp);
    let price = form.querySelector('.price input').value = new_ltp;
    let trigger = form.querySelector('.trigger input').value = new_ltp;
  }
  }
  
},100)


// let rules = document.createElement('div');
// let close_div = document.createElement('div');
// close_div.classList.add('close_this_kt');
// close_div.innerHTML = 'Toggle KT';
// close_div.style = `
// position: fixed;
// bottom: 10px;
// right: 10px;
// display: block;
// padding: 10px;
// opacity: 0.5;
// cursor:pointer;
// z-index:99999;
// `;

// let rulesH1 = document.createElement('h1');
// rulesH1.innerHTML = `
// Rajilesh's 10 Rules<br />
// 0. Check india vix and price  for the direction. but this may get wrong<br />
// 1. Don't stick in any single direction adapt change immediatly.<br />
// 2. You fuck, don't hurry check rounding figure or supply or demand zone<br />
// 3. Respect chart levels of 1 min and 1 day first in any scenario. and OI Percentage difference<br />
// 4. More gap in ema's no chance for crossing more time<br />
// 5. Set stop loss first.<br />
// 6. Don't ever lose self controls, that is what they want.<br />
// 7. You are trading against super computers.<br />
// 8. Exit or Entry, don't wait<br />
// 9. don't trade against the trend. <br />
// 10. Don't go long on top of the candles. <br />
// 11. Don't go short on bottom of the candles. <br />
// 12. Don't trade in the money, only deep out of the money, you bloody greedy<br />
// 13. Don't carry forward your trade<br />
// 14.  If you don't follow this, you would fuck up your money. <br />
// 15.  Don't take more than 10 trades, each trades are valuable<br />`;

// if(window.location.href.indexOf('ext')>-1){
//   rulesH1.style = `line-height: normal;
// font-weight: bold;
// color: #f00;
// position: fixed;
// right: 0%;
// z-index: 999999;
// font-size: 13px;
// padding: 0.8em;
// left:0px;
// bottom:70px;
// background:rgba(255, 255, 255,0.8);
// width:550px;
// margin:0 auto;`;
// }else{
//   rulesH1.style = `line-height: normal;
//   font-weight: bold;
//   color: #f00;
//   position: fixed;
//   right: 0%;
//   z-index: 999999;
//   font-size: 13px;
//   padding: 0.8em;
//   left:0px;
//   // top:50px;
//   bottom:70px;
//   background:rgba(255, 255, 255,0.8);
//   width:550px;
//   margin:0 auto;`;
// }
// rules.style  = `
// position: fixed;
// bottom: 0px;
// left: 0px;
// z-index: 999999;
// right: 0px;
// top: 0px;
// pointer-events:none;
// display:none;

// `;
// rules.appendChild(rulesH1);
// rules.classList.add('rules_wrapper');
// document.body.appendChild(rules);
// document.body.appendChild(close_div);
// let intTimer=false;


// let intTimerA = ()=>{

//   if(document.querySelector('form.order-window')){

//     rules.style.display = rules.style.display=='none' ? 'block' : 'block';
//     close_div.style.display = rules.style.display=='none' ? 'block' : 'block';
//   }else{
// if(isHovered){
//   rules.style.display = 'none';
//   close_div.style.display = 'none';
// }else{
//   rules.style.display = rules.style.display=='none' ? 'block' : 'block';
//   close_div.style.display = rules.style.display=='none' ? 'block' : 'block';

// }
//   }
// }


// intTimer =setInterval(intTimerA,2000);
// document.querySelector('.close_this_kt').addEventListener('click',function(){

//   rules.style.display = 'none';
//   clearInterval(intTimer);
//   intTimer = false;
// })

// let isHovered = false;
// window.addEventListener("keydown", e => {
//   if ((e.key == "i")) {
    
//   isHovered = false;
// }else if(e.key == "h"){
  
//   isHovered = true;
//   }

// });
