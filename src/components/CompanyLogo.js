const CompanyLogo = (props) => {

    const companyLogoMap = {
        "Fidelity": "https://logos-world.net/wp-content/uploads/2021/02/Fidelity-Symbol.jpg",
        "Charles Schwab": "https://logos-world.net/wp-content/uploads/2021/03/Charles-Schwab-Emblem.png",
        "Vanguard": "https://g.foolcdn.com/editorial/images/474099/vanguard-logo-big.jpeg",
        "BlackRock":"https://www.marketbeat.com/logos/blackrock-inc-logo.gif",
        "State Street":"https://vectorlogoseek.com/wp-content/uploads/2020/02/state-street-vector-logo.png",
        "Invesco": "https://insuranceaum.com/wp-content/uploads/2022/03/fi_Invesco.png",
        "Amundi": "https://www.premiere-inc.com/wp-content/uploads/2019/11/Untitled-design-2.png",
        "Northern Trust": "https://cdn.northerntrust.com/pws/nt/images/social-media/nt-2linestacked-logo-1200x628.png",
        "Legal & General": "https://upload.wikimedia.org/wikipedia/commons/a/a5/L%26G_Sponsorship_Logo_Large_PMS_4C_Black.png", 
        "DWS Group": "https://thewealthmosaic.s3.amazonaws.com/media/Logo_DWS.png"
    }

    const companyName = props.fund.company
    const logoSrc = companyLogoMap[companyName]

    return(
        <>
        {logoSrc && <img src={logoSrc} alt={`${companyName} logo`} className="companyLogo"/>}
        </>
    )
}

export default CompanyLogo