
// const list = ["lorem ipsum", "lorem ipsum","lorem ipsum", "lorem ipsum"];
interface Props {
    links: string[];
    imgUrl?: string;
}
function clickBurger() {
  const burger = document.getElementById("burger");
    const nav = document.querySelector(".header__navigation");
    nav?.classList.toggle("active");
    burger?.querySelectorAll("span").forEach((span) => span.classList.toggle("active"));
}
export default function Header({ links }: Props) {


    return (
        <header className="header">
            <div className="header__container">
                <nav className="header__navigation">
                    {/* <a href="#" className="header__logo"><img src="" alt="" /></a> */}
                    <ul className="header__list">
                        {links.map((item) => <li key={item} onClick={clickBurger} className="header__item"><a className="header__link" href="#">{item}</a></li>)}


                    </ul>
                    <a href="#" className="header__partner">Стати партнером</a>

                </nav>
                <button className="header__burger" id="burger" onClick={clickBurger}>
                    <span ></span>
                    <span></span>
                </button>
            </div>
        </header>
    )
}


