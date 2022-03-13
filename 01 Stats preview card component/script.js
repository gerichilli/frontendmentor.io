'use strict';

const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target')
        const count = +counter.innerHTML
        const increment = Math.round(+counter.getAttribute('data-speed'), 2)

        if(count < target) {
            counter.innerHTML = count + increment
            setTimeout(updateCount, 50)
        } else {
            counter.innerHTML = target
        }
    }
    
    updateCount()
})