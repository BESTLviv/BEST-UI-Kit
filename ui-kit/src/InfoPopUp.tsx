


export default function InfoPopUp() {
    function closeButton(){
        const popup = document.getElementById("popup");
        popup?.classList.toggle("active");
        
        const container = popup?.querySelector(".popup__text");
        container!.innerHTML = '';
    }
    return (
        <div className='popup' id="popup">
            
            <div className='popup__container'>
            <button className="popup__close" onClick={closeButton}>X</button>
            <div className="popup__text">

            </div>
            </div>
        </div>
    )
}
