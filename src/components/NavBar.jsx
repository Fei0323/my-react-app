const NavBar = ({ onBefore, onNext, goBefore, goNext }) => {
    return (
        <div>
            {goBefore && <button onClick={onBefore}>before</button>}
            {goNext && <button onClick={onNext}>after</button>}
        </div>
    );
};

export default NavBar;