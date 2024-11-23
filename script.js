const lmn = document.getElementById('lmn');
const mn = document.getElementById('menu');
const bl = document.getElementById('blur');
const mmn = document.getElementById('mmn');
const imn = document.getElementById('imn');
const ipmn = document.getElementById('ipmn');
const wmn = document.getElementById('wmn');
const amn = document.getElementById('amn');
const tcmn = document.getElementById('tcmn');
const emn = document.getElementById('emn');
const acmn = document.getElementById('acmn');
const smn = document.getElementById('smn');

const handleMouseOver = () => {
    mn.style.height = '70%';
    mn.style.borderRadius = '0 0 30px 30px';
    bl.style.opacity = '1';
};

const handleMouseOut = (event) => {
    const related = event.relatedTarget;
    if (!mn.contains(related) && !event.target.contains(related)) {
        mn.style.height = '6vh';
        bl.style.opacity = '0';
        mn.style.borderRadius = '0';
    }
};

[lmn, mmn, imn, ipmn, wmn, amn, tcmn, emn, acmn, smn].forEach(element => {
    element.addEventListener('mouseover', handleMouseOver);
    element.addEventListener('mouseout', handleMouseOut);
});

mn.addEventListener('mouseout', (event) => {
    const related = event.relatedTarget;
    if (!mn.contains(related) && !lmn.contains(related) && !mmn.contains(related)) {
        mn.style.height = '6vh';
        bl.style.opacity = '0';
        mn.style.borderRadius = '0';
    }
});

