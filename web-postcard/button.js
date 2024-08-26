const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I Love You Too &#128018;';
    yesBtn.classList.add('hidden');
    noBtn.classList.add('hidden');
});
noBtn.addEventListener('click', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});