function login(email, pass, cb) {
    setTimeout(() => {
        cb({ userID: email, isLoggedIn: true, message: "Login successful" });
    }, 3000);
}

function getVideoList(cb) {
    setTimeout(() => {
        cb(["video1", "video2", "video3"]);
    }, 2000);
}

function getVideoDetails(video, cb) {
    setTimeout(() => {
        cb({ title: video, duration: "2 mins" });
    }, 1000);
}

// Proper callback chaining
login("user@example.com", "password", (userDetails) => {
    console.log("User Details:", userDetails);

    getVideoList((videoList) => {
        console.log("Video List:", videoList);

        videoList.forEach(video => {
            getVideoDetails(video, (details) => {
                console.log("Video Details:", details);
            });
        });
    });
});

// Promise Example
let myPromise = new Promise((res, rej) => {

    let data = "";

    if (data) {
        res(data);
    } else {
        rej("Error: no data found");
    }
});

myPromise
    .then((d) => {
        console.log("Promise Resolved:", d);
    })
    .catch((err) => {
        console.log("Promise Rejected:", err);
    });