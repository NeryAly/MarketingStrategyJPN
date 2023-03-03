const apiUrl = 'http://localhost:5000/api';

const fetchData = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
}

fetchData();