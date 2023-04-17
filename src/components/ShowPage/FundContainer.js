const fundInformation = ({fund}) => {

  const dateAdded = new Date(fund.date.slice(0, 10));
  const formattedDate = dateAdded.toLocaleDateString();
  const [month, day, year] = formattedDate.split('/');
  const reversedDate = `${month}/${day}/${year}`

    return(
    <div className="showFundContainer">
          <div className="fundInfo">
            <h4> Company:</h4> <p>{fund.company}</p>
            <h4> Symbol:</h4> <p>{fund.symbol}</p>
            <h4> Description:</h4> <p>{fund.description}</p>
            <h4> Recommendation:</h4> <p>{fund.recommendation}</p>
            <h4> Date Added:</h4> <p>{reversedDate}</p>
        </div>
    </div>
    )
}

export default fundInformation