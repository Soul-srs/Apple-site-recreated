const lmn = document.getElementById('lmn');
const mn = document.getElementById('menu');
const bl = document.getElementById('blur');

lmn.addEventListener('mouseover', () => {
    mn.style.height = '50%';
    bl.style.opacity = '1';
});

lmn.addEventListener('mouseout', (event) => {
    const related = event.relatedTarget;

    if (!mn.contains(related) && !lmn.contains(related)) {
        mn.style.height = '6vh';
        bl.style.opacity = '0';
    }
});

mn.addEventListener('mouseout', (event) => {
    const related = event.relatedTarget;

    if (!mn.contains(related) && !lmn.contains(related)) {
        mn.style.height = '6vh';
        bl.style.opacity = '0';

    }
});

