// function myfunction()
// {
//     var text="Thank you for your submitting a helpful result!🎉🎉🎉"
//     var text="役に立つフィードバックをありがとうございます!<br>🎉🎉🎉"
//     document.getElementById("mybutton").innerHTML= text;
//     // document.getElementById("mybutton").style.fontStyle='italic';
//     document.getElementById("mybutton").style.fontSize='10pt';                  
//     document.getElementById("mybutton").style.color='black';
//     document.getElementById("mybutton").style.position='absolute';
//     document.getElementById("mybutton").style.fontWeight='bold';
//     document.getElementById("mybutton").style.backgroundColor='#A9DFBF';
// document.getElementById("mybutton").style.border='8px';
// document.getElementById("mybutton").style.top='0%';
// document.getElementById("mybutton").style.width='100%';
// document.getElementById("mybutton").style.height='100%';
// document.getElementById("mybutton").style.borderRadius='8px';
// document.getElementById("mybutton").style.paddingBlock='4px';
// document.getElementById("mybutton").style.fontFamily='';
// }
    
// function setSatisfaction(satisfied) {
//     var messageElement = document.getElementById('satisfaction-message');
//     var emojiElement = document.getElementById('satisfaction-emoji');
    
//     if (satisfied) {
//         messageElement.textContent = 'We\'re glad you had a good experience.';
//         emojiElement.textContent = '😊';
//     } else {
//         messageElement.textContent = 'We\'re sorry you had a bad experience.';
//         emojiElement.textContent = '😔'; 
//     }
// }
// Detect device
// if (navigator.userAgent.match(/Mobile/)) {
//     // Code for mobile devices
//   } else if (navigator.userAgent.match(/Tablet/)) {
//     // Code for tablet devices
//   } else {
//     // Code for desktop and laptop devices
//   }
function messagebody(){
    const mess = "Thank you for your helpful feedback!";
    // alert();
    const alertBox = document.createElement('div');
    // const buttonRect = event.target.getBoundingClientRect();
    alertBox.classList.add("alert-box");
    alertBox.innerHTML = mess;
    alertBox.style.display = 'flex';
    // alertBox.style.verticalAlign = '';
    alertBox.style.textAlign = 'center';
    alertBox.style.lineHeight = '50px';
    alertBox.style.flexWrap = 'nowrap';

    // alertBox.style.top = `${buttonRect.top - alertBox.offsetHeight - 0 }px`;
    // alertBox.style.top = `${buttonRect.top}px`;
    alertBox.style.right = '50px';
    alertBox.style.bottom = '200px';
    alertBox.style.position = 'absolute';

    document.body.appendChild(alertBox);
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times<br>';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '0px';
    closeBtn.style.right = '0px';
  
    
    closeBtn.classList.add("close-btn");
    alertBox.appendChild(closeBtn);
    closeBtn.addEventListener("click",function()
    {
        alertBox.style.display = 'none';
    })

   
    

}  