(function () {
  function formatStarCount(count) {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(count >= 10000000 ? 0 : 1).replace(/\.0$/, "") + "M";
    }
    if (count >= 1000) {
      return (count / 1000).toFixed(count >= 10000 ? 0 : 1).replace(/\.0$/, "") + "k";
    }
    return String(count);
  }

  function extractRepoPath(url) {
    try {
      var parsed = new URL(url);
      if (parsed.hostname !== "github.com") {
        return null;
      }
      var parts = parsed.pathname.split("/").filter(Boolean);
      if (parts.length < 2) {
        return null;
      }
      return parts[0] + "/" + parts[1];
    } catch (error) {
      return null;
    }
  }

  function updateGitHubStars() {
    var links = document.querySelectorAll(".paper-box .paper-link-github[href*='github.com/']");

    links.forEach(function (link) {
      if (link.dataset.starsLoaded === "true") {
        return;
      }

      var repoPath = extractRepoPath(link.href);
      if (!repoPath) {
        return;
      }

      fetch("https://api.github.com/repos/" + repoPath, {
        headers: {
          Accept: "application/vnd.github+json"
        }
      })
        .then(function (response) {
          if (!response.ok) {
            throw new Error("GitHub API request failed");
          }
          return response.json();
        })
        .then(function (data) {
          if (typeof data.stargazers_count !== "number") {
            return;
          }

          var count = document.createElement("span");
          count.className = "paper-link-star-count";
          count.textContent = "★ " + formatStarCount(data.stargazers_count);

          link.appendChild(count);
          link.dataset.starsLoaded = "true";
          link.setAttribute("aria-label", "GitHub, " + data.stargazers_count + " stars");
        })
        .catch(function () {
          // Keep the button usable even if the GitHub API is unavailable.
        });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateGitHubStars);
  } else {
    updateGitHubStars();
  }
})();
