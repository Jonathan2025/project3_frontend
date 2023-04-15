const CompanyLogo = (props) => {

    const companyLogoMap = {
        "Fidelity": "https://logos-world.net/wp-content/uploads/2021/02/Fidelity-Symbol.jpg",
        "Charles Schwab": "https://logos-world.net/wp-content/uploads/2021/03/Charles-Schwab-Emblem.png"

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