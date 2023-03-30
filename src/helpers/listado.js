

export const listado = async() => {

    const url  ='https://jsonplaceholder.typicode.com/users';
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data)

  return{

  }
}
