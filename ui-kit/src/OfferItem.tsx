

interface Props {
    offerItem: {
        title: string,
        description: string,
        price: number,

        includedOfferList: string[],
        notIncludedOfferList: string[],

        infoExtendedDescription: string[]
    }
}


export default function OfferItem({ offerItem }: Props) {
   

    function displayPopupList() {
        const popup = document.getElementById("popup");
        const container = popup?.querySelector(".popup__text");
        offerItem.includedOfferList.map((item, index) => {
            container!.innerHTML += ` <div className="popup__content">
                        <h3 className="popup__title">${item}</h3>
                        <p className="popup__description">${offerItem.infoExtendedDescription[index]}</p>
                    </div>`
        }
        )
    }
    function infoButton() {
        const popup = document.getElementById("popup");
        // const container = popup?.querySelector(".popup__container");
        popup?.classList.toggle("active");
       
    }
    function clickBtn(){
        infoButton();
        displayPopupList();
    }
    return (<>

        <div className="items-offers__item">

            <button className="items-offers__info" onClick={clickBtn}>i</button>
            <div className="items-offers__top">
                <h3 className="items-offers__name">{offerItem.title}</h3>
                <div className="items-offer__text">{offerItem.description}</div>
                <div className="items-offers__price">{offerItem.price}</div>
            </div>
            <ul className="items-offer__list">

                {offerItem.includedOfferList.map(item => <li className="items-offers__type">{item}</li>)}

                {offerItem.notIncludedOfferList.map(item => <li className="items-offers__type items-offers__type--not-included">{item}</li>)}


            </ul>
            <a href="#" className="items-offers__buy">Купити</a>
        </div>
    </>


    )
}