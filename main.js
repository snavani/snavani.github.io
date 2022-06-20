function refreshName() {
    var url = 'https://randomuser.me/api/';

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonResponse) {
            var name = jsonResponse.results[0].name.first;
            console.log(name)
            document.getElementById('name').innerHTML = name;
            return name
        });
}
