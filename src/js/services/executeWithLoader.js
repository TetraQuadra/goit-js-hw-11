const executeWithLoader = async func => {
  const loader = document.querySelector('.loader');
  const section = document.querySelector('.section');

  loader.classList.remove('hidden');
  section.classList.add('hidden');

  await func();

  loader.classList.add('hidden');
  section.classList.remove('hidden');
};

export default executeWithLoader;
