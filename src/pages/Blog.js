import { Link } from "react-router-dom";
import React, { useState } from "react";


    const OPEN ="Open an account";
    const HAPPY ="Happy Money ";
    const WOMAN ="Woman Money"


const Blog = () => {
  const [bloggers, setBloggers] = useState([
         

    {
      category: "Open an account",
      img:
        "https://business.bofa.com/content/dam/boamlimages/images/bofa-og-logo.jpg",
      title: "Merrill Edge® Self-Directed - Open an account",
      date: "April 13, 2023",
      author: "Bank of America",
      p:"Everything you need.To invest the way you want.Take control of your investing experience using exclusive tools, research, insights and more.",
      link:
        "https://www.merrilledge.com/offers/investing-tools?cm_mmc=GWM-Edge-Int-_-Google-PS-_-index-funds-_-NB_Investing&ds_rl=8411&gclid=Cj0KCQjwlumhBhClARIsABO6p-zh3bvV6Vze0JqS5Cvf73dhD2StA2t9M0DlxSxAtAOZGJV-O9ycnk4aAnk1EALw_wcB&gclsrc=aw.ds",
    },
    {
      category: "Happy Money",
      img:
        "https://images.squarespace-cdn.com/content/v1/572fc6042b8dde9e10b6ea9d/1650103337037-DYVZVYTN1XWV385ZBAIC/Following-Mr-Money-Mustaches-Simple-Strategy-to-Financial-Freedom.jpg?format=1500w",
      title:
        "Following Mr. Money Mustache’s Simple Strategy to Financial Freedom",
      date: "17 Apr, 2022",
      author: "Ruth",
      p:"Good decisions, consistently made, build wealth.I want to get across to you in this blog post that slow and steady investment over time works; I think about it as “the gentle path to FI”. Good decisions, when consistently made, do build wealth. I am not following a get rich scheme. I’m not mortgaged up to the eyeballs in rental property. I’m just following the bright idea that MMM so eloquently explained in his blog posts. As I gather more data year after year, I see that this simple strategy works.",
      link: "https://www.thehappysaver.com/blog/following-mr-money-mustaches-simple-strategy-to-financial-freedom",
    },
    {
      category: "Woman Money",
      img:
        "https://themillennialmoneywoman.com/wp-content/uploads/2021/02/sp500-process.png",
      title: "How to Invest in Index Funds: NEW Step-by-Step Guide [2023]",
      date: "February 13, 2023",
      author: "Fiona Smith",
      p:"As you begin investing in index funds, there are a few things you should keep in mind:Expense Ratio – The lower the expense ratio, the lower the cost to you .Long Term Mindset – It will take time and you’ll likely see your money go up and down with the stock market fluctuations.Dollar Cost Averaging.  – Dollar Cost Averaging (aka DCA) is a surefire way to grow your investments over period investments, over time Monitor the Fund’s Performance. – Your fund should ultimately be mirroring the performance of your chosen index .",
      link: "https://themillennialmoneywoman.com/how-to-invest-in-index-funds/",
    },
  ]);

  const [category, setCategory] = useState(OPEN);


  const getBloggersInCategory = (category) => {
    return bloggers.filter((blogger) => blogger.category === category);
  };

  return (
    <>
      <div className="selection">
        <div className="choose">
        Choose your blog category :
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="Open an account">Open an account</option>
          <option value="Happy Money">Happy Money</option>
          <option value="Woman Money">Woman Money</option>
        </select>
      </div>
      <div>
        {getBloggersInCategory(category).map((blogger, index) => (
          <div className="blogger-card" key={index}>
            <img src={blogger.img} height="250" width="550" alt="blogger" />
            <div className="name">{blogger.title}</div>
            <div>Date: {blogger.date}</div>
            <div>Author 🖌   :{blogger.author}</div>
            <div className="p">{blogger.p}</div>
            <div>
  <button onClick={() => window.location.href = blogger.link} className="readbtn">read more</button>
</div>

            
          </div>
        ))}
      </div>
      <Link to='/jxfunds/chat'>
          <button className="chatdot">Chat ☎️</button>
        </Link>
      </div>
 
    </>
  );
};

export default Blog;
