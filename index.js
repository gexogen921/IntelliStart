const contact = document.getElementById('contact');
const language = document.getElementById('language');
const skills = document.getElementById('skills');
const interests = document.getElementById('interests');
const follow = document.getElementById('follow');

contact.addEventListener('click', event => {
  window.location.href = 'tel://380631260147';
});

language.addEventListener('click', event => {
  language.classList.add('shadow-inset-center');

  setTimeout(() => {
    language.classList.remove('shadow-inset-center');
  }, 1500);
});

interests.addEventListener('click', event => {
  interests.classList.add('vibrate-1');

  setTimeout(() => {
    interests.classList.remove('vibrate-1');
  }, 1500);
});

follow.addEventListener('click', event => {
  follow.classList.add('jello-diagonal-2');

  setTimeout(() => {
    follow.classList.remove('jello-diagonal-2');
  }, 1500);
});

skills.addEventListener('click', event => {

  const skillsActive = [];
  const colors = ['red', 'blue', 'green', 'black'];

  for (let i = 1; i <= 5; i++) {
    const element = document.getElementById(`active${i}`);

    skillsActive.push(element);

    colors.forEach((color) => {
      element.classList.remove(color);
    })
  }

  skillsActive.forEach((item) => {
    item.style.width = `${Math.floor(Math.random() * (150 - 1 + 1) + 1)}px`;
    item.classList.add(colors[Math.floor(Math.random() * 4)]);
  });
});
