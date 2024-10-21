const hello = async () => {
    try {
        const response = await fetch("https://api.github.com/users/iliakan")
        const data = await response.json()
        console.log(data)
        alert(JSON.stringify(data))
    } catch (err) {
        alert(err)
    }
}
hello()