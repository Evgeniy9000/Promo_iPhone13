const getData = () => {

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {

            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Ошибка')
            }
        })

        .then((data) => {
            console.log(data);

        })
        .catch((error) => {
            console.log(error.message);

        })
        .finally(() => {
            console.log('finally');
        })


}

getData()