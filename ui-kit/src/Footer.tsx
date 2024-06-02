interface Props{
    footerMedia: {
        icon: string,
        link: string
    }[],
    footerLogo: string,
    footerDate: number
}

export default  function Footer ({footerMedia, footerLogo, footerDate}: Props){
  return (
    <footer className="footer">
        <div className="footer__container">
            <div className="footer__socials socials-footer">
            { footerMedia.map(item => <a href={item.link} className="socials-footer__link"><img src={"../public/footer/" + item.icon} alt="" /></a>)}
            </div>


            <div className="footer__logo"><img src={"../public/footer/"+footerLogo} alt=""/></div>
            <div className="footer__date">{footerDate}</div>
        </div>
    </footer>
  )
}

