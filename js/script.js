$(document).ready(function(){
  $('.slider').slick({
    arrows:true,
    adaptiveHeight:false,
    slidesToShow:4,
    speed:500,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
})

// This is a demo of GentleForm:
// https://github.com/Zhouzi/GentleForm

const toaster = document.getElementsByClassName('toaster')[0]
const form = document.querySelector('form')

GentleForm(form, function (event) {
  event.preventDefault()
  
  if (this.isValid()) addToast('success', 'Данные в форме введены верно!')
  else addToast('error', 'Форма заполнена не верно.')
})

function addToast (type, message) {
  const toast = document.createElement('div')

  toast.classList.add('toast')
  toast.classList.add('toast--' + type)
  toast.innerHTML = message

  toaster.appendChild(toast)

  toast.addEventListener('transitionend', function (event) {
    if (event.propertyName !== 'transform') return

    if (toast.classList.contains('toast--show')) {
      setTimeout(function () {
        toast.classList.remove('toast--show')
      }, 3000)
    } else {
      toaster.removeChild(toast)
    }
  }, false)

  setTimeout(() => toast.classList.add('toast--show'), 100)
}


$('.burger__menu a').click(function(){
 
  $('.trigger').toggle();
  $('.burger__menu').toggleClass('rounded');
  $('.close').toggle();
  $('.drop-down').toggleClass('down');
  
 
});