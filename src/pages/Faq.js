
const Faq = () => {
    return(
            <div className="faqPg">
                <h1 className="faq_phrase"> Frequently Asked Questions</h1>
                <hr className="faqLine"/>
                <div className='question'>
                   <span className="quest">Q.  What is an index fund?</span>  <br/>
                    A.	An index fund is a type of mutual fund or exchange-traded fund (ETF) that tracks a specific market index, such as the S&P 500. Index funds aim to replicate the performance of the underlying index by holding a diversified portfolio of stocks or bonds that match the index's composition.  
                 </div>
                 <div className="question">
                 <span className="quest"> Q.  How do index funds work?</span><br/>
	                A.	Index funds work by investing in the same stocks or bonds as the underlying index they are tracking. By doing so, they aim to match the index's performance and provide investors with exposure to the entire market, rather than trying to outperform it. Index funds typically have lower fees and expenses compared to actively managed funds, making them a popular choice for long-term investors.
                 </div>
                 <div className="question">
                 <span className="quest">Q.   What are the advantages of investing in index funds?</span><br/>
	                A.	 Investing in index funds offers several advantages, such as diversification, low costs, and ease of use. Index funds provide exposure to the entire market, reducing the risk of individual stock picking. They also have lower fees and expenses compared to actively managed funds, allowing investors to keep more of their returns. Additionally, index funds are easy to use and require minimal effort to manage.
                 </div>
                 <div className="question">
                 <span className="quest">Q.   How do I choose the right index fund for me?</span><br/>
	                A.   Choosing the right index fund depends on several factors, such as your investment goals, risk tolerance, and time horizon. You should consider the index the fund is tracking, its historical performance, fees and expenses, and the fund manager's track record. It's also essential to diversify your portfolio by investing in multiple asset classes and regions 
                 </div> 
            </div>
    );
};

export default Faq;