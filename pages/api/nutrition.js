export default (req, res) => {
  // const nutrientsData = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients',
  //   { 
  //     method: 'POST',  
  //     headers: {
  //       "Content-Type": "application/json", 
  //       "x-app-id": "3f45926e", 
  //       "x-app-key" :"8ad16db1af6bf3edf049bd99f5232bdb"
  //     },
  //     body: JSON.stringify({ "query": "banana" }) ,
  //   }
  // );
  // const data = await res.json();

  res.status(200).json({
    nutrition: "1 carb"
  });
};