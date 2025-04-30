function goTo(page) {
    if (page === 'period') {
      window.location.href = "period-tracker.html"; // or your actual page
    } else if (page === 'pcod') {
      window.location.href = "pcod-test.html"; // or your actual page
    }
  }
  
    function navigateTo(page) {
      window.location.href = page;
    }

    function logout() {
      import("https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js").then(({ getAuth, signOut }) => {
        const auth = getAuth();
        signOut(auth).then(() => {
          alert("Logged out successfully.");
          window.location.href = "login.html";
        });
      });
    }

    function exitApp() {
      if (confirm("Are you sure you want to exit the app?")) {
        window.open('', '_self').close();
        window.location.href = "about:blank";
      }
    }
  