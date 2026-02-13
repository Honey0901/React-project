const reactDescription=['Fundamental','Crucial','Core'];

function getRandomint(max) {
  return Math.floor(Math.random() * (max+1));
}

export default function Header() {
  const Honey=reactDescription[getRandomint(2)];
  return (<header>
    <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
        {Honey} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>);
}
