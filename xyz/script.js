async function getUser() {
    const username = document.getElementById('username').value;
    const url = `https://api.github.com/users/${username}`;

    try {
        const response = await fetch(url);
        const user = await response.json();

        if (response.status === 200) {
            displayUser(user);
        } else {
            document.getElementById('profile').innerHTML = `<p>User not found</p>`;
        }
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}

function displayUser(user) {
    const profile = `
        <img src="${user.avatar_url}" alt="${user.login}" width="150">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <p>Followers: ${user.followers} - Following: ${user.following}</p>
        <p>Public Repos: ${user.public_repos}</p>
        <a href="${user.html_url}" target="_blank">View Profile on GitHub</a>
    `;
    document.getElementById('profile').innerHTML = profile;
}
