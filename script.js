const wishes = [
    "Roses are red, violets are blue, sugar is sweet, and so are you!",
    "You make my heart skip a beat every day. Happy Valentine's!",
    "To the love of my life: You're my everything.",
    "Wishing you a day filled with love and joy.",
    "Forever and always, my Valentine."
];

function generateWish() {
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    document.getElementById('wish').textContent = randomWish;
}
