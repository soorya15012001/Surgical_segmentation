const ce = document.createElement.bind(document);
const qs = document.querySelector.bind(document);

const $stage = qs('.stage');

// duplicates for weight
const sizes = ['sm', 'sm', 'md', 'md', 'lg'];
const types = ['toaster', 'toaster', 'toaster', 'toast', 'toast'];

const sideClasses = ['top', 'bottom', 'front', 'back', 'left', 'right'];

const getRandomMember = arr => arr[Math.floor(Math.random() * arr.length)];
const getObject = type => {
    const $container = ce('div');
    const $object = ce('div');
    
    $container.classList.add('container');
    $object.classList.add(type);
    $object.innerHTML = sideClasses.map(cl => `<div class="${cl}"></div>`).join('');
    
    $container.appendChild($object);
    
    return $container;
};

const generateSet = () => {
    for(let i = 1; i <= 10; i++) {
        const $el = getObject(getRandomMember(types));
        const size = getRandomMember(sizes);
        let topStart = Math.floor(Math.random()*99) + 1;
        topStart *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
        
        const rightStart = ~(Math.floor(Math.random() * 40) + 10);
        const styles = {
            transition: 'all 20s',
            transformOrigin: 'top right',
            top: `${topStart}%`,
            right: `${rightStart}%`,
            zIndex: size === 'sm'
                ? 5
                : size === 'md'
                    ? 15
                    : 25,
            transform: size === 'sm'
                ? ' scale(0.2)'
                : size === 'md'
                    ? ' scale(0.55)'
                    : ' scale(0.75)',
        };
        
        Object.keys(styles).map((k) => {
            $el.style[k] = styles[k];
        });

        document.body.appendChild($el);

        requestAnimationFrame(() => {
            let newTop = topStart;
            let newRight = rightStart;
            let shouldContinue = true;
            
            while (shouldContinue) {
                newTop++;
                newRight++;
                
                shouldContinue = newRight < (Math.floor(Math.random() * 100) + 120);
            }
            
            $el.style.top = `${newTop}%`;
            $el.style.right = `${newRight}%`;
        });

        setTimeout(() => {
            $el.parentNode.removeChild($el);
        }, 20000)
    }
}

generateSet();

setInterval(generateSet, 2000);


