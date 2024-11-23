const lmn = document.getElementById('lmn');
const mn = document.getElementById('menu');

lmn.addEventListener('mouseover', () => {
    mn.style.height = '50%';
});

lmn.addEventListener('mouseout', (event) => {
    const related = event.relatedTarget;

    if (!mn.contains(related) && !lmn.contains(related)) {
        mn.style.height = '6vh';
    }
});

mn.addEventListener('mouseout', (event) => {
    const related = event.relatedTarget;

    if (!mn.contains(related) && !lmn.contains(related)) {
        mn.style.height = '6vh';
    }
});
