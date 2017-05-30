const todos = [
    {id: 1, value: 'investigate fetch'},
    {id: 2, value: 'investigate react'},
    {id: 3, value: 'sleep'},
]


export const getRepos = function() {
    return fetch('https://api.github.com/users/epeicher/repos')
        .then(d => d.json())
        .catch(e => console.log('Error!! ',e))
}