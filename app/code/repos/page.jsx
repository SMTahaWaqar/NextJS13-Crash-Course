async function getRepos () {
    const res = await fetch('https://api.github.com/users/SMTahaWaqar/repos');
    const repos = await res.json();
    return repos
}

const ReposPage = async () => {
    const repos = await getRepos();

  return (
    <div>
      {repos[0].name}
    </div>
  )
}

export default ReposPage
