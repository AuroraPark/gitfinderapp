buttonArray = ["Public Repos", "Public Gists", "Followers", "Following"];
listArray = ["Company", "Website/Blog", "Location", "MemberSince"];
repolistArray = ["Stars", "Wathers", "Forks"];
class answer {
  constructor(data) {
    this.public_repos = data.data.public_repos;
    this.public_gists = data.data.public_gists;
    this.followers = data.data.followers;
    this.following = data.data.following;
    this.blog = data.data.blog;
    this.location = data.data.location;
    this.company = data.data.company;
    this.created_at = data.data.created_at;
    this.avatar_url = data.data.avatar_url;
  }

  getRepos() {
    const infoEl = document.createElement("button");
    infoEl.className = "info";
    infoEl.id = "repos";
    infoEl.innerHTML = buttonArray[0] + " : " + `${this.public_repos}`;
    return infoEl;
  }
  getGists() {
    const infoEl = document.createElement("button");
    infoEl.className = "info";
    infoEl.id = "gists";
    infoEl.innerHTML = buttonArray[1] + " : " + `${this.public_gists}`;
    return infoEl;
  }
  getFollowers() {
    const infoEl = document.createElement("button");
    infoEl.className = "info";
    infoEl.id = "followers";
    infoEl.innerHTML = buttonArray[2] + " : " + `${this.followers}`;
    return infoEl;
  }
  getFollowing() {
    const infoEl = document.createElement("button");
    infoEl.className = "info";
    infoEl.id = "following";
    infoEl.innerHTML = buttonArray[3] + " : " + `${this.following}`;
    return infoEl;
  }

  getCom() {
    const infoEl = document.createElement("div");
    infoEl.className = "list";
    infoEl.id = "com";
    infoEl.innerHTML = listArray[0] + " : " + `${this.company}`;
    return infoEl;
  }
  getBlog() {
    const infoEl = document.createElement("div");
    infoEl.className = "list";
    infoEl.id = "blog";
    infoEl.innerHTML = listArray[1] + " : " + `${this.blog}`;
    return infoEl;
  }
  getLoc() {
    const infoEl = document.createElement("div");
    infoEl.className = "list";
    infoEl.id = "loc";
    infoEl.innerHTML = listArray[2] + " : " + `${this.location}`;
    return infoEl;
  }
  getMemberSince() {
    const infoEl = document.createElement("div");
    infoEl.className = "list";
    infoEl.id = "memberSince";
    infoEl.innerHTML = listArray[3] + " : " + `${this.created_at}`;
    return infoEl;
  }
  getImage() {
    const imgEl = document.createElement("img");
    imgEl.src = `${this.avatar_url}`;
    imgEl.className = "avatar";
    return imgEl;
  }
}

class repos {
  constructor(data, options) {
    this.name = data[options].name;
    this.stars = data[options].stargazers_count;
    this.whatchers = data[options].watchers_count;
    this.forks = data[options].forks;
  }
  getName() {
    const infoEl = document.createElement("p");
    infoEl.className = "list";
    infoEl.id = "name";
    infoEl.innerHTML = `${this.name}`;
    return infoEl;
  }
  getStars() {
    const infoEl = document.createElement("button");
    infoEl.className = "list";
    infoEl.id = "stars";
    infoEl.innerHTML = repolistArray[0] + " : " + `${this.stars}`;
    return infoEl;
  }
  getWatchers() {
    const infoEl = document.createElement("button");
    infoEl.className = "list";
    infoEl.id = "watchers";
    infoEl.innerHTML = repolistArray[1] + " : " + `${this.whatchers}`;
    return infoEl;
  }
  getForks() {
    const infoEl = document.createElement("button");
    infoEl.className = "list";
    infoEl.id = "forks";
    infoEl.innerHTML = repolistArray[2] + " : " + `${this.forks}`;
    return infoEl;
  }
}

const infoContainer = document.querySelector("#infoContainer");
