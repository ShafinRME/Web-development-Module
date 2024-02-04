const friendsNameLength = (friends) => {
    let evenFriends = [];
    for (friend of friends) {
        let friendLength = friend.length;
        if (friendLength % 2 === 0) {
            evenFriends.push(friend);
        }
        else {
            continue;
        }
    }

    return evenFriends;
}

const inputFriends = ['Rahim', 'Kalamama', 'Tumiamiami', 'Shakilll'];

let evenFriendsOut = friendsNameLength(inputFriends);
console.log(evenFriendsOut);