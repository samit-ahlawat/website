import FancyCursor from "./FancyCursor";

const earningsLinks = {
  AXP: "https://ir.americanexpress.com/",
  BA: "https://investors.boeing.com/",
  CAT: "https://investors.caterpillar.com/",
  CSCO: "https://investor.cisco.com/",
  CVX: "https://www.chevron.com/investors",
  DIS: "https://thewaltdisneycompany.com/investor-relations/",
  GS: "https://www.goldmansachs.com/investor-relations/",
  HD: "https://ir.homedepot.com/",
  IBM: "https://www.ibm.com/investor/",
  INTC: "https://www.intc.com/",
  JNJ: "https://www.investor.jnj.com/",
  JPM: "https://www.jpmorganchase.com/ir",
  KO: "https://investors.coca-colacompany.com/",
  MCD: "https://corporate.mcdonalds.com/corpmcd/investors.html",
  MMM: "https://investors.3m.com/",
  MRK: "https://investors.merck.com/",
  MSFT: "https://www.microsoft.com/en-us/Investor/",
  NKE: "https://investors.nike.com/",
  PFE: "https://investors.pfizer.com/",
  PG: "https://investor.pg.com/",
  RTX: "https://investors.rtx.com/",
  TRV: "https://investor.travelers.com/",
  UNH: "https://www.unitedhealthgroup.com/investors.html",
  V: "https://investor.visa.com/",
  VZ: "https://www.verizon.com/about/investors",
  WMT: "https://stock.walmart.com/",
  XOM: "https://corporate.exxonmobil.com/investors",
};

const rows = [
{
  stock: "AXP",
  date: "April 23, 2026",
  rev: "Exceeded",
  income: "Exceeded",
  guidance: "Reaffirming",
  revChange: "+9.6% ($16.97B)",
  incomeChange: "+17.6% ($2.58B)",
  sentiment: "Positive",
  pos: "18",
  neu: "3",
  neg: "1",
},
{
  stock: "BA",
  date: "April 22, 2026",
  rev: "Exceeded",
  income: "Exceeded",
  guidance: "Increasing",
  revChange: "+14.0% ($22.7B)",
  incomeChange: "+59.2% ($1.9B)",
  sentiment: "Neutral",
  pos: "9",
  neu: "8",
  neg: "5",
},
{
  stock: "CAT",
  date: "April 30, 2026",
  rev: "Exceeded",
  income: "Exceeded",
  guidance: "Reaffirming",
  revChange: "+22.0% ($18.6B)",
  incomeChange: "+30.4% ($3.1B)",
  sentiment: "Positive",
  pos: "15",
  neu: "4",
  neg: "1",
},
{
  stock: "CSCO",
  date: "February 11, 2026",
  rev: "Exceeded",
  income: "Exceeded",
  guidance: "Reaffirming",
  revChange: "+10.0% ($14.3B)",
  incomeChange: "+11.0% ($3.4B)",
  sentiment: "Positive",
  pos: "14",
  neu: "5",
  neg: "2",
},
{
  stock: "CVX",
  date: "May 1, 2026",
  rev: "Exceeded",
  income: "Exceeded",
  guidance: "Reaffirming",
  revChange: "+2.1% ($48.7B)",
  incomeChange: "-35.3% ($5.5B)",
  sentiment: "Neutral",
  pos: "10",
  neu: "7",
  neg: "4",
},
{
  stock: "DIS",
  date: "May 6, 2026",
  rev: "Exceeded",
  income: "Exceeded",
  guidance: "Increasing",
  revChange: "+7.0% ($24.6B)",
  incomeChange: "+5.4% ($2.4B)",
  sentiment: "Positive",
  pos: "16",
  neu: "4",
  neg: "2",
},
  {
    stock: "GS",
    date: "Apr 14, 2026",
    rev: "Exceeded",
    income: "Exceeded",
    guidance: "Reaffirming",
    revChange: "+16.3% ($14.21B)",
    incomeChange: "+28% ($4.13B)",
    sentiment: "Positive",
    pos: "16",
    neu: "3",
    neg: "0",
  },
  {
    stock: "HD",
    date: "May 12, 2026",
    rev: "Missed",
    income: "Exceeded",
    guidance: "Reaffirming",
    revChange: "-2.3% ($36.4B)",
    incomeChange: "-0.8% ($3.6B)",
    sentiment: "Neutral",
    pos: "5",
    neu: "11",
    neg: "2",
  },
  {
    stock: "IBM",
    date: "Apr 22, 2026",
    rev: "Exceeded",
    income: "Exceeded",
    guidance: "Reaffirming",
    revChange: "+4.5% ($15.12B)",
    incomeChange: "+8.0% ($5.6B)",
    sentiment: "Positive",
    pos: "10",
    neu: "4",
    neg: "1",
  },
  {
    stock: "INTC",
    date: "Apr 23, 2026",
    rev: "Met",
    income: "Exceeded",
    guidance: "Reaffirming",
    revChange: "+12% ($13.1B)",
    incomeChange: "+123% (-$3.73B)",
    sentiment: "Neutral",
    pos: "5",
    neu: "9",
    neg: "3",
  },
  {
    stock: "JNJ",
    date: "Apr 14, 2026",
    rev: "Exceeded",
    income: "Exceeded",
    guidance: "Reaffirming",
    revChange: "+2.3% ($21.4B)",
    incomeChange: "-0.6% ($5.4B)",
    sentiment: "Positive",
    pos: "12",
    neu: "5",
    neg: "1",
  },
  {
    stock: "JPM",
    date: "Apr 10, 2026",
    rev: "Exceeded",
    income: "Exceeded",
    guidance: "Reaffirming",
    revChange: "+8.0% ($42.5B)",
    incomeChange: "+6.0% ($13.4B)",
    sentiment: "Neutral",
    pos: "9",
    neu: "10",
    neg: "2",
  },
  {
    stock: "KO",
    date: "Apr 28, 2026",
    rev: "Exceeded",
    income: "Exceeded",
    guidance: "Increasing",
    revChange: "+12% ($12.47B)",
    incomeChange: "+18% ($3.2B)",
    sentiment: "Positive",
    pos: "15",
    neu: "2",
    neg: "0",
  },
  {
    stock: "MCD",
    date: "May 7, 2026",
    rev: "Exceeded",
    income: "Exceeded",
    guidance: "Reaffirming",
    revChange: "+9.4% ($6.52B)",
    incomeChange: "+9.0% ($1.98B)",
    sentiment: "Neutral",
    pos: "6",
    neu: "9",
    neg: "3",
  },
  {
    stock: "MMM",
    date: "Apr 21, 2026",
    rev: "Missed",
    income: "Exceeded",
    guidance: "Reaffirming",
    revChange: "+1.3% ($6.0B)",
    incomeChange: "+14% ($0.8B)",
    sentiment: "Neutral",
    pos: "4",
    neu: "7",
    neg: "3",
  },
  {
    stock: "MRK",
    date: "Apr 30, 2026",
    rev: "Exceeded",
    income: "Exceeded",
    guidance: "Increasing",
    revChange: "+5.0% ($16.3B)",
    incomeChange: "-125% ($3.1B)",
    sentiment: "Positive",
    pos: "13",
    neu: "4",
    neg: "0",
  },
  {
    stock: "MSFT",
    date: "Apr 29, 2026",
    rev: "Exceeded",
    income: "Exceeded",
    guidance: "Reaffirming",
    revChange: "+18.3% ($82.9B)",
    incomeChange: "+23% ($31.8B)",
    sentiment: "Positive",
    pos: "12",
    neu: "3",
    neg: "1",
  },
  {
    stock: "NKE",
    date: "Mar 31, 2026",
    rev: "Exceeded",
    income: "Exceeded",
    guidance: "Reaffirming",
    revChange: "+0.1% ($11.3B)",
    incomeChange: "-35% ($520M)",
    sentiment: "Neutral",
    pos: "5",
    neu: "10",
    neg: "3",
  },
  {
    stock: "PFE",
    date: "May 5, 2026",
    rev: "Exceeded",
    income: "Exceeded",
    guidance: "Reaffirming",
    revChange: "+5.4% ($14.5B)",
    incomeChange: "-9.4% ($2.69B)",
    sentiment: "Positive",
    pos: "13",
    neu: "5",
    neg: "1",
  },
  {
    stock: "PG",
    date: "Apr 24, 2026",
    rev: "Exceeded",
    income: "Exceeded",
    guidance: "Reaffirming",
    revChange: "+7.4% ($21.2B)",
    incomeChange: "+3.9% ($3.93B)",
    sentiment: "Positive",
    pos: "15",
    neu: "4",
    neg: "0",
  },
  {
    stock: "RTX",
    date: "Apr 27, 2026",
    rev: "Exceeded",
    income: "Exceeded",
    guidance: "Increasing",
    revChange: "+8.7% ($22.08B)",
    incomeChange: "+16.9% ($1.5B)",
    sentiment: "Positive",
    pos: "12",
    neu: "3",
    neg: "0",
  },
  {
    stock: "TRV",
    date: "Apr 21, 2026",
    rev: "Exceeded",
    income: "Missed",
    guidance: "Reaffirming",
    revChange: "+15.7% ($11.7B)",
    incomeChange: "-4.0% ($1.2B)",
    sentiment: "Neutral",
    pos: "5",
    neu: "10",
    neg: "3",
  },
  {
    stock: "UNH",
    date: "Apr 14, 2026",
    rev: "Exceeded",
    income: "Exceeded",
    guidance: "Reaffirming",
    revChange: "+8.6% ($101.3B)",
    incomeChange: "-88% ($5.5B)",
    sentiment: "Positive",
    pos: "14",
    neu: "4",
    neg: "0",
  },
  {
    stock: "V",
    date: "Apr 21, 2026",
    rev: "Exceeded",
    income: "Exceeded",
    guidance: "Reaffirming",
    revChange: "+17.1% ($9.4B)",
    incomeChange: "+21% ($5.5B)",
    sentiment: "Positive",
    pos: "16",
    neu: "2",
    neg: "1",
  },
  {
    stock: "VZ",
    date: "Apr 27, 2026",
    rev: "Missed",
    income: "Exceeded",
    guidance: "Increasing (EPS)",
    revChange: "+2.9% ($34.44B)",
    incomeChange: "+7.6% ($4.8B)",
    sentiment: "Positive",
    pos: "12",
    neu: "4",
    neg: "1",
  },
  {
    stock: "WMT",
    date: "May 21, 2026",
    rev: "Exceeded",
    income: "Exceeded",
    guidance: "Reducing",
    revChange: "+7.4% ($177.75B)",
    incomeChange: "+18.8% ($5.33B)",
    sentiment: "Neutral",
    pos: "30",
    neu: "2",
    neg: "0",
  },
  {
    stock: "XOM",
    date: "May 1, 2026",
    rev: "Exceeded",
    income: "Exceeded",
    guidance: "Reaffirming",
    revChange: "+2.4% ($85.14B)",
    incomeChange: "-37% ($8.2B)",
    sentiment: "Positive",
    pos: "14",
    neu: "5",
    neg: "1",
  },
];

const Earnings = () => {
  return (
    <>
      <FancyCursor />

      <div className="table-wrapper">
        <table className="earnings-table">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Date of Announcement</th>
              <th>Revenue vs Estimate</th>
              <th>Income vs Estimate</th>
              <th>Guidance</th>
              <th>Revenue Change (YoY)</th>
              <th>Income Change (YoY)</th>
              <th>Analyst Sentiment</th>
              <th>Positive Analsts</th>
              <th>Neutral Analysts</th>
              <th>Negative Analysts</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx}>
                <td>
                  <a
                    href={earningsLinks[row.stock]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ticker-link"
                  >
                    {row.stock}
                  </a>
                </td>

                <td>{row.date}</td>

                <td
                  className={
                    row.rev === "Exceeded"
                      ? "positive"
                      : row.rev === "Missed"
                      ? "negative"
                      : "neutral"
                  }
                >
                  {row.rev}
                </td>

                <td
                  className={
                    row.income === "Exceeded"
                      ? "positive"
                      : row.income === "Missed"
                      ? "negative"
                      : "neutral"
                  }
                >
                  {row.income}
                </td>

                <td
                  className={
                    row.guidance.includes("Increasing")
                      ? "positive"
                      : row.guidance.includes("Reducing")
                      ? "negative"
                      : "neutral"
                  }
                >
                  {row.guidance}
                </td>

                <td
                  className={
                    row.revChange.includes("-")
                      ? "negative"
                      : row.revChange.includes("+")
                      ? "positive"
                      : ""
                  }
                >
                  {row.revChange}
                </td>

                <td
                  className={
                    row.incomeChange.includes("-")
                      ? "negative"
                      : row.incomeChange.includes("+")
                      ? "positive"
                      : ""
                  }
                >
                  {row.incomeChange}
                </td>

                <td
                  className={
                    row.sentiment === "Positive"
                      ? "positive"
                      : row.sentiment === "Neutral"
                      ? "neutral"
                      : "negative"
                  }
                >
                  {row.sentiment}
                </td>

                <td>{row.pos}</td>
                <td>{row.neu}</td>
                <td>{row.neg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Earnings;
