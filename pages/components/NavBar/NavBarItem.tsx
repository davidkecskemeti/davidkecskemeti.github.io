interface NavButtonProps {
  name: string;
  onClick: Function;
}

const NavButton: React.FC<NavButtonProps> = ({ name, onClick }) => (
  <li className="nav-item">
    <a className="nav-link" href={`#${name}`} onClick={() => onClick(name)}>
      {name}
    </a>
  </li>
);

export default NavButton;
