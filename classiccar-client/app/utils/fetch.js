export async function fetchCarsIsSold(bool) {
  const response = await fetch(`http://localhost:8080/public/sold/${bool}`);
  const result = await response.json();
  return result;
}

export async function fetchThumbnail(id) {
  const response = await fetch(`http://localhost:8080/public/images/${id}`);
  const result = await response.json();
  return result;
}

export async function fetchCarDetail(id) {
  const response = await fetch(`http://localhost:8080/public/cars/${id}`);
  const result = await response.json();
  return result;
}
