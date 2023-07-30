var ka_limitVal = 5;
setInterval(()=>{
  if(!document.querySelector('#place-order')){return false;}

  

  let form =     document.querySelector('#place-order');

  let more_options = form.querySelector('._2uQVZg6_nK7ZTqdIGOOxKM');
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
    margin: -58px 0 0 0;
    z-index: 1;
    width: 50px;
    font-size: 16px;
    border: 1px solid #e3e0e0;
    padding: 4px;
    " type="number" stateon="SELL" checked stateoff="BUY" label="" class="su-switch" value="${ka_limitVal}">
     <label for="limit_toggler" class="su-switch-control"></label>`;
    more_options.appendChild(div);
    
    
    
  }

  
  
  let toggle = more_options.querySelector('.limit_toggler input');
  let submit_value = form.querySelector('._3_Oj3w8EX2Ra2dUFE5FjVK');
  
  
  ka_limitVal = toggle.value;
  
  
  if(toggle.value !=null && toggle.value !=0){

  if(form.querySelector('._36mIG7FbmjCKE1RFgyNT6A').checked==false){
    form.querySelector('._36mIG7FbmjCKE1RFgyNT6A').click();
  }
    
    let ltp = Math.round(form.querySelector('._30zENB21VYkuu5Saf-GDpN').innerText.replace(/[₹,]/,''));
    let new_ltp = ltp;
    if(submit_value.innerText =='Buy'){
      new_ltp = new_ltp+parseFloat(toggle.value);
      
    }else{
      
      new_ltp = new_ltp-parseFloat(toggle.value);
    }
    
    // alert('sad'+new_ltp);
    if(isNaN(new_ltp)==false){
    let price = form.querySelector('._3ixJPeK7kTCqL2uDy_Yqj9:nth-child(2) ._IGgXcfkDZI1P6aDYtLtJ').value = new_ltp;
    // let trigger = form.querySelector('.trigger input').value = new_ltp;
  }
  }
  
},100)

setTimeout(function(){
  if(document.querySelector('[data-theme=light]')){
    document.querySelector('[data-theme=light]').style = `
    
    --red: #000000;
    --green: #000000;
    `;
  }
},100);
