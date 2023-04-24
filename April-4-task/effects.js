let modal= document.getElementById('contact-modal'),
  openmodal= document.getElementById('open'),
  closemodal= document.getElementById('modal-content');
openmodal.addEventListener('click',function(){
modal.style.display='block';
})
closemodal.addEventListener('click',function(){
modal.style.display = 'none';
})