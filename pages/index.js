import fetch from 'isomorphic-unfetch';
import ItemRow from '../components/ItemRow';
import useSWR from 'swr';

const Nutrition = props => {
  const { data } = useSWR('/api/nutrition', fetcher);

  const nutrition = data?.nutrition;

  return <div>
    <ItemRow />
    <div id="banana">
      { JSON.stringify(props.data) }
    </div>
    <div className="quote">
      { nutrition }
    </div>

    <style jsx>{`
      #banana {
        width: 90%;
        max-width: 900px;
        margin: 300px auto;
        text-align: center;
      }
      .quote {
        font-family: cursive;
        color: #e243de;
        font-size: 24px;
        padding-bottom: 10px;
      }
    `}</style>
  </div>
};

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

Nutrition.getInitialProps = async function() {
  const res = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients',
    { 
      method: 'POST',  
      headers: {
        "Content-Type": "application/json", 
        "x-app-id": "3f45926e", 
        "x-app-key" :"8ad16db1af6bf3edf049bd99f5232bdb"
      },
      body: JSON.stringify({ "query": "banana" }) ,
    }
  );
  const data = await res.json();

  return {
    data,
  };
};

export default Nutrition;
