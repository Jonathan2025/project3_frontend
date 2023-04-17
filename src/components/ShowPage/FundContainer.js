const fundInformation = ({fund}) => {

  const dateAdded = new Date(fund.date.slice(0, 10));
  const formattedDate = dateAdded.toLocaleDateString();
  const [month, day, year] = formattedDate.split('/');
  const reversedDate = `${month}/${day}/${year}`

    return(
    <div className="showFundContainer">
        <h1> {fund.name} </h1>
          <div className="fundInfo">
            <h3> Company: <br/>{fund.company}</h3>
            <h3> Symbol: <br/>{fund.symbol}</h3>
            <h3> Description: <br/>{fund.description}</h3>
            <h3> Recommendation: <br/>{fund.recommendation}</h3>
            <h3> Date Added: <br/>{reversedDate}</h3>
        </div>
    </div>
    )
}

export default fundInformation